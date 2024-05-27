import './App.css'
import { Header } from './sections/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './sections/about';



const BASE = "fmg-site"
function App() {
  return (
    <BrowserRouter>
    <Routes>
            <Route path={`${BASE}/`} element={<Header/>}/>
            <Route path={`${BASE}/about`} element={<About/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App;
export {BASE};
