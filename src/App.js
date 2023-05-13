import React from "react";
import {Route, Routes} from "react-router-dom"
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from  "./pages/Home"
import Favorites from  "./pages/Favorites"

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorite, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://645a352c95624ceb21faed8c.mockapi.io/items').then((res) => {
      setItems(res.data)
    });
    axios.get('https://645a352c95624ceb21faed8c.mockapi.io/cart').then((res) => {
      setCartItems(res.data)
    });
    axios.get('https://645a352c95624ceb21faed8c.mockapi.io/favorites').then((res) => {
      setFavorites(res.data)
    });
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://645a352c95624ceb21faed8c.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://645a352c95624ceb21faed8c.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const onAddFavorite = async (obj) => {
    try {
      if(favorite.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://645a352c95624ceb21faed8c.mockapi.io/favorites/${obj.id}`)
      } else {
        const {data} = await axios.post('https://60d381a361160900173c93d3.mockapi.io/favorites', obj)
        setFavorites((prev) =>[...prev, data]);
      }
    } catch (error) {
      alert('Не удалось загрузить в фавориты')
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose = {() => setCartOpened(false)} onRemove = {onRemoveItem} />}
      <Header onClickCart  = {() => setCartOpened(true)}/>
      <Routes> 
        <Route path="/" element = {
        <Home 
        items={items}
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        onChangeSearchInput={onChangeSearchInput}
        onAddFavorite={onAddFavorite}
        onAddToCart={onAddToCart}
        />} 
        exact />
        </Routes>
        
        <Header onClickCart  = {() => setCartOpened(true)}/>
      <Routes> 
        <Route path="/favorites" element = {
        <Favorites items={favorite} onAddFavorite ={onAddFavorite} />} exact 
        />
      </Routes>
    </div>
  );
}
   
export default App;
