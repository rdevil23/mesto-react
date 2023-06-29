import deleteBtn from '../images/buttons/delete-btn.svg';

function Card({ card, name, link, likes, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__item">
      <img src={deleteBtn} className="elements__delete" alt="кнопка 'удалить'" />
      <img onClick={handleClick} src={link} className="elements__img" alt={name} />
      <div className="elements__info">
        <h3 className="elements__text">{name}</h3>
        <div className="elements__likes-wrapper">
          <button className="elements__like" type="button" aria-label="кнопка 'нравится'"></button>
          <p className="elements__likes-counter">{likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
