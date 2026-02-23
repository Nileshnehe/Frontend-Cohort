
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ResepisContext from './context/ResepisContext.jsx'

createRoot(document.getElementById('root')).render(
  <ResepisContext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </ResepisContext>

)
