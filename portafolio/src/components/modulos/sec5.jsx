import MySpeedDial from '../modulos/MySpeedDial/MySpeedDial';

function Sec5(){
    return(
         <div className="texto" style={{ position: 'relative' }}>
      <h4 className="text-center text-primary mb-4 p-4">Leave a Recommendation</h4>

        <div className="div p-2"> 
         <form style={{maxWidth: '500px', margin: '0 auto'}}>
    <div class="mb-3">
      <label for="name" class="form-label">Name (Optional)</label>
      <input type="text" class="form-control" id="name" placeholder="Your name"/>

    </div>

    <div className="mb-3">
      <label for="message" class="form-label">Message</label>
      <textarea className="form-control" id="message" rows="4" placeholder="Escribe un comentario Aqui..."></textarea>
    </div>

    <button type="submit" className="btn btn-outline-primary">Submit</button>
  </form>

        </div>
    <MySpeedDial />
        </div>
    );
};
export default Sec5;