function Drawer() {
    return(
        <div style={{display:'none'}} className="overlay">
        <div className="drawer">
          <h2>Корзина <img width={32} height={32} className="removeBtn" src="/img/btn-remove.svg" alt="deleted" /></h2>
          <div className="items">
            <div className="cartItem">
              <div style={{backgroundImage: 'url(/img/Sneakers1.jpg)'}} className="cartItemImg"></div>
              <div className="itenInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img width={32} height={32} className="removeBtn" src="/img/btn-remove.svg" alt="deleted" />
            </div>
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