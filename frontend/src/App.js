
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Private from './components/Private';
import Login from './components/Login';
import Productlist from './components/Productlist';
import Addproduct from './components/Addproduct';
import Update from './components/Update';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route element={<Private />}>
      <Route path="/" element={<Productlist />}/>
      <Route path="/Add" element={<Addproduct />}/>
      <Route path="/Update/:id" element={<Update />}/>
      <Route path="/logout" element={<h1>Logout</h1>}/>
      <Route path="/profile" element={<h1>Profile</h1>}/>
      
      </Route>
      <Route path="/signup" element={<Signup/>} /> 
      <Route path ="/login" element ={<Login />} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
