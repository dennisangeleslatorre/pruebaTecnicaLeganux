import React, { useState } from 'react'
import FormContainer from '../../components/FormContainer/FormContainer'
import InputComponent from '../../components/InputComponent/InputComponent'
import { useHistory } from 'react-router'
import { registerStudent } from '../../Api/api'

const StudentForm = () => {

  const [age, setAge] = useState({value: "", isValid:null});
  const [name, setName] = useState({value: "", isValid:null});
  const [isAlert, setIsAlert] = useState(false);
  const [notification, setNotification] = useState({title:"", type:"", message:""})
  let history = useHistory();

  const prepareData = () => {
    return {
      age: age.value,
      name: name.value,
    };
  }

  const prepareNotificationSuccess = (message) => {
      setIsAlert(true);
      setNotification({title:"Operación exitosa", type:"alert-success", message:message});
  }

  const prepareNotificationDanger = ( message="Error al consumir el servicio.") => {
      setIsAlert(true);
      setNotification({title:"Error al registrar", type:"alert-danger", message:message})
  }

  const handleClick = async () => {
    const data = prepareData();
    const response = await registerStudent(data);
    (response && response.status === 200) ? prepareNotificationSuccess("Se registró con éxito el estudiante") : prepareNotificationDanger(response.message);
  }

  return (
    <FormContainer handleClick={handleClick} isAlert={isAlert} goList={()=>history.push("/students")} notification={notification}>
      <InputComponent
        label="Nombre"
        state={name}
        setState={setName}
        type="text"
        placeholder="Nombre"
        inputId="nameId"
      ></InputComponent>
      <InputComponent
        label="Edad"
        state={age}
        setState={setAge}
        type="number"
        placeholder="Edad"
        inputId="ageId"
      ></InputComponent>
    </FormContainer>
  )
}

export default StudentForm