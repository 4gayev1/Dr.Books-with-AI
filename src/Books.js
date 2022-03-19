import { useState,useEffect } from "react";
import "./style.css";
import alanBtn from "@alan-ai/alan-sdk-web";


const menuItems = [
    {name:"Family Money", price:"12.99",category:"adventure",src:"https://images-na.ssl-images-amazon.com/images/I/81qHEkVVniL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL210_SR195,210_.jpg"},
    {name:"Atomic Habits", price:"35.50",category:"self-improvement",src:"https://images-na.ssl-images-amazon.com/images/I/71F4+7rk2eL._AC_UL210_SR195,210_.jpg"},
    {name:"Reminders of Him", price:"7.99",category:"Novel",src:"https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL210_SR195,210_.jpg"},
    {name:"Or Else", price:"4.99",category:"Thriller",src:"https://images-na.ssl-images-amazon.com/images/I/91Hfuxsp3vL._AC_UL210_SR195,210_.jpg"},
    {name:"Will", price:"5.97",category:"self-improvement",src:"https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL210_SR195,210_.jpg"},
    {name:"The Match", price:"13.99",category:"Thriller",src:"https://m.media-amazon.com/images/I/816Xbz8dE3L._AC_UY218_.jpg"},
    {name:"Verity", price:"6.99",category:"Thriller",src:"https://images-na.ssl-images-amazon.com/images/I/610QYM5NxRL._AC_UL210_SR195,210_.jpg"},
    {name:"Can't Hurt Me", price:"8.10",category:"Master your Mind",src:"https://images-na.ssl-images-amazon.com/images/I/812jTyNSu1L.jpg"},
    {name:"Harry Potter and the Sorcerer's Stone, Book 1", price:"19.99",category:"Fantasy",src:"https://images-na.ssl-images-amazon.com/images/I/91tDBrO2u9L._AC_UL210_SR195,210_.jpg"},
    {name:"The Judge's List", price:"8.99",category:"Novel",src:"https://m.media-amazon.com/images/I/41E3EKUlXGS._SY346_.jpg"},
    {name:"The Atlas Six", price:"12.98",category:"Fantasy",src:"https://m.media-amazon.com/images/I/51LzpTvAR8L._SY346_.jpg"},
    {name:"Mission Possible", price:"12.99",category:"self-improvement",src:"https://m.media-amazon.com/images/I/51kFZM1HfNS._SY346_.jpg"},
    {name:"The Quiet Before", price:"1.25",category:"self-improvement",src:"https://images-na.ssl-images-amazon.com/images/I/41ohWoX-9wL._AC_SX184_.jpg"},
    {name:"Feel Better in 5", price:"13.45",category:"self-improvement",src:"https://m.media-amazon.com/images/I/41gDJ9na0RS.jpg"},
    {name:"The Last Green Valley", price:"12.99",category:"Novel",src:"https://m.media-amazon.com/images/I/515JAUAkOPL._SY346_.jpg"},
    {name:"Harry Potter and the Chamber of Secrets ", price:"14.99",category:"Fantasy",src:"https://m.media-amazon.com/images/I/51TA3VfN8RL._SY346_.jpg"},
    {name:"The Singing Trees", price:"17",category:"Novel",src:"https://m.media-amazon.com/images/I/510uN7sikZL.jpg"},
    {name:"The Time Machine", price:"11.99",category:"",src:"https://m.media-amazon.com/images/I/515cQky+F3L._SY346_.jpg"},
    {name:"The 7 Habits of Highly Effective People", price:"44.99",category:"self-improvement",src:"https://m.media-amazon.com/images/I/41mA50L+gQL.jpg"},
    {name:"15 Secrets Successful People Know About Time Management", price:"22",category:"self-improvement",src:"https://m.media-amazon.com/images/I/514of+uR-mL.jpg"},
    {name:"Harvard Business Review Entrepreneur's Handbook", price:"16.18",category:"self-improvement",src:"https://m.media-amazon.com/images/I/51ZUvWLaOaL.jpg"},
    {name:"The Last Thing He Told Me", price:"13.99",category:"Novel",src:"https://m.media-amazon.com/images/I/51aJ7twCu0L._SY346_.jpg"},
    {name:"A Court of Mist and Fury", price:"12.99",category:"Fantasy",src:"https://m.media-amazon.com/images/I/515sk-V3QDL.jpg"},
    {name:"Harry Potter and the Order of the Phoenix", price:"21.99",category:"Fantasy",src:"https://m.media-amazon.com/images/I/51-SI2+aQ2L.jpg"},
    {name:"The Last Wish: Introducing the Witcher", price:"32",category:"Fantasy",src:"https://m.media-amazon.com/images/I/51pRo5wpR4L.jpg"},
    {name:"The House in the Cerulean Sea", price:"8.50",category:"Fantasy",src:"https://m.media-amazon.com/images/I/51faF8gs0NL._SY346_.jpg"},
    {name:"Summer Frost", price:"20.99",category:"Fiction",src:"https://m.media-amazon.com/images/I/51asLaGTFPL.jpg"},
    {name:"Vampire Academy", price:"3.99",category:"Story",src:"https://m.media-amazon.com/images/I/51Ad5DDILVL.jpg"},
    {name:"Design It!", price:"25.99",category:"Systems Architecture",src:"https://images-na.ssl-images-amazon.com/images/I/41srOUdjYhL._SX415_BO1,204,203,200_.jpg"},
    {name:"A Court of Wings and Ruin", price:"22.45",category:"Fantasy",src:"https://m.media-amazon.com/images/I/51QRVCbF-tL.jpg"},
  ];



const Books = () => {

     
  const [menuItems, setMenuItems] = useState([])
  const [book, setBook] = useState([])

  const [cart, setCart] = useState([])

  useEffect(() => {
    alanBtn({
      key:
        "e80178ea4547e4907405ad8cc31d69222e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "getMenu") {
          setMenuItems(commandData.data)
          console.log(commandData)
         }else if (commandData.command === "addToCart") {
          addToCart(commandData.data)
         }else if(commandData.command === "getBook"){
          getBook(commandData.data)
         }
      },
    })
}, [])

const addToCart = (menuItem) =>{
  setCart((oldCart) =>{
    return[...oldCart, menuItem]
  })
}

const getBook = (menuItem) =>{
  setBook((oldCart) =>{
    return[...oldCart, menuItem]
  })
}

   return(
    <div className="App">

    

       <div className="alma">
    {menuItems.map((menuItem) => (
      <div key={menuItem.name} className="armud">
          <div className="f"><img src={menuItem.src} className="pic"/>
          <span>{menuItem.name} - ${menuItem.price} - {menuItem.category}</span></div>
          <button onClick={()=>addToCart(menuItem)}>Add to Cart</button>
      </div>
    ))}
    </div>          
    
    
        {book.map((b) => (
      <div key={b.name}>
          <div key={b.name} className="armud">
          <div className="f"><img src={b.src} className="pic"/>
          <span>{b.name} - ${b.price} - {b.category}</span></div>
          <button onClick={()=>addToCart(b)}>Add to Cart</button>
      </div>
      </div>
    ))}                



      <div>

    Cart:
  {cart.map((cartItem) => (
      <div key={cartItem.name}>
        <div className="f"><img src={cartItem.src} className="pic"/></div>
        {cartItem.name} - ${cartItem.price} - {cartItem.category}
        
      </div>
    ))}
  <button onClick={()=>setCart([])}>Remove All items</button>








      </div>
    
  </div>
   )
}

export default Books;

