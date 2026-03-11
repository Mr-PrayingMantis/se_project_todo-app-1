import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor ({ popupSelector, handleFormSubmit }) {
        super({  popupSelector });
        this._popupForm = this._popupElement.querySelector(".popup__form");
        this._inputList = this._popupForm.querySelectorAll(".popup__input");
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValue() {
        const formValues  = {};
        this._inputList.forEach((input) => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }

    setEventListeners() {
        super.setEventListeners();        
        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const inputValue = this._getInputValue();
             _getInputValues();
             return _getInputValues;
        });
    }
}
export default PopupWithForm;