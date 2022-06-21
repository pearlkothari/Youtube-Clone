import moment from 'moment';
import numeral from 'numeral';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Recommend.scss';

function Recommend({video}) {
  return (
    <div className='_Recommend'>
        <div className='thumbnail'>
          <LazyLoadImage 
            className='_image'
            src={"https://i.ytimg.com/vi/DI8QlyOd5D8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxWOnovMO-XCfsT9cqkAkn52yJsg" } 
            alt=""
            effect="blur"
          >
          </LazyLoadImage>
          <span className='duration'>{"1:22:20"}</span>
        </div>
        <div className='_desc'>
            <span className='_title'>
                  React shopping cart with context api for state management. Project build full tutorial.
            </span>
            <span className="_channel">
                <span className='_name'>
                    Pearl Kothari
                </span>
                <span className='_detail'> 
                    {numeral(100000).format('( 0 a)').toLocaleUpperCase()} Views • {moment('2001-09-09').fromNow()}
                </span>
            </span>
        </div>
    </div>
  )
}

export default Recommend