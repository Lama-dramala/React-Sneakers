import React, {useState} from 'react'
import SneakersCard from "../SneakersCard"



export default function SneakersList({cards}) {

  const[searchValue, setSearchValue] = useState("")

  return (
    <div className="catalog">
      <div className="catalog__head">
        <h1 className="catalog__h1">
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="catalog__search-bar__wrap">
          <input 
            value={searchValue} 
            onChange={e => setSearchValue(e.target.value)}
            type="text" 
            placeholder="Поиск..." 
            className="catalog__search-bar" 
          />
          <img src="img/search.svg" alt="" className="catalog__search-bar__icon" />
        </div>
      </div>
      {(cards.filter((card) => card.title.toUpperCase().includes(searchValue.toUpperCase().trim())).length > 0)?
      <div className="catalog__content">
        {/* Карточка отрисовывается только в том случае, если название товара соответствует поисковой строке */}
        {cards.filter((card) => card.title.toUpperCase().includes(searchValue.toUpperCase().trim()))
        .map(card => <SneakersCard props={card} key={card.id} />)}
      </div>:
      <div className="catalog__empty-search">По вашему запросу не найдено ни одного результата</div>

      }      
      
    </div>
  )
}
