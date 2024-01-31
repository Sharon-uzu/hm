import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import HealthPlans from './Screens/HealthPlans';


function App() {
  return (
    <div className="App">
        <Routes>

          <Route path='/'element={<Home/>}/>
          <Route path='/plans'element={<HealthPlans/>}/>

          

        </Routes>
    </div>
  );
}

export default App;
