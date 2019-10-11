import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import Cadastro from './componentes/Cadastro/Cadastro';
import Home from './componentes/Home/Home';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
    
    </BrowserRouter>
   
  )
}
export default App;