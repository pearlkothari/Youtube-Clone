import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import CategoriesBar from '../../Categories-Bar/CategoriesBar';
import Video from '../../Video/Video';

function HomeScreen() {
  return (
    <Container>
        <CategoriesBar></CategoriesBar>
        <Row>
            {
                [... new Array(20)].map(()=>{
                    return (
                        <Col lg={3} md={4}>
                            <Video></Video>
                        </Col>
                    )
                })
            }
        </Row>
    </Container>
  )
}

export default HomeScreen