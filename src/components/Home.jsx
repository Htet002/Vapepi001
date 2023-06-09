import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './Home.css';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-bootstrap/Carousel';
import myImage from '../img/pi.jpg';
import myImage1 from '../img/wallpaper.jpg';
import myImage2 from '../img/wallpaper5.jpg';
import myImage4 from '../img/wallpaper6.jpg';


 const Home = () => {
  return (

   <>  
    
     
     <div className="navbar-container">
             <Navbar className='navbar navbar-expand-lg fixed-top' variant='dark' >
        <Container>
          <Navbar.Brand href="#home">
            
           <p className='pi'> PI</p> <img
              src={myImage}
              width="40"
              height="35"
              className="d-inline-block align-top my-img"
              alt=""
            />
          </Navbar.Brand>
          
          <Nav className="ml-auto">
            <Nav.Link href="#home"><FontAwesomeIcon icon={faMagnifyingGlass} />
            </Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
            
          </Nav>
      
           
         
        </Container>
      </Navbar>     
        </div>
        <div className="carousel-container">
       <Carousel >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carousel-image " height="700vh"
          src={myImage1}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="caption-grid">
          <p className='p1'>The Best Look</p> 
        <h1 className='headline'>Anytime Anywhere</h1>
          <p className='p2'>Starts from 10,000 MMK</p>
          </div>
        
          <button className='btn'>view</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carousel-image"   height="700vh"
          src={myImage2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className="caption-grid">
          <p className='p1'>The Best Look</p> 
        <h1 className='headline'>Anytime Anywhere</h1>
          <p className='p2'>Starts from 10,000 MMK</p>
          </div>
          <button className='btn'>view</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carousel-image"  height="700vh"
          src={myImage4}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="caption-grid">
          <p className='p1'>The Best Look</p> 
        <h1 className='headline'>Anytime Anywhere</h1>
          <p className='p2'>Starts from 10,000 MMK</p>
          </div>
          <button className='btn'>view</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </div>
     
      
   
   </>
  )
}
export default Home