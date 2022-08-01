import React, { useEffect } from 'react'
import './InputComponent.css'

const InputComponent = (props) => {

    const { state, setState, type, label=null, placeholder="", inputId, validation, readOnly, autoComplete="new-text",
             classForm="", marginForm="", labelSpace=2, fixedNumber=0, labelLine  } = props;

    const handleOnChange = (e) => {
        setState({...state, value: e.target.value})
    }

    const handleOnBlur = () => {
        if(type === "number") {
            let num = Number(state.value)
            setState({...state, value: num.toFixed(fixedNumber)});
        }
    }

    return (
        <div className={`form-group ${marginForm} ${classForm} row`}>
            { label && <label htmlFor={inputId} className={`${ labelLine ? "col-12" : `col-sm-${labelSpace}`} col-form-label label-input`}>{ label }</label> }
            <div className={ label ? `col-sm-${12-labelSpace}` : `col-sm-${14-labelSpace}`}>
                <input
                    autoComplete={autoComplete}
                    readOnly={readOnly}
                    value={state.value}
                    type={type}
                    placeholder={placeholder}
                    id={inputId}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    className={`form-control ${ validation ? (state.isValid ? "input-succes" : "input-error") : ""}`}
                />
            </div>
        </div>
    )
}

export default InputComponent
