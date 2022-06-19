import React, { useState } from 'react'
import moment from 'moment';
import numeral from 'numeral';
import {LikeActive,LikeInactive,DisLikeActive,DisLikeInActive} from '../../../icons/AccessFile';
import ShowMore from "react-simple-show-more"
import './video.meta.scss'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
const video=require('../../../redux-files/actions/video');
const channels=require('../../../redux-files/actions/channel');

// const api=require('../../../axios/api.js');

function VideoMeta({id,channelId}) {
  const [likeActive,setLikeActive]=useState(0);
  const [dislikeActive,setDislikeActive]=useState(0);
  const [showMore,setShowMore]=useState(true);
  const dispatch =useDispatch();

  useEffect(()=>{
      dispatch(video.getVideoById(id));
  },[dispatch,id]);

  useEffect(()=>{
    dispatch(channels.getChannelById(channelId));
    dispatch(channels.getSubscriptionStatus(channelId));
    dispatch(channels.getAllSubscriptions());
  },[dispatch,channelId]);

  const {_meta,loading}=useSelector(state=>state.video_meta);
  const {channel}=useSelector(state=>state.channel);
  const {isSubscribed}=useSelector(state=>state.subscriptionStatus);

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
                <span className='views'>{numeral(_meta?.statistics?.viewCount).format('(0,0)').toLocaleUpperCase()} Views • {moment(_meta?.snippet?.publishedAt).format('DD MMMM YYYY')}</span>
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
                  <span>{numeral(_meta?.statistics?.likeCount).format('( 0.00 a)').toLocaleUpperCase()}</span>
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
                  src={channel?.snippet?.thumbnails?.medium?.url}
                  alt=''
                />
                <div className="d-flex flex-column">
                  <span className='name'>{channel?.snippet?.title}</span>
                  <span className='detail'>{numeral(channel?.statistics?.subscriberCount).format('( 0.00 a)').toLocaleUpperCase()} subscribers</span>
                </div>
            </div>
            <button 
              className={isSubscribed?'subscribed':'subscribe'} 
              onClick={()=>{
                console.log(isSubscribed);
              }}
            >{isSubscribed?'SUBSCRIBED':'SUBSCRIBE'}</button>
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