import React,{useState} from 'react';
import './Footer.css'

const Footer = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
   <>
    <section className='footer'>
        <div className="foot-grid">
            <div className="foot1">
                  <h5 className='fh1'>
                    Customer Service</h5>
                    <p>Terms &Privacy Polacy</p> 
                    <p>Return Policy</p>         
            </div>
            <div className="foot2">
            <h5 className='fh1'>
                   Language</h5>
                   <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="language"
                  value="Myanmar(Unicode)"
                  checked={selectedLanguage === 'Myanmar(Unicode)'}
                  onChange={handleLanguageChange}
                />
               Myanmar(Unicode)
              </label>
            </div>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="language"
                  value="Myanmar(ZawGyi)"
                  checked={selectedLanguage === 'Myanmar(ZawGyi)'}
                  onChange={handleLanguageChange}
                />
              Myanmar(ZawGyi)
              </label>
            </div>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="language"
                  value="english"
                  checked={selectedLanguage === 'english'}
                  onChange={handleLanguageChange}
                />
               English 
              </label >
            </div>
                   
            </div>
            <div className="foot3">
            <h5 className='fh1'>
                    Contact Us</h5> 
                    <p>Lay Daung Kan Main Road, Cashmere</p>
                    <p>Stop,near Zawana,Thingyun,Tsp</p>
                    <p>09458489458</p>
            </div>  
            <div className="foot4">
            <h5 className='fh1'>
                  Download Us</h5> 
            </div>
           
        </div>
    </section>
   </>
  )
}

export default Footer