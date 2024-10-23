import { BrowserRouter, Routes, Route } from "react-router-dom"
import Booking from "./components/Booking"
import Activities from "./components/Activities"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Activities />}/>
        <Route path='/book' element={<Booking />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
