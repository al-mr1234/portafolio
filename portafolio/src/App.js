import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <Router>  {/* Asegúrate de envolver todo en <Router> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
    
        </Routes>
      </div>
    </Router>
  );  
}

export default App;
