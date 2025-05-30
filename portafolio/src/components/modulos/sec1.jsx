

import React from 'react';
import "../../estilos/sec1.css"; // Asegúrate de que la ruta sea correcta


function Section() {
  return (
    <div className="seccion-container">
      <div className="imagen text-center p-5">
        <img
          src="https://cdn.playbuzz.com/cdn/913253cd-5a02-4bf2-83e1-18ff2cc7340f/c56157d5-5d8e-4826-89f9-361412275c35.jpg"
          alt="Avatar"
          width="100"
          className="mb-3"
          style={{ borderRadius: '50%' }}
        />
      </div>

      <div className="texto1 text-center p-5">
        <h1 className="text-primary">Hi, my name is Aleja</h1>
        <p>
          I am a full stack developer with 2 years of experience in both application and presentation layers.
          I have worked on applications and microservices deployed on IBM Cloud. I am an avid user of IBM Watson Services and have worked on Watson Assistant, NLU, Sentiment analyzer to name a few.
        </p>
      </div>

      
    
      
    </div>
    

  );
}

export default Section;
