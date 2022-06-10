import React from 'react'
import { useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesBar from '../../Categories-Bar/CategoriesBar';
import Video from '../../Video/Video';
import InfiniteScroll from 'react-infinite-scroll-component';
const video=require('../../../redux-files/actions/video');


function HomeScreen() {

  const dispatch=useDispatch();
  const category='All';
  useEffect(()=>{
    dispatch(video.getMostPopularVideos())
  },[dispatch]);

  const {videos} =useSelector(state=>state.video);

  function loadMoreVideos(){
      dispatch(video.getVideosUsingCategories(category));
  }
  return (
    <Container>
        <CategoriesBar category={category}></CategoriesBar>
        <InfiniteScroll dataLength={videos.length} next={loadMoreVideos} hasMore={true} 
        loader={
          <div className='spinner-border text-danger d-block mx-auto'></div>
        }>
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
        </InfiniteScroll>
    </Container>
  )
}

export default HomeScreen