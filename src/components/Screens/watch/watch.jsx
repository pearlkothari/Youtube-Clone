import React from 'react'
import { Col,Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import VideoMeta from '../../Video/meta/video.meta';
import Recommend from '../../Video/Recommend/Recommend.jsx';
import Comments from '../../Video/comments/Comments.jsx';
import './watch.scss';


function Watch({switchSidebar,sidebar}) {
  const location=useLocation();
  const id=location.state.id;

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
            <VideoMeta id={id}></VideoMeta>
            <Comments id={id}></Comments>
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