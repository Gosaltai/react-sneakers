import React from 'react';
import styles from './Card.module.css';
function Card({title, imageUrl, price, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price})
    setIsAdded(!isAdded)
  }

    return  (
        <div className={styles.card}>
        <div className={styles.favorite} onClick={onFavorite}>
          <img src="/img/unelike.svg" alt="Unliked" />
        </div>
        <img width ={133} height = {112} src={imageUrl} alt="" />
        <h5>{title}</h5>
        <div className={styles.cardButton}>
          <div className={styles.cardInfo}>
            <span>Цена</span>
            <b>{price} руб.</b>
          </div>
            <img className = {styles.plus} onClick = {onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus" />
        </div>
      </div>
    )
}

export default Card;