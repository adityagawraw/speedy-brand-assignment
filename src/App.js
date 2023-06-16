
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './pages/Categories/Categories';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Categories/>}/>
    </Routes>
    </div>
  );
}

export default App;
