import './App.css'
import { Header } from './sections/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './sections/about';

function App() {

  return (
    <BrowserRouter>
    <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/about' element={<About/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
