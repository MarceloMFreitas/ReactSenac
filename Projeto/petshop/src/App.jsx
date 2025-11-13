//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Pagina404 from './pages/404.jsx'
import Cabecalho from './components/cabecalho.jsx'
import Post from './pages/Post.jsx'
import Categoria from './pages/Categoria.jsx'
import SubCategoria from './pages/SubCategorias.jsx'
import CategoriaPosts from './pages/CategoriaPost.jsx'
import Admin from './pages/admin/Admin.jsx'
import FormCategoria from './pages/admin/components/FormCAtegoria.jsx'




import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './assets/css/base/base.css'



function App() {
  return(
    
    <Router>
      <Cabecalho />
       <Routes>
        {/* Use element={Componente /} para renderizar */}
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/NovaCategoria' element={<FormCategoria />} />
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<Post />} />

        {/* 
          Esta é a rota pai. Ela renderiza o <Categoria />
        */}
        <Route path='/categoria/:id' element={<Categoria />}>
            
            {/* Esta é a rota "filho" de índice (index).
              Ela é renderizada dentro do <Outlet> quando a URL
              é exatamente /categoria/:id 
            */}
            <Route index element={<CategoriaPosts />} />
            
            {/* Esta é a rota "filho" da subcategoria.
              Ela é renderizada dentro do <Outlet> quando a URL
              é /categoria/:id/:subcategoria 
            */}
            <Route path=':subcategoria' element={<SubCategoria />} />
        
        </Route>

        <Route path='/sobre' element={<Sobre />} />
        <Route path='*' element={<Pagina404 />} />
      </Routes>
    </Router>

  )
}export default App





// function App() {
//   //const [count, setCount] = useState(0)


//     const location = window.location.pathname
//     if(location === '/Sobre'){
//       return <Sobre />
//     } else {
//       return <Home />
//     }
//   }
//     export default App




  /*return (
    <>
      <Home />
      <Sobre />
    </>*/
    // <>
    //   <div>
    //     <h1>Hello Word!!!</h1>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  


//
