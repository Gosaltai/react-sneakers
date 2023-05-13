import React from 'react';
import styles from './Card.module.css';
function Card({id, title, imageUrl, price, onFavorite, onPlus, favorited = false}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price})
    setIsAdded(!isAdded)
  }

  const onClickFavorit = () =>{
    onFavorite({id, title, imageUrl, price})
    setIsFavorite(!isFavorite)
  }

    return  (
        <div className={styles.card}>
        <div className={styles.favorite} onClick={onClickFavorit}>
          <img src={isFavorite ? "/img/like.svg" : "/img/unelike.svg"} alt="Unliked" />
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