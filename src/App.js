import React, {useEffect, useState} from "react";
import { Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import SneakersList from "./components/pages/SneakersList"
import Basket from "./components/Basket"
import Favorites from "./components/pages/Favorites";
import Purchases from "./components/pages/Purchases";

export const AppContext = React.createContext({})

function App() {
  
  // Инициализация основных массивов
  useEffect(() => {
    const basketContent = JSON.parse(localStorage.getItem("basketItems"))
    if(basketContent){
      setBasketItems(basketContent)
    }
    const favoriteContent = JSON.parse(localStorage.getItem("favoriteItems"))
    if(favoriteContent){
      setFavoriteItems(favoriteContent)
    }
    const boughtContent = JSON.parse(localStorage.getItem("boughtItems"))
    if(boughtContent){
      setBoughtItems(boughtContent)
    }
  }, [])

  // Список товаров
  const [cards, setCards] = useState([
    {id: 1, img:"img-1.jpg", title:"Мужские Кроссовки Nike Blazer Mid Suede", price:"12999"},
    {id: 2, img:"img-2.jpg", title:"Мужские Кроссовки Nike Air Max 270", price:"12999"},
    {id: 3, img:"img-3.jpg", title:"Мужские Кроссовки Nike Blazer Mid Suede", price:"8499"},
    {id: 4, img:"img-4.jpg", title:"Кроссовки Puma X Aka Boku Future Rider", price:"8999"},
    {id: 5, img:"img-1.jpg", title:"Мужские Кроссовки Nike Blazer Mid Suede", price:"12999"},
    {id: 6, img:"img-2.jpg", title:"Мужские Кроссовки Nike Air Max 270", price:"12999"},
    {id: 7,img:"img-3.jpg", title:"Мужские Кроссовки Nike Blazer Mid Suede", price:"8499"},
    {id: 8, img:"img-4.jpg", title:"Кроссовки Puma X Aka Boku Future Rider", price:"8999"},
    {id: 9, img:"img-1.jpg", title:"Мужские Кроссовки Nike Blazer Mid Suede", price:"12999"},
    {id: 10, img:"img-2.jpg", title:"Мужские Кроссовки Nike Air Max 270", price:"12999"},
    {id: 11, img:"img-3.jpg", title:"Мужские Кроссовки Nike Blazer Mid Suede", price:"8499"},
    {id: 12, img:"img-4.jpg", title:"Кроссовки Puma X Aka Boku Future Rider", price:"8999"},
  ])
  
  // Корзина
  const [basketItems, setBasketItems] = useState([])


  function addToBasket(basketItem){
    setBasketItems([...basketItems, basketItem])
    localStorage.setItem("basketItems", JSON.stringify([...basketItems, basketItem]))   
  }

  function removeFromBasket(basketItem){
    setBasketItems(basketItems.filter(item => item.id != basketItem.id))  
    localStorage.setItem("basketItems", JSON.stringify(basketItems.filter(item => item.id != basketItem.id)))   
  }

  const [basketIsOpen, setBasketIsOpen] = useState(false)
  function toggleBasket(){
    setBasketIsOpen(!basketIsOpen)
    if(!basketIsOpen){
      document.body.style.overflow = "hidden"
    } else{
      document.body.style.overflow = "auto"
    }
  }

  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    setTotalPrice(basketItems.reduce(function(sum, basketItem) {
      return sum + parseInt(basketItem.price);
    }, 0))
  }, [basketItems])

  // Избранное
  const [favoriteItems, setFavoriteItems] = useState([])

  function addToFavorite(favItem){
    setFavoriteItems([...favoriteItems, favItem])
    localStorage.setItem("favoriteItems", JSON.stringify([...favoriteItems, favItem]))
    console.log(favoriteItems)
  }
  
  function removeFromFavorite(favItem){
    setFavoriteItems(favoriteItems.filter(item => item.id != favItem.id))
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems.filter(item => item.id != favItem.id)))
    console.log(favoriteItems)
  }

  // Покупки
  const[boughtItems, setBoughtItems] = useState([])

  function checkout(){
    setBoughtItems([...basketItems])
    localStorage.setItem("boughtItems", JSON.stringify([...basketItems]))  
    setBasketItems([])
    localStorage.setItem("basketItems", JSON.stringify([]))
  }  

  return (    
    <AppContext.Provider value={{basketItems, totalPrice, addToBasket, removeFromBasket, 
    toggleBasket, favoriteItems, addToFavorite, removeFromFavorite}}>
      <div className="main-container">
        <Header />
        <Basket checkout={checkout} basketIsOpen={basketIsOpen} />
        <Routes>
          <Route path="/" element={
            <SneakersList cards={cards} />
          }/>
          <Route path="/favorites" element={
            <Favorites/>
          }/>
          <Route path="/purchases" element={
            <Purchases boughtItems={boughtItems} />
          }/>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;