import "./ModalWithForm.css";

function ModalWithForm({
  children,
  titleText,
  isOpen,
  onClose,
  buttonText = "Add garment",
  onSubmit,

  isValid = false,
}) {
  return (
    <div className={`modal ${isOpen ? " modal_opened" : ""}`}>
      <div className="modal__content">
        <div className="modal__header">
          <h2 className="modal__title">{titleText}</h2>
          <button onClick={onClose} type="button" className="modal__close">
            <img src="../../assets/close_btn.svg" alt="" />
          </button>
        </div>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button type="submit" className="modal__submit" disabled={!isValid}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
