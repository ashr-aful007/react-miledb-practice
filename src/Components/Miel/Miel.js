import React from 'react';
import './Miel.css'
const Miel = (props) => {
          const {meal,handleCart} = props
     const {strArea, strCategory, strInstructions, strMealThumb} = props.meal
   
     return (
          <div className='meals-section'>
               <div className='meals-thumnal'>
                    <img src={strMealThumb} alt="loading" />
               </div>
               <div className='meals-intro'>
                   <h4>{strCategory}</h4>
                   <p>{strArea}</p>
                   <p>{strInstructions.slice(0, 50)}</p>
               </div>
               <button onClick={()=>handleCart(props.meal)} className='select-btn'>Select</button>
          </div>
     );
};

export default Miel;