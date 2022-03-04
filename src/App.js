import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Random from './screens/Random';
import Search from './screens/Search';


function App() {
  return (
    <div className="App">
      <div className='links'>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/Random"}>Random</NavLink>
          <NavLink to={"/Search"}>Search</NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Random" element={<Random/>}/>
        <Route path="/Search" element={<Search/>}/>
      </Routes>

    </div>
  );
}

export default App;