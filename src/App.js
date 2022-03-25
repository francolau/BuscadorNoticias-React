import React, {Fragment, useState, useEffect} from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadodeNoticias';


function App() {

  // definir la categoria y noticias

  const [categoria, guardarCategoria] = useState ('');
  const [noticias, guardarNoticias] = useState ([]);

  useEffect (() =>{
    const consultarAPI = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=84d9ae33533f4ae4b598d67e772ec7c4`
      
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();

  }, [categoria]);

  return (
   <Fragment>

      <Header 
      titulo = 'Buscador de Noticias'
      />

      <div className="container white"> 
        <Formulario 
        guardarCategoria = {guardarCategoria}
        />
        <ListadoNoticias 
        noticias = {noticias}
        />
      </div>

   </Fragment>
  );
}

export default App;
