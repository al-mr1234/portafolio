import recomendacion from "./recommendations";

function Sec4(){
    return(
   <div className="texto"> 
      <h1 className="text-center text-primary mb-4">Recommendations</h1>

        <div className="cartas p-4 d-flex flex-wrap gap-4 justify-content-center">
         {recomendacion.map((recomenda, index) => (
          <div className="card" style={{ width: '18rem' }} key={index}>
            <div className="card-body text-center">
              <p className="card-text">{recomenda.description}</p>
            </div>
          </div>
        ))}
</div>
</div>
  
    );
}
export default Sec4;