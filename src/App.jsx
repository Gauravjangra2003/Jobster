import {Landing , Error, Register, Dashboard} from './pages'
import { Routes , Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </>
  )
}

export default App
