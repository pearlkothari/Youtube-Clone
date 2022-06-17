import moment from 'moment';
import numeral from 'numeral';
import React from 'react'
import './Recommend.scss';

function Recommend() {
  return (
    <div className='_Recommend'>
        <img 
          src="https://i.ytimg.com/an_webp/BmVVkpCBWpQ/mqdefault_6s.webp?du=3000&sqp=CIjRsZUG&rs=AOn4CLCyhEOHuH_Sas9UEDZvRhLDdTNy9g" 
          alt="" 
          className="_image" 
        />
        <div className='_desc'>
            <span className='_title'>
                  React shopping cart with context api for state management. Project build full tutorial.
            </span>
            <span className="_channel">
                <span className='_name'>
                    Pearl Kothari
                </span>
                <span className='_detail'> 
                    {numeral(100000).format("0.a").toLocaleUpperCase()} Views • {moment('2001-09-09').fromNow()}
                </span>
            </span>
        </div>
    </div>
  )
}

export default Recommend