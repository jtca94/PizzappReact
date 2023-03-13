import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Pizzas from './pages/Pizzas'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import { ApiContextProvider } from './context/ContextApi'
import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {


  return (
    <div>
      <ApiContextProvider  >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="pizzas/:Id" element={<Pizza />} />
        </Routes>
        <Footer />
      </ApiContextProvider>


    </div>
  )
}

export default App
