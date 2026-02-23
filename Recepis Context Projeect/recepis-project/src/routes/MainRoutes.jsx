import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recepis from '../pages/Recepis'
import About from '../pages/About'
import CreateResepis from '../pages/CreateResepis'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recepis' element={<Recepis />} />
            <Route path='/create-resepis' element={<CreateResepis />} />
            <Route path='/about' element={<About />} />
            
        </Routes>
    )
}

export default MainRoutes