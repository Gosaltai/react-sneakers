import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://645a352c95624ceb21faed8c.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json)
    })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev =>[...prev, obj]);
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose = {() => setCartOpened(false)} />}
      <Header onClickCart  = {() => setCartOpened(true)}/>
      <div className="content">
        <div className="search">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="search" />
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="sneakers">
          {items.map((item) => (
            <Card 
            title = {item.title}
            price = {item.price} 
            imageUrl = {item.imageUrl} 
            onFavorite = {()=> console.log("Добавили в закладки")} 
            onPlus = { (obj) => onAddToCart(obj)}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
