import React, {useState, useContext} from 'react'
import { AppContext } from '../App';
import BasketItem from './BasketItem'
import Button from './Button'

export default function Basket({checkout, basketIsOpen}) {

  const {basketItems, totalPrice, toggleBasket} = useContext(AppContext)

  const [isBought, setIsBought] = useState(false)

  function onClose(){
    toggleBasket()
    if(isBought){
      setTimeout(() => setIsBought(false), 500)
    }
    
  }

  function onBuy(){
    checkout()
    setIsBought(true)
  }

  return (
    <div className={basketIsOpen? "basket__wrap active": "basket__wrap"} onClick={onClose}>
        <div className={basketIsOpen? "basket active": "basket"} onClick={(event) => {event.stopPropagation()}}>
            <div className="basket__top">
              <h2 className="basket__h2">Корзина</h2>
              {(isBought) ?
                <div className="basket__checkout">
                  <img src="img/basket__checkout.jpg" alt="" />
                  <h4 className="basket__checkout__h4">Заказ оформлен!</h4>
                  <p>Ваш заказ скоро будет передан курьерской доставке</p>
                  <Button func={onClose} content={"Вернуться назад"} addClass={"basket__empty__btn"} />
                </div>:
                <div>
                  {(basketItems.length > 0) ?
                    <div className="basket__items">
                        {basketItems.map(basketItem => <BasketItem props={basketItem} key={basketItem.id} />)}
                    </div>:
                    <div className="basket__empty">
                      <img src="img/empty__basket.svg" alt="" />
                      <h4 className="basket__empty__h4">Корзина пустая</h4>
                      <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                      <Button func={onClose} content={"Вернуться назад"} addClass={"basket__empty__btn"} />
                    </div>
                  }
                </div>
              }
            </div>
            {(basketItems.length > 0) &&
              <div className="basket__bottom">
                <div className="basket__bill">
                  <span>Итого: </span>
                  <hr className="basket__bill__hr" />
                  <span className="basket__total-prie">
                    {totalPrice} руб
                  </span>
                </div>
                <div className="basket__bill">
                  <span>Налог 5%:  </span>
                  <hr className="basket__bill__hr" />
                  <span className="basket__taxes">
                    {Math.round(totalPrice/20)} руб                
                  </span>
                </div>
                <Button func={onBuy} content={"Оформить заказ"} addClass={"basket__bottom__btn"} />
              </div> 
            }               
        </div>
    </div>
  )
}
