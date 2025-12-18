import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title,category}) => {



{/* function for scroll Y axis if movie card using useref and useEffect */}
  const cardsRef = useRef();
  const handleWheel = (event)=>{
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{
        cardsRef.current.addEventListener('wheel',handleWheel)
  },[])

  return (
    <div className='title-cards'>
        <h1>{title ? title : "Popular on Netflix"}</h1>
        <div className='card-list' ref={cardsRef}>
          {/* mount card data here */}
          {cards_data.map((card,index)=>{
            return <div className='card' key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>

          })}
        </div>
      
    </div>
  )
}

export default TitleCards
