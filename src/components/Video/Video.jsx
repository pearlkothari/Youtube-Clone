import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {useNavigate} from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Video.scss';

const api=require('../../axios/api.js');

function Video({video}) {

  const [views,setViews]=useState(0);
  const [duration,setDuration]=useState(0);
  const [channel,setChannel]=useState('');
  const navigate=useNavigate();
  const {
    id,
    snippet:{
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails:{high},
    }
  }=video;

  function watchIt(){
    navigate(`/watch/${id}`,{state:{id:id}});
  }
  useEffect(()=>{
    const _id=id?.videoId||id;
    const extraDetails=async()=>{
      const {data:{items}}=await api.request('/videos',{
        params:{
          part:'contentDetails,statistics',
          id:_id,
        }
      })
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount)
      // console.log(items[0]);
    }
    extraDetails();
  },[id]);

  useEffect(()=>{
    const channelDetails=async()=>{
      const {data:{items}}=await api.request('/channels',{
        params:{
          part:'snippet',
          id:channelId,
        }
      })
      setChannel(items[0].snippet.thumbnails.medium.url)
      // console.log(items[0]);
    }
    channelDetails();
  },[channelId]);

  const _duration_time=moment.utc(moment.duration(duration).asSeconds()*1000).format("mm:ss")

  return (
    <div className='video' onClick={watchIt} >
      <div className='thumbnail'>
        <LazyLoadImage 
          className='img'
          src={high.url} 
          alt=""
          effect="blur"
        ></LazyLoadImage>
        <span className='duration'>{_duration_time}</span>
      </div>
      <div className='channel'>
          <img src={channel} alt=''></img>
          <div className='title'>
              <span className="Description">{title}</span>
              <div className='details'>
                  <span>{channelTitle}</span>
                  <span>{numeral(views).format("0.a").toLocaleUpperCase()} Views • {moment(publishedAt).fromNow()}</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Video