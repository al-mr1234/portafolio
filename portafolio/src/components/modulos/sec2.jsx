

import React from 'react';
import "../../estilos/sec1.css"; // Asegúrate de que la ruta sea correcta


function Section2() {
  return (
   <div className="p-4 bg-light" id="skills">
        <h2 className="text-center text-primary mb-4">Skills</h2>
        <div className="d-flex justify-content-center gap-4 flex-wrap"></div>


<div className="card" style={{ width: '18rem' }}>
  <div className="card-body">
    <h5 className="card-title">Java Script</h5>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" width="60" />
    <p className="card-text">
      Some quick example t
    </p>
    
  </div>
</div>

<div className="card" style={{ width: '18rem' }}>
  <div className="card-body">
    <h5 className="card-title">React</h5>
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="60" />
    <p className="card-text">
      Some quick example t
    </p>
    
  </div>
</div>




      <div className="p-4 bg-light" id="skills">
       
        <div className="d-flex justify-content-center gap-4 flex-wrap">
         
         
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width="60" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width="60" />
        </div>
        
      </div>

    
    </div>
    

  );
}

export default Section2;
