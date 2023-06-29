import React, { useEffect } from 'react';
import Card from './Card';
import api from '../utils/api';

import avatar from '../images/ava.jpg';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userInfo, card]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(card);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main>
      <section className="profile" aria-label="Раздел профиля">
        <button onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar-edit-btn" type="button" aria-label="Кнопка изменения аватара">
          <img className="profile__avatar" alt="Ваша аватарка" />
        </button>
        <div className="profile__info">
          <div className="profile__top-str">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={onEditProfile} className="profile__edit-btn" type="button" aria-label="Кнопка редактирования профиля"></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button onClick={onAddPlace} className="profile__add-btn" type="button" aria-label="Кнопка добавления поста"></button>
      </section>

      <section className="elements" aria-label="Фотогалерея">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card card={card} key={card._id} name={card.name} link={card.link} likes={card.likes.length} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
