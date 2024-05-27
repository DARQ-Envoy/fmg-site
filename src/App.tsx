import './App.css'
import { Header } from './sections/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './sections/about';
import {BASE} from "../vite.config"



function App() {
  return (
    <BrowserRouter basename={BASE}>
    <Routes>
            <Route path={`/`} element={<Header/>}/>
            <Route path={`/about`} element={<About/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App;
export {BASE};
