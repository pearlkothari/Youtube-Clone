import React from 'react'
import { Col,Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import VideoMeta from '../../Video/meta/video.meta';
import Recommend from '../../Video/Recommend/Recommend.jsx';
import Comments from '../../Video/comments/Comments.jsx';
import './watch.scss';


function Watch() {
  const location=useLocation();
  const video=location.state.video;

  return (
    <Row>
      <Col>
        <div className="player">
          <iframe 
            src={`https://www.youtube.com/embed/${video.id}?fs=1`}
            width="100%"
            height="100%"
            loading="lazy"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true">
          </iframe>
        </div>
        <Row>
          <Col>
            <VideoMeta video={video}></VideoMeta>
            <Comments></Comments>
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