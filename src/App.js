import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import Cadastro from './componentes/Cadastro/Cadastro';
import Home from './componentes/Home/Home';
import Produtos from  './componentes/Produtos/Produtos';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/produtos" component={Produtos} />
      
    
    </BrowserRouter>
   
  )
}
export default App;