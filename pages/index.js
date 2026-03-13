import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

import  {initialTodos, validationConfig} from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");


const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const handleFormSubmit = (data) => {
    const name = data.name;
    const dateInput = data.date;

const dueDate = new Date(dateInput);
dueDate.setMinutes(dueDate.getMinutes() + dueDate.getTimezoneOffset());

  const id = uuidv4();

  const values = { name, date: dueDate, id };
  const todo = generateTodo(values);
 
  section.addItem(todo);
  todoCounter.updateTotal(true) 
  newTodoValidator.resetValidation()
  addTodoPopup.close();    
  };
  
const addTodoPopup = new PopupWithForm({
    popupSelector: "#add-todo-popup",
    handleFormSubmit,
});

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
     const todo = generateTodo(item);
  section.addItem(todo);
  },
  containerSelector: ".todos__list",
});

addTodoPopup.setEventListeners();

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

const handleDelete = (completed) => {
  todoCounter.updateTotal(false);
  if (completed) {
    todoCounter.updateCompleted(false);
  }
};

// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
   const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
 section.renderItems();