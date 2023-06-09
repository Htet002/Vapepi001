import React from 'react'
import "./Content.css"
import { Card, Row,Col } from 'react-bootstrap';
import cardimg from '../img/vape1.jpg'
import cardimg1 from '../img/vape2.jpg'
import cardimg2 from '../img/vape3.jpg'
import cardimg3 from '../img/vape4.jpg'
const Content = () => {
  return (
    <div className='content'>
        <h1 className='headline'>Best Deals</h1>
        <p className='headline2'>Just For You</p>
        <Row xs={1} md={6} className="g-3">
      <Col>
        <Card className="text-white gg card-no-border">
          <Card.Img src={cardimg} alt="Image 1" className="card-img-top" />
          <Card.ImgOverlay>
            <Card.Title  className='card-title'><div className="title-position">25% Off</div></Card.Title>
           
          </Card.ImgOverlay>
        </Card>
        <div className="price">
        <p>Refreshing Mint</p>
         <p>30,00 MMK</p>
         <p className="old-price">35,00 MMK</p>
         <p className='point'> <span className="star-icon">&#9733;</span>600 Points</p>
        </div>
      </Col>
      <Col>
        <Card className="text-white gg card-no-border">
          <Card.Img src={cardimg1} alt="Image 2" className="card-img-top" />
          <Card.ImgOverlay>
            <Card.Title  className='card-title'><div className="title-position">25% Off</div></Card.Title>
            
          </Card.ImgOverlay>
        </Card>
        <div className="price">
        <p>Refreshing Mint</p>
         <p>30,00 MMK</p>
         <p className="old-price">35,00 MMK</p>
         <p className='point'> <span className="star-icon">&#9733;</span>600 Points</p>
        </div>
      </Col>
      <Col>
        <Card className="text-white gg card-no-border">
          <Card.Img src={cardimg2} alt="Image 2" className="card-img-top" />
          <Card.ImgOverlay>
            <Card.Title className='card-title'><div className="title-position">25% Off</div></Card.Title>
            
          </Card.ImgOverlay>
        </Card>
        <div className="price">
        <p>Refreshing Mint</p>
         <p>30,00 MMK</p>
         <p className="old-price">35,00 MMK</p>
         <p className='point'> <span className="star-icon">&#9733;</span>600 Points</p>
        </div>
        
      </Col>
      <Col>
        <Card className="text-white gg card-no-border">
          <Card.Img src={cardimg3} alt="Image 2" className="card-img-top" />
          <Card.ImgOverlay>
            <Card.Title  className='card-title'><div className="title-position">25% Off</div></Card.Title>
           
          </Card.ImgOverlay>
        </Card>
        <div className="price">
        <p>Refreshing Mint</p>
         <p>30,00 MMK</p>
         <p className="old-price">35,00 MMK</p>
         <p className='point'> <span className="star-icon">&#9733;</span>600 Points</p>
        </div>
        
      </Col>
     
      <Col>
        <Card className="text-white gg card-no-border">
          <Card.Img src={cardimg} alt="Image 2" className="card-img-top" />
          <Card.ImgOverlay>
            <Card.Title  className='card-title'><div className="title-position">25% Off</div></Card.Title>
           
          </Card.ImgOverlay>
        </Card>
        <div className="price">
        <p>Refreshing Mint</p>
         <p>30,00 MMK</p>
         <p className="old-price">35,00 MMK</p>
 
         <p className='point'> <span className="star-icon">&#9733;</span>600 Points</p>
        </div>
        
      </Col>
      <Col>
        <Card className="text-white  gg card-no-border">
          <Card.Img src={cardimg} alt="Image 2" className="card-img-top" />
          <Card.ImgOverlay>
            <Card.Title  className='card-title'><div className="title-position">25% Off</div></Card.Title>
          
          </Card.ImgOverlay>
        </Card>
        <div className="price">
        <p>Refreshing Mint</p>
         <p>30,00 MMK</p>
         <p className="old-price">35,00 MMK</p>
  
         <p className='point'><span className="star-icon">&#9733;</span>600 Points</p>
        </div>
        
      </Col>
    
    </Row>
      <div className="btn-wrapper">
        <button className='btn-view1'> View <span className="arrow">&#8250;</span></button>
      </div>
       
        
    </div>
  )
}
export default Content