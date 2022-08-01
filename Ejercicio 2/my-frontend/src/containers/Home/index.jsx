import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className="card">
        <h1 className="text-center">Home</h1>
        <div className="card-body">
            <ul>
                <li><Link to={"/classrooms"}>Salones</Link></li>
                <li><Link to={"/students"}>Estudiantes</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default index