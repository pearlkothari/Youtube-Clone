import React, { useState } from 'react'
import moment from 'moment';
import numeral from 'numeral';
import {LikeActive,LikeInactive,DisLikeActive,DisLikeInActive} from '../../../icons/AccessFile';
import ShowMore from "react-simple-show-more"
import './video.meta.scss'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
const video=require('../../../redux-files/actions/video');

// const api=require('../../../axios/api.js');

function VideoMeta({id}) {
  const [likeActive,setLikeActive]=useState(0);
  const [dislikeActive,setDislikeActive]=useState(0);
  const [subscribe,setSubscribe]=useState(1);
  const [showMore,setShowMore]=useState(true);
  const dispatch =useDispatch();

  useEffect(()=>{
      dispatch(video.getVideoById(id));
  },[dispatch,id]);

  const {_meta,loading}=useSelector(state=>state.video_meta);

  function fetchDescription(){
    if(_meta?.snippet){
      return _meta?.snippet?.description;
    }
    return "Description";
  }

  return (
    <>
      {!loading ? <div className="_meta py-2">
        <div className="_title">
          <h5>{_meta?.snippet?.title}</h5>
            <div className='d-flex justify-content-between align-items-center py-1'>
                <span className='views'>{numeral(_meta?.statistics?.viewCount).format("0.a").toLocaleUpperCase()} Views • {moment(_meta?.snippet?.publishedAt).fromNow()}</span>
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
                  <span>{numeral(_meta?.statistics?.likeCount).format("0.a").toLocaleUpperCase()}</span>
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
            text={fetchDescription()}
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
    </div>:<span>Loading....</span>}
    </>
  )
}

export default VideoMeta