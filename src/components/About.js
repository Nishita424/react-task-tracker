import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="flex flex-col justify-center text-sm py-3 my-2 gap-1">
            <h4 className="text-center">Version 1.0.0</h4>
            <Link to='/' className="text-center text-gray-500 hover:text-red-400 underline">Go Back</Link>
        </div>
    )
}

export default About
