import React,{Col, Card} from 'react-bootstrap'
import {Link} from "react-router-dom";
import image from "../image/blogimg.webp";
export default function CardComponent({post}) {
  return (
    <Col>
    <Card>
        {console.log(post)}
        <Link to={`/blog/${post.id}`}><Card.Img variant="top" src={image} /></Link>
        {/* http://localhost:3000/blog/21 */}
        <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
                {post.body}
            </Card.Text>
        </Card.Body>
    </Card>
    </Col>
  )
}
