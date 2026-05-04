import './App.css';
import AllPosts from './components/AllPosts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './components/Create';
import Navbar from './components/Navbar';
import Edit from './components/Edit';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<AllPosts />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
