import React from 'react'
import { useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesBar from '../../Categories-Bar/CategoriesBar';
import Video from '../../Video/Video';
const video=require('../../../redux-files/actions/video');


function HomeScreen() {

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(video.getMostPopularVideos())
  },[dispatch]);

  const {videos} =useSelector(state=>state.video);

  return (
    <Container>
        <CategoriesBar></CategoriesBar>
        <Row>
            {
                videos.map((video,idx)=>{
                    return (
                        <Col key={idx} lg={3} md={4}>
                            <Video video={video}></Video>
                        </Col>
                    )
                })
            }
        </Row>
    </Container>
  )
}

export default HomeScreen