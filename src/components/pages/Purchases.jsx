import React from 'react'
import SneakersCard from '../SneakersCard'

export default function Purchases({boughtItems}) {
  return (
    <div className="purchases__wrap">
        <h1 className="purchases__h1">Мои покупки</h1>
        {(boughtItems.length > 0)?
            <div className="catalog__content">
                {boughtItems.map(item => <SneakersCard props={item} key={item.id} />)}
            </div>:
            <div className="purchases__empty">Вы пока ещё ничего не купили</div>
        }
    </div>
  )
}
