import React, {PropTypes} from 'react';
import blinkLED from '../gpio/blinkLED';

const HomePage = ({helloWorld}) => {
   return (
     <div className="container">
       <h1>{helloWorld}</h1>
       <div className="row">
         <div className="col-sm-4">
           <button type="button" className="btn btn-primary" onClick={blinkLED}>Press Me</button>
         </div>
       </div>
     </div>
   );
 };

 HomePage.propTypes = {
   helloWorld: PropTypes.string.isRequired
 };

 HomePage.defaultProps = {
   helloWorld: 'Hello, World!'
 };

 export default HomePage;
