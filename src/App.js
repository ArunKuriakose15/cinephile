import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MovieCarousel from './components/MovieCarousel';
import MovieSlide from './components/MovieSlide';
import MovieDetail from './components/MovieDetail';
import DirectorDetail from './components/DirectorDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><NavBar/><MovieCarousel/><MovieSlide/></>}/>
      <Route path='/moviedetail' element={<MovieDetail/>} />
      <Route path='/directordetail' element={<DirectorDetail/>} />
      <Route/>
      <Route/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
