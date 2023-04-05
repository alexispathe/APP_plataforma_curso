import 'bootstrap/dist/css/bootstrap.min.css';
import { componentPaths } from './routes/componentPaths';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Header } from './components/Header';
function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          {componentPaths.map((component, i)=>(
            <Route element={component.element} path={component.path} key={i}/>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
