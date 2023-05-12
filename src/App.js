
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from "react-router-dom";

import {Header}     from './introducao/Header/index.jsx'
import {Body}       from './introducao/Body/index.jsx'
import {Inicio}     from './introducao/inicio/index.jsx'
import { useState } from "react";


function App() {

  const [dados, setDados] = useState([]);

  function handleSavedados(user){
    let newDados = [...dados]
   newDados.push(user)
   setDados(newDados) 
   
  }

 
  
    return (
      <>
       <Router> 
        <Routes>
            <Route path="/"       element={<Inicio />}/>
            <Route path="/inicio" element={<Inicio onAddUser={handleSavedados}/>}/>
            <Route path="/body"   element={<Body dados={dados}/>}/>
            <Route path="/header" element={<Header/>}/>
          </Routes >
        </Router>       
      </>
    );
  }
export default App;