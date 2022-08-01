import React from 'react'
import Alert from '../Alert/Alert'

const FormContainer = (props) => {
    const { handleClick=null, isAlert=false, goList, notification={title:"", type:"", message:""}} = props;

    const handleSubmit = () => {
        handleClick();
    }

    return (
        <>
            <div className="continer-fluid pt-2 pb-2 pl-2 pr-2" style={{ background: '#FFFFFF' }}>
                <div className="row d-flex justify-content-center">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-3">
                                    {props.children}
                                    <div className="text-center">
                                        <button onClick={handleSubmit} className="btn btn-primary btn-form">Crear</button>
                                        <button onClick={goList} className="btn btn-light btn-form ml-2">Regresar</button>
                                    </div>
                                </div>
                                {/*Alerta*/}
                                { isAlert === true && <Alert
                                    title={notification.title}
                                    type={notification.type}
                                    mainMessage={notification.message}
                                /> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4"></div>
        </>
    )
}

export default FormContainer