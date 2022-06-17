import React from 'react'
import Comment from './Comment/Comment';
import './Comments.scss';

function Comments() {
  function addComment(){
    console.log("Success");
  }
  return (
    <div className='comments'>
        <h6>1234 Comments</h6>
        <div className='_form d-flex w-100 my-2'>
            <img 
              src="https://yt3.ggpht.com/yti/APfAmoEfNc89PqHky5V7Otz2761oPghCya5oRgmjsIY9vQ=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="" 
            />
            <form onSubmit={addComment} className="flex-grow-1">
                <input type="text" className='flex-grow-1' placeholder='Add a comment...'></input>
                <button className='comment-button border-0 p-2' onClick={()=>{console.log('clicked')}}>COMMENT</button>
            </form> 
        </div>
        <div className='_comments_List'>
          {
            [...Array(20)].map(()=>{
                return <Comment></Comment>
            })
          }
        </div>
    </div>
  )
}

export default Comments