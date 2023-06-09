import React from 'react'
import './Blog.css'
import myimage1 from "../img/card1.png"
import myimage2 from "../img/rose.png"
const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="blog-grid">
            <div className="blog1">
               
               <h1 className='first-blog'>Membership Program</h1>
            
               
                <p className='first'> Be a Vape Pi member and get our</p>
                <p className='first1'> special exclusive offers</p>
                <button className='btn-blog'>View</button>
                
                
            </div>
              
               
               
            <div className="blog2">
                      she
            </div>
            <div className="blog3">
                <div className="blog4">
                    He
                </div>
                <div className="blog5">
                    her
                </div>
                
            </div>
        </div>
      </section>
      <section className='card-text'>
         <div className="header">
            
            <h1 className='header1'><strong className='str'>New </strong><strong>Released</strong></h1>
           
        </div>
        <p className='flavor'>Try our Latest Flavour</p>
           <div className="card-layout">
           <div className="card1">
            <img src={myimage1} alt="" />
            <div className="text1">
            <p>Citrus Mon</p>
            <p>20,000pul</p>
            <p>Disposable</p>
            <p>30,000 MMK</p>
            </div>
            
           </div>
           <div className="card2">
           <img src={myimage2} alt="" />
           <div className="text2">
            <p>Citrus Mon</p>
            <p>20,000pul</p>
            <p>Disposable</p>
            <p>30,000 MMK</p>
            </div>
            
           </div>
           <div className="card3">
           <img src={myimage2} alt="" />
           <div className="text3">
            <p>Citrus Mon</p>
            <p>20,000pul</p>
            <p>Disposable</p>
            <p>30,000 MMK</p>
            </div>
            
           </div>
           <div className="card4">
           <img src={myimage2} alt="" />
           <div className="text4">
            <p>Citrus Mon</p>
            <p>20,000pul</p>
            <p>Disposable</p>
            <p>30,000 MMK</p>
            </div>
            
           </div>
           </div>
           <div className="btn-wrapper">
        <button className='btn-view1'> View <span className="arrow">&#8250;</span></button>
      </div>
      </section>
    
    </>
  )
}

export default Blog
