import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';



function App() {

  //definir la categoría y noticias
  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardarNoticias ] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      
      //consultar la API para obtener una noticias
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=4ddfb7be339344169c4b44f2d2a1543a`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header 
        titulo="Buscador de noticias"
      />
      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
