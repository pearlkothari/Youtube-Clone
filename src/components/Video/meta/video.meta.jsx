import React, { useState } from 'react'
import moment from 'moment';
import numeral from 'numeral';
import {LikeActive,LikeInactive,DisLikeActive,DisLikeInActive} from '../../../icons/AccessFile';
import ShowMore from "react-simple-show-more"
import './video.meta.scss'


function VideoMeta({video}) {
  const [likeActive,setLikeActive]=useState(0);
  const [dislikeActive,setDislikeActive]=useState(0);
  const [subscribe,setSubscribe]=useState(1);
  const [showMore,setShowMore]=useState(true);

  const description="ut labore et dolore magna amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magn aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
  return (
    <div className="_meta py-2">
      <div className="_title">
            <h5>Video Title</h5>
            <div className='d-flex justify-content-between align-items-center py-1'>
                <span className='views'>{numeral(10000000).format("0.a").toLocaleUpperCase()} Views • {moment('2001-12-09').fromNow()}</span>
                <div className='like-dislike'>
                  <span className='like'>
                    <img 
                      src={likeActive===1?LikeActive:LikeInactive} 
                      onClick={()=>{
                        setLikeActive(1-likeActive);
                        setDislikeActive(0);
                      }}
                      className="like"
                      alt=''
                    />
                  </span>
                  <span>{numeral(10000000).format("0.a").toLocaleUpperCase()}</span>
                  <span className='dislike'>
                      <img 
                        src={dislikeActive===1?DisLikeActive:DisLikeInActive} 
                        onClick={()=>{
                          setLikeActive(0);
                          setDislikeActive(1-dislikeActive);
                        }}
                        className="dislike"
                        alt=''
                      />
                  </span>
                  <span>DISLIKE</span>
                </div>
              </div>
      </div>
      <div className='_channel d-flex justify-content-between align-items-center my-2 py-3'>
            <div className="d-flex">
                <img 
                  src="https://yt3.ggpht.com/yti/APfAmoEfNc89PqHky5V7Otz2761oPghCya5oRgmjsIY9vQ=s88-c-k-c0x00ffffff-no-rj-mo"
                  alt=''
                />
                <div className="d-flex flex-column">
                  <span className='name'>Pearl Kothari</span>
                  <span className='detail'>{numeral(10000000).format("0.a").toLocaleUpperCase()} subscribers</span>
                </div>
            </div>
            <button 
              className={subscribe?'subscribe':'subscribed'} 
              onClick={()=>{
                setSubscribe(1-subscribe);
              }}
            >{subscribe?'SUBSCRIBE':'SUBSCRIBED'}</button>
      </div>
      <div className='_description'>
        <p>
          <ShowMore
            text={description}
            length={150}
            showMoreLabel=""
            showLessLabel=""
            tag="p"
            ellipsis="..."
            enabled={showMore}
          />
        </p>
        <button className='showMoreText' onClick={()=>{
          setShowMore(!showMore);
        }}>{showMore?'SHOW MORE':'SHOW LESS'}</button>
      </div>
    </div>
  )
}

export default VideoMeta