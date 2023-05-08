import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: 'img/Sneakers1.jpg'},
  {title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: 'img/Sneakers2.jpg'},
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: 'img/Sneakers3.jpg'},
  {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8499, imageUrl: 'img/Sneakers4.jpg'},
]

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="search">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="search" />
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="sneakers">
          {arr.map((obj) => (
            <Card title = {obj.title} price = {obj.price} imageUrl = {obj.imageUrl} onClick = {() => console.log(obj)}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
