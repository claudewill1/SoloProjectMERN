import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Edit from './views/Edit';
import New from './views/New';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/coins/create' element={<New />}/>
          <Route path='/coins/:id' element={<ViewDetails />}/>
          <Route path='/coins/:id/edit' element={<Edit />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
