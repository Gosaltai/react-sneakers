function  Header() {
    return(
        <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div className="headerInfo"> 
            <h3>React Sneacers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={21} height={19} src="/img/live.svg" alt="" />
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="" />
          </li>
        </ul>
     </header>
    )
}

export default Header
