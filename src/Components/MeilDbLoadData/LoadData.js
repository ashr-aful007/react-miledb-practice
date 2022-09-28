import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Miel from '../Miel/Miel';
import './LoadData.css'



const LoadData = () => {
    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState("")
    const [cart, setCart] = useState([])

    const handleCart = (selectMeail) =>{
               setCart(selectMeail)
    }
    console.log(cart)

     useEffect(()=>{
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
     },[search])

     return (
          <div>
               <div>
                    <input onChange={(e)=> setSearch(e.target.value)} className='input-serch' type="text" />
                    <button className='search-btn'>Search</button>
               </div>

               <div className='Card-container'>
                    <div className='product-container'>
                    {
                         meals.map(meal=> <Miel meal={meal}
                               key={meal.idMeal} handleCart={handleCart}></Miel>)
                    }
               </div>
               <div className='select-section'>
                    <Cart cart={cart}></Cart>
               </div>
           </div>

          </div>
     );
};

export default LoadData;