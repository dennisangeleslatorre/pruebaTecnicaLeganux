import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NotFoundStyles.css'

const NotFound = () => (
    <div className="d-flex align-items-center justify-content-center vh-100 pt-5">
        <div className="text-center">
            <h1 className="title__error">404</h1>
            <p className="message_error"> <span className="text-danger">Opps!</span> Página no encontrada.</p>
            <p className="lead">
                La página que buscas no existe.
            </p>
            <Link to="/" className="btn btn-primary">Ir Home</Link>
        </div>
    </div>
)

export default NotFound
