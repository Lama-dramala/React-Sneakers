import React, {useContext} from 'react'
import { AppContext } from '../App';

export default function SneakersCard({props}) {

  function isBought(){
    return basketItems.some(item => item.id == props.id)
  }

  function isFavorite(){
    return favoriteItems.some(item => item.id == props.id)
  }

  const {basketItems, addToBasket, removeFromBasket, favoriteItems, addToFavorite, 
  removeFromFavorite} = useContext(AppContext)

  return (
    <div className="catalog__card">
        {isFavorite()?
        <button onClick={() => removeFromFavorite(props)} className="catalog__card__fav-btn active">          
          <img src="img/fav-btn__active.svg" alt="added to favorite"/>
        </button> :
        <button onClick={() => addToFavorite(props)} className="catalog__card__fav-btn">
          <img src="img/fav-btn.svg" alt="add to favorite" />
        </button>
        }
        <img src={"img/card__images/" + props.img} alt="" className="catalog__card__img" />
        <h5 className="catalog__card__h5">{props.title}</h5>
        <div className="catalog__card__bottom">
             <div className="catalog__card__prices">
                <span className="catalog__card__price">Цена:</span>
                <span className="catalog__card__price-number">{props.price} руб.</span>
            </div>
            {isBought() ?
              <button onClick={() => removeFromBasket(props)} className="catalog__card__bought-btn">
                <img src="img/checked.svg" alt="bought" />
              </button> :
              <button onClick={() => addToBasket(props)} className="catalog__card__buy-btn">
                <img src="img/cross.svg" alt="buy" />
              </button>
            }
        </div>       
    </div>
  )
}
