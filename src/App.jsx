//Este es un estilo global, este aplica a todo el proyecto
import './App.css'
// import Header from './components/Header'
// import Card from './components/Card'
// import Menu from './components/Menu'
// import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Owner from './Pages/Owner'
function App() {
  return (
    // <div>
    //   <Header/>
    //   {/* <Card/> */}
    //   <Menu/>
    //   <Footer/>
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Owner' element={<Owner/>}></Route>
      </Routes>
    </>
    // </div>
  )
}

export default App
