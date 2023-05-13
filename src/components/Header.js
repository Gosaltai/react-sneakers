import {Link} from "react-router-dom"

function  Header(props) {
    return(
        <header>
        <Link to="/">
          <div className="headerLeft">
            <img width={40} height={40} src="/img/logo.png" alt="" />
            <div className="headerInfo"> 
              <h3>React Sneacers</h3>
              <p>Магазин лучших кросовок</p>
            </div>
          </div>
        </Link>
        <ul className="headerRight">
          <li onClick={props.onClickCart} className="btn-card">
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li className="heart">
            <Link to="/favorites"><img width={21} height={19} src="/img/live.svg" alt="" /></Link>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="" />
          </li>
        </ul>
     </header>
    )
}

export default Header
