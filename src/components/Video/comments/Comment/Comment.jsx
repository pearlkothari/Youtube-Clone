import moment from 'moment';
import React from 'react'
import './Comment.scss';

function Comment() {
  return (
    <div className='_comment'>
         <img 
            src="https://yt3.ggpht.com/yti/APfAmoEfNc89PqHky5V7Otz2761oPghCya5oRgmjsIY9vQ=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="" 
         />
         <div className='_body'>
            <p className='_name'>
                Pearl Kothari <span>{moment('2001-12-09').fromNow()}</span>
            </p>
            <p className='_comment'>
                Nice Video... @Pearl
            </p>
         </div>
    </div>
  )
}

export default Comment;