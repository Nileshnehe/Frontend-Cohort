import Navbar from './components/Navbar'
import MainRoutes from './routes/MainRoutes'

const App = () => {
  return (
    <div className='py-10 px-[20%] w-screen h-screen text-white bg-gray-700 font-semibold'>
        <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App