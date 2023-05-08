import styles from './Card.module.css'
function Card(props) {
    return  (
        <div className={styles.card}>
        <div className={styles.favorite}>
          <img src="/img/unelike.svg" alt="Unliked" />
        </div>
        <img width ={133} height = {112} src={props.imageUrl} alt="" />
        <h5>{props.title}</h5>
        <div className={styles.cardButton}>
          <div className={styles.cardInfo}>
            <span>Цена</span>
            <b>{props.price} руб.</b>
          </div>
          <button className={styles.button} onClick={props.onClick}>
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
    )
}

export default Card;