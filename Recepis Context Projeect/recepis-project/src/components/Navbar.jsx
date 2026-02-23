import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex gap-x-5 justify-center mb-10'>
            <NavLink className={(e) => e.isActive ? "text-red-400" :""} to={"/"}>
                Home
            </NavLink>

            <NavLink className={(e) => e.isActive ? "text-red-400" :""} to={"/recepis"}>
                Recepis
            </NavLink>

            <NavLink className={(e) => e.isActive ? "text-red-400" :""} to={"/create-resepis"}>
                CreateRecepis
            </NavLink>

            <NavLink className={(e) => e.isActive ? "text-red-400" :""} to={"/about"}>
                About
            </NavLink>


        </div>
    )
}

export default Navbar