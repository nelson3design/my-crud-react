import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from "react-toastify";
import Crud from './crud'
import Update from './crud/Update'
import Add from './crud/adicionar'

function App() {
  return (
    <div className="App">
      <ToastContainer/>
     <BrowserRouter>
      <Routes>
       
          <Route path="/" element={<Crud />} />
          <Route path="/update/:id" element={<Update />} /> 
          <Route path="/adicionar" element={<Add />} /> 
        
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
