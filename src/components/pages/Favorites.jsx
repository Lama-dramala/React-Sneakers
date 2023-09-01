import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import SneakersCard from '../SneakersCard'
import Button from '../Button'
import { AppContext } from '../../App'

export default function Favorites() {
  
  const {favoriteItems} = useContext(AppContext)
  
  return (
    <div className="favorites__wrap">
        <h1 className="favorites__h1">Мои закладки</h1>
        {(favoriteItems.length > 0) ? 
          <div className="catalog__content">           
            {favoriteItems.map(card => <SneakersCard props={card} key={card.id} />)}
          </div>:
          <div className="favorites__empty">
            <img src="img/favorites__empty.png" className="favorites__empty__img" />
            <h4 className="favorites__empty__h4">У вас ещё нет закладок</h4>
            <span>Вы ничего не добавляли в закладки</span>
            <Link to="/">
              <Button 
                content={"Вернуться назад"}
                addClass={"favorites__empty__btn"}  
              />
            </Link>
          </div>
        }
    </div>
  )
}
