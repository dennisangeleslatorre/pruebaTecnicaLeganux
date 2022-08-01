import React from 'react'
import { Link } from 'react-router-dom'

const TableHeader = ({title, labelButton, url}) => {
    return (
        <>
            <div className="col d-flex">
                <h2 className="col-12 col-md-6">{title}</h2>
                <div className="d-flex col-12 col-md-6 justify-content-sm-center justify-content-md-end">
                    <Link to={url} className="btn btn-primary mt-3">{labelButton}</Link>
                </div>
            </div>
            <hr  className="hr-nexxum"/>
        </>
    )
}

export default TableHeader