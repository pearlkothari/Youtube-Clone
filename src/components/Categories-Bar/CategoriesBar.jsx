import React from 'react'
import { useState } from 'react'
import './CategoriesBar.scss';

function CategoriesBar() {
  const categories=[
    'All',
    'Gaming',
    'Live',
    'Music',
    'Ranveer Allahbadia',
    'Sadhguru',
    'Shemaroo',
    'Arjit Singh',
    'Stock Market',
    'Linkin Park',
    'Avicii',
    'TVF',
    'Shiva',
    'Anuv Jain',
    'Valorant',
    'Abhi and Niyu'
  ]

  const [currentElement,setcurrentElement]=useState('All');

  function updateCurrentElement(value){
    setcurrentElement(value);
  }
  return (
    <div className='categories-header'>
      {
        categories.map((value,index)=>{
            return (
              <span
              onClick={()=>updateCurrentElement(value)}
              key={index}
              className={
                  currentElement==value?'current':'inactive'
              }
              >{value}</span>
            )
        })
      }
    </div>
  )
}

export default CategoriesBar