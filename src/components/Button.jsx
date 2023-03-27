import React from 'react'
import "./styles/Button.css"

const Button = ({handleNewQuote}) => {
  return  <button className='button' onClick={handleNewQuote}><img src="/images/vector.png" alt="" /></button>
    
  
}

export default Button
