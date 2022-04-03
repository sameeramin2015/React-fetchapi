import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from './components/CardComponent';

export default function Blog() {
 const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPosts(data)
        })
    }, [])

  return (
    <>
    <Container fluid={true}>
        <h2>Blog page</h2>
        <Row xs={1} md={4} className="g-4">
            {
                posts.map((post,index)=>(
                    <CardComponent post={post} key={index} />
                ))
                
            }
            
        </Row>
    </Container>
    </>
  )
}
