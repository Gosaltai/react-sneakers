import Card from "../components/Card";
function Home ( {items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddFavorite,
    onAddToCart,
}) {
    return(

        <div className="content">
        <div className="search">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="search" />
            {searchValue && <img onClick={() => setSearchValue('')} className="clear" src="/img/btn-remove.svg" alt="clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
          </div>
        </div>
        <div className="sneakers">
          {items.filter((item) => item.title.toUpperCase().includes(searchValue.toUpperCase()))
          .map((item, index) => (
            <Card 
            key={index}
            onFavorite = { (obj) => onAddFavorite(obj)} 
            onPlus = { (obj) => onAddToCart(obj)}
            {...item}/>
          ))}
        </div>
      </div>
    )
}

export default Home