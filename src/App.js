
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './pages/Categories/Categories';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Categories/>}/>
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
