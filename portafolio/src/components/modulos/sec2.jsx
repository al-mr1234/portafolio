
import "../../estilos/sec2.css"; 
import skills from '../modulos/skillsData'; 


function Section2() {
  return (
  <div className="texto"> 
      <h1 className="text-center text-primary mb-4">Skills</h1>

      <div className="cartas p-4 d-flex flex-wrap gap-4 justify-content-center">
        {skills.map((skill, index) => (
          <div className="card" style={{ width: '18rem' }} key={index}>
            <div className="card-body text-center">
              <img src={skill.img} alt={skill.name} width="60" />
              <h5 className="card-title">{skill.name.toUpperCase()}</h5>
              <p className="card-text">{skill.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  
  );
}

export default Section2;
