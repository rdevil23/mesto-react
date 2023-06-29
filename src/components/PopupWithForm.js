import closeBtn from '../images/buttons/close-btn.svg';

function PopupWithForm({ title, name, children, isOpen, onClose }) {
  return (
    <section className={`popup ${name}-popup ${isOpen && `popup_opened`}`}>
      <div className="popup__container">
        <img onClick={onClose} src={closeBtn} className="popup__close-btn" alt="Кнопка закрытия попапа" />
        <h3 className="popup__title">{title}</h3>
        <form className="popup__edit-form" name="edit-form" noValidate>
          {children}
          <button className="popup__save-btn" type="submit" value="Сохранить">
            Сохранить
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
