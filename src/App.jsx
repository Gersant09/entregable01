import { useState } from 'react'
import './App.css'
import ContainerInfo from './components/ContainerInfo'
import db from "./db/db.json"
import "./components/styles/ContainerInfo.css"
import "./components/styles/Button.css"

const images = ["bg1","bg2","bg3","bg4"]

function App() {


  const getRandomItem = (listItems) => {
    const ramdonIndex = Math.floor(Math.random() * listItems.length)
    return listItems[ramdonIndex]
  }

  const [quote, setquote] = useState(getRandomItem(db))
  const [bgImage, setbgImage] = useState(getRandomItem(images))

  const handleNewQuote = ()=>{
    setquote(getRandomItem(db))
    setbgImage(getRandomItem(images))
  }

  return (
    <div className={`App ${bgImage}`}>

      {/* <ContainerInfo quote={quote} handleNewQuote ={handleNewQuote} /> */}
      <section className='containerInfo'>
        <h1 className='containerInfor__tittle'>INFOGALAX</h1>

        <article className='containerInfo__phrase'>
          <p>{quote.phrase}</p>
        </article>

        {/* <Button handleNewQuote={handleNewQuote}/> */}
        <button className='button' onClick={handleNewQuote}><img src="/images/vector.png" alt="" /></button>
        

        <article className='containerInfo__author'>
          <h4>Fuente: {quote.author}</h4>
        </article>

      </section>


      

    </div>
  )
}

export default App
