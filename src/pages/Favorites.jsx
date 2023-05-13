import Card from "../components/Card"

function Favorites (items, onAddFavorite) {
    return(

        <div className="content">
        <div className="search">
          <h1>Мои закладки</h1>
        </div>
        <div className="sneakers">
          {items.map((item, index) => (
              <Card 
              key={index}
              favorited={true}
              onFavorite={onAddFavorite}
              {...item}/>
            ))}
        </div>
      </div>
    )
}

export default Favorites