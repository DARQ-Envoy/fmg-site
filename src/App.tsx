import './App.css'
import { Header } from './sections/home'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { About } from './sections/about';

const BASE = "/fmg-site/";


function App() {
  return (
    <HashRouter basename={BASE}>
    <Routes>
            <Route path={`/`} element={<Header/>}/>
            <Route path={`/about`} element={<About/>}/>
    </Routes>

    </HashRouter>
  )
}

export default App;
export {BASE};
