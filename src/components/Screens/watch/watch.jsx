import React from 'react'
import { Col,Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import VideoMeta from '../../Video/meta/video.meta';
import Recommend from '../../Video/Recommend/Recommend';


function Watch() {
  const location=useLocation();
  const video=location.state.video;
  return (
    <Row>
      <Col>
        <div className="player">
          <iframe 
            src={`https://www.youtube.com/embed/${video.id}`}
            width="100%"
            height="100%"
            loading="lazy"
            title="YouTube video player"
            frameborder="0"
            allowFullScreen={true}>
          </iframe>
        </div>
        <Row>
          <Col>
            <VideoMeta></VideoMeta>
          </Col>
          <Col lg={4}>
              {
                [...Array(10)].map(()=><Recommend/>)
              }
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Watch