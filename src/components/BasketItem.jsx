import React, {useContext} from 'react'
import { AppContext } from '../App';

export default function BasketItem({props}) {

    const {removeFromBasket} = useContext(AppContext)

  return (
    <div className="basket__item">
        <img src={"img/card__images/" + props.img} alt="picture of a sneakers" className="basket__item__img" />
        <div className="basket__item__text">
            <span>
                {props.title}
            </span>
            <span className="basket__item__price">
                {props.price} руб.
            </span>
        </div>
        <button className="basket__item__remove-btn" onClick={() => removeFromBasket(props)}>
            <img src="img/cross.svg" alt="remove" />
        </button>
    </div>
  )
}
