import NavBar from './components/NavBar'
import Home from './pages/Home'
import Pizzas from './pages/Pizzas'
import Cart from './pages/Cart'
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
        </Routes>
      </ApiContextProvider>


    </div>
  )
}

export default App
