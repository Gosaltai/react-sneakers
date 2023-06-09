import React from "react"

function Drawer({onClose, onRemove, items = []}) {
    return(
        <div className="overlay">
        <div className="drawer">
          <h2>Корзина <img onClick={onClose} width={32} height={32} className="removeBtn" src="/img/btn-remove.svg" alt="close" /></h2>
          <div className="items">
            {items.map((obj) =>
              <div className="cartItem">
                 <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cartItemImg"></div>
                  <div className="itenInfo">
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                    <img onClick={() => onRemove(obj.id)} width={32} height={32} className="removeBtn" src="/img/btn-remove.svg" alt="deleted" />
              </div>
            )}

          </div>
            <div className="cartTotalBlock">
              <ul className="cartTotalBlock">
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button> 
            </div>
        </div>
      </div> 
    )
}

export default Drawer