import moment from 'moment';
import React from 'react'
import './Comment.scss';
import Parser from 'html-react-parser';

function Comment({_comment}) {
   
  const {authorDisplayName,authorProfileImageUrl,publishedAt,updatedAt,likeCount,textDisplay}=_comment;

  return (
    <div className='_comment'>
         <img 
            src={authorProfileImageUrl?authorProfileImageUrl:'https://lh3.googleusercontent.com/a-/AOh14GgXQyvlq1U1_vy_9s1YWpFaOQx8kbmgWPtcAlxkmw=s96-c'}
            alt="" 
         />
         <div className='_body'>
            <p className='_name'>
                {authorDisplayName} <span>{publishedAt!==updatedAt && "(edited)"}{moment(publishedAt).fromNow()}</span>
            </p>
            <p className='_comment'>
                {Parser(textDisplay)}
            </p>
         </div>
    </div>
  )
}

export default Comment;