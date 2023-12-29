import React from "react";
import './App.css'
import Input from './Components/input'
import { Calendar4Event } from 'react-bootstrap-icons';
import { Layers } from 'react-bootstrap-icons';
import { Terminal } from 'react-bootstrap-icons';



const App = () => {
  return (
    <div>
      <nav>
        <div className="navcontainer">
          <h3>Start bootstrap</h3>
          <button>SignUp</button>
        </div>
      </nav>
      <header>
        <h1 className="heading">Generate more leads with a   <br></br>professional landing page!</h1>
        <div className="inputContainer">
          <Input />
        </div>
      </header>
      <section>
        <div className="gridcard">
          <div className="card1">
            <Calendar4Event size={50} className="icon" />
            <h1>Fully Responsive</h1>
            <p>This theme will look great on any <br></br>device, no matter the size!</p>
          </div>
          <div className="card1">
            <Layers size={50} className="icon" />
            <h1>Bootstrap 5 Ready
            </h1>
            <p>Featuring the latest build of the new <br></br>Bootstrap 5 framework!</p>
          </div>
          <div className="card1">
            <Terminal size={50} className="icon" />
            <h1>Easy to Use</h1>
            <p>Ready to use with your own content, <br></br>or customize the source files!</p>
          </div>
        </div>

        <div className="sectionContainer">
          <div className="subsection">
            <div className="subsection2">
              <h1>Fully Responsive Design</h1>
              <p>When you use a theme created by Start Bootstrap, you know <br></br> that the theme will look great on any device, whether it's a <br></br>phone, tablet, or desktop the page will behave responsively!</p>
            </div>
            <div className="subsection3"></div>
          </div>
          <div className="subsection1">
            <div className="subsection4">

            </div>
            <div className="subsection5">  <h1>Updated For Bootstrap 5</h1>
              <p>Newly improved, and full of great utility classes,<br></br> Bootstrap 5 is leading the way in mobile <br></br>responsive web development! All of the themes<br></br> on Start Bootstrap are now using Bootstrap 5!</p></div>
          </div>
          <div className="subsection6">
            <div className="subsection7">
              <h1>Easy to Use & Customize</h1>
              <p>Landing Page is just HTML and CSS with a splash<br></br> of SCSS for users who demand some deeper <br></br>customization options. Out of the box, just add <br></br>your content and images, and your new landing page will be ready to go!</p>
            </div>
            <div className="subsection8"></div>
          </div>
        </div>

      </section>
      <section className="section">
      <div className="circle-images-container">
        <div className="Image-container">
      <img src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg" alt="Image 1" className="circular-image" />
      <h3 className="imageh1">Margaret E.</h3>
      <p className="imagep">"This is fantastic! Thanks so much guys!"</p>
      </div>
      <div className="Image-container">
      <img src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg" alt="Image 2" className="circular-image" />
      <h3 className="imageh1">Fred S.</h3>
      <p className="imagep">"Bootstrap is amazing. I've been using it<br></br> to create lots of super nice landing<br></br> pages."</p>
      </div>
      <div className="Image-container">
      <img src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg" alt="Image 2" className="circular-image" />
      <h3 className="imageh1">Sarah W.</h3>
      <p className="imagep">"Thanks so much for making these free<br></br> resources available to us!"</p>
      </div>
    </div>
      </section>
      <div className="Logincontainer">
        <div >
          <h1 className="signuph1">Ready to get started? Sign up now!</h1>
       <div className="inputcontainer1"><Input/></div> 
        </div>
      </div>
      <footer>
      <ul>
        <li><a href="#">about</a></li>
        <li><a href="#">contact</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy Policy</a></li>
        
      </ul>
      <ul className="imgul">
      <li><img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="facebook-logo"/></li>  
      <li><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="twitterlogo"/></li>
      <li><img src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-black-glyph.png" alt ="instagram-logo"/></li>

      </ul>
      </footer>
    
    </div>
  );
}
export default App;