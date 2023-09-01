import React, {useContext} from 'react'
import { AppContext } from '../App';
import { Link } from 'react-router-dom'

export default function Header() {

  const {totalPrice, toggleBasket} = useContext(AppContext)

  return (
    <header>
        <Link to="/" className="site-logo">
          <img src="img/logo-icon.svg" alt="site-logo" className="site-logo__img" />
          <div className="site-logo__text">
            <h2>REACT SNEAKERS</h2>
            <span>Магазин лучших кроссовок</span>
          </div>
        </Link>
        <nav >
          <ul>
            <li>
              <button className='nav__basket' onClick={toggleBasket}>
                <img src="img/nav-basket.svg" alt="basket" />
                <span>{totalPrice + Math.round(totalPrice/20)} руб.</span>
              </button>              
            </li>
            <li>
              <Link to="/favorites">
                <img src="img/nav-favorite.svg" alt="favorite" />     
              </Link>    
            </li>
            <li>
              <Link to="/purchases">
                <img src="img/nav-user.svg" alt="user" />
              </Link>               
            </li>
          </ul>
        </nav>
    </header>
  )
}
