import React, { useEffect } from 'react'
import { Col,Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import VideoMeta from '../../Video/meta/video.meta';
import Recommend from '../../Video/Recommend/Recommend.jsx';
import Comments from '../../Video/comments/Comments.jsx';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import './watch.scss';
import { getCommentsUsingVideoId } from '../../../redux-files/actions/comment';
import { getVideoRecommendation } from '../../../redux-files/actions/video';

// const OAuth=require('../../../redux-files/actions/auth.js');


function Watch() {
  const {id,channel}=useParams();

   const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getCommentsUsingVideoId(id));
    dispatch(getVideoRecommendation(id));
  },[dispatch,id]);

  const Recommendation=useSelector(state=>state.recommendation.Recommend);

  return (
    <Row>
      <Col>
        <div className="player">
          <iframe 
            src={`https://www.youtube.com/embed/${id}?fs=1`}
            width="100%"
            height="100%"
            loading="lazy"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true">
          </iframe>
        </div>
        <Row>
          <Col>
            <VideoMeta id={id} channelId={channel}></VideoMeta>
            <Comments id={id} channelId={channel}></Comments>
          </Col>
          <Col className="recommendation_videos" lg={4}>
              {
                Recommendation?.filter(video=>video.snippet).map((params)=><Recommend video={params} key={params.id.videoId} />)
              }
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Watch