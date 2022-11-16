import './App.css';
import LeftComponent from './components/LeftComponent';
import Navbar from './components/Navbar';
import RightComponent from './components/RightComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='lowerComponent'>
      <LeftComponent/>
      <RightComponent/>
      </div>      
    </div>
  );
}

export default App;
