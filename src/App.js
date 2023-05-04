function App() {
  return (
    <div className="wrapper">
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
      <div className="content">
        <div className="search">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="search" />
            <input placeholder="Поиск..."/>
          </div>
        </div>
        
        <div className="sneakers">
        <div className="card">
          <img width ={133} height = {112} src="/img/Sneakers1.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="cardInfo">
              <span>Цена</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
          </div>
        </div>
        <div className="card">
          <img width ={133} height = {112} src="/img/Sneakers2.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="cardInfo">
              <span>Цена</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
          </div>
        </div>
        <div className="card">
          <img width ={133} height = {112} src="/img/Sneakers3.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="cardInfo">
              <span>Цена</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
          </div>
        </div>
        <div className="card">
          <img width ={133} height = {112} src="/img/Sneakers4.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="cardInfo">
              <span>Цена</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
