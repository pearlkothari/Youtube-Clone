import React from 'react'
import { Col,Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import VideoMeta from '../../Video/meta/video.meta';
import Recommend from '../../Video/Recommend/Recommend.jsx';
import Comments from '../../Video/comments/Comments.jsx';
import { useSelector } from 'react-redux/es/exports';
import './watch.scss';

// const OAuth=require('../../../redux-files/actions/auth.js');


function Watch() {
  const {id,channel}=useParams();

  const {commentCount}=useSelector(state=>state.video_meta);

  const {comment}=useSelector(state=>state.comments);

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
          <Col lg={4}>
              {
                [...Array(20)].map(()=><Recommend/>)
              }
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Watch