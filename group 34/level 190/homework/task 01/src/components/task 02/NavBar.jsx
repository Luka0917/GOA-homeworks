import { Link } from 'react-router'

export default function NavBar(){
    return (
        <nav className='flex justify-center items-center gap-[30px] bg-gray-500 px-[20px] py-[10px] rounded-[12px]'>
            <Link to={'/home'} className='text-[20px] font-[700] text-gray-100 hover:underline'>Home</Link>
            <Link to={'/contact-us'} className='text-[20px] font-[700] text-gray-100 hover:underline'>Contact Us</Link>
            <Link to={'/parameters'} className='text-[20px] font-[700] text-gray-100 hover:underline'>Parameters</Link>
            <Link to={'/'} className='text-[20px] font-[700] text-gray-100 hover:underline'>App</Link>
        </nav>
    )
}