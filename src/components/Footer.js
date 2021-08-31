import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
      <footer className="text-sm flex flex-col justify-center py-1 bg-blue-50 mt-5">
        <p className="text-center font-mono">Copyright &copy; 2021</p>
        <Link to='/about' className="text-center cursor-pointer text-blue-500 hover:text-pink-600 underline">
          About
        </Link>
      </footer>
    );
}

export default Footer
