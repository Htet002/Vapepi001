import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Flavour.css' 
import image1 from '../img/card2.png'
import image2 from '../img/card3.png'
import image3 from '../img/card4.png'


 const Flavour = () => {
  return (
  <>
     <section className='flavor-container'>
        <Carousel>
            <Carousel.Item>
                <div className="flavor-grid">
                    <div className="flavour-img">
                         <img src={image3} alt="" />
                    </div>
                    <div className="flavour-text">
                        <div className="text-positon">
                        <h2 className='new-flavor'>Try New Flavour</h2>
                           <p className='new-text'>Circus Monster</p>
                           <button className='btn-blog'>View</button>
                        </div>
                          
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="flavor-grid">
                    <div className="flavour-img1">
                 
                    </div>
                    <div className="flavour-text1">
                        <div className="text-positon">
                        <h2 className='new-flavor'>Try New Flavour</h2>
                           <p className='new-text'>Circus Monster</p>
                           <button className='btn-blog'>View</button>
                        </div>
                          
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>


       
           
       

     </section>
       
     <section className='flavor-container1'>
        <div className="container1">
            <div className="inner1">
                <img src={image1} alt="" className='img-inner' />
                <div className="txt">
                <h2>Devices</h2>
                <p>Find the best for yours</p>
                </div>
              

            </div>
            <div className="inner2">
                <div className="caro">
                   
                </div>

            </div>
        </div>

        
       
           
       

     </section>
     <section className='flavor-container1'>
        <div className="container1">
            <div className="inner1">
                <img src={image2} alt="" className='img-inner' />
                <div className="txt">
                <h2>Pods</h2>
                <p>Variety of Choices</p>
                </div>
              

            </div>
            <div className="inner2">
                <div className="caro">
                   
                </div>

            </div>
        </div>

        
       
           
       

     </section>
     <section className='flavor-container1'>
        <div className="container1">
            <div className="inner1">
                <img src={image3} alt="" className='img-inner' />
                <div className="txt">
                <h2>Devices</h2>
                <p>Find the best for yours</p>
                </div>
              

            </div>
            <div className="inner2">
                <div className="caro">
                   
                </div>

            </div>
        </div>

        
       
           
       

     </section>

  </>
  )
}
export default Flavour