import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import '../index.css';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        children={
          <>
            <input className="popup__input popup__input_type_link" id="avatar-link" name="avatar" type="url" placeholder="Ссылка на аватар" required />
            <span className="popup__input-error link-error" id="avatar-link-error"></span>
          </>
        }
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        children={
          <>
            <input className="popup__input popup__input_type_name" id="input-name" name="name" type="text" minLength="2" maxLength="40" required />
            <span className="popup__input-error name-error" id="input-name-error"></span>
            <input className="popup__input popup__input_type_job" id="input-job" name="about" type="text" minLength="2" maxLength="200" required />
            <span className="popup__input-error job-error" id="input-job-error"></span>
          </>
        }
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        title="Новое место"
        name="add"
        children={
          <>
            <input className="popup__input popup__input_type_title" id="input-title" name="name" type="text" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__input-error title-error" id="input-title-error"></span>
            <input className="popup__input popup__input_type_link" id="input-link" name="link" type="url" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-error" id="input-link-error"></span>
          </>
        }
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm name="confirm" title="Вы уверены?" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
