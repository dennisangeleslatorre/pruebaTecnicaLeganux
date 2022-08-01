import React, { useEffect, useState } from 'react'
import FormContainer from '../../components/FormContainer/FormContainer'
import InputComponent from '../../components/InputComponent/InputComponent'
import TreeSelectComponent from '../../components/TreeSelectComponent/TreeSelectComponent'
import { useHistory } from 'react-router'
import { registerClassroom, listStudents } from '../../Api/api'


const ClassroomForm = () => {

  const [classroom, setClassroom] = useState({value: "", isValid:null});
  const [orderClass, setOrderClass] = useState({value: "", isValid:null});
  const [numberOfStudents, setNumberOfStudents] = useState({value: "", isValid:null});
  const [isAlert, setIsAlert] = useState(false);
  const [notification, setNotification] = useState({title:"", type:"", message:""})
  const [allStudents, setAllStudents] = useState([]);
  const [students, setStudents] = useState([]);
  const [studentsSelected, setStudentsSelected] = useState([]);
  let history = useHistory();

  const prepareData = () => {
    console.log(students.filter(item => [...studentsSelected].includes(item.name)));
    console.log([...studentsSelected])
    console.log(students)
    return {
      Class: classroom.value,
      Order: orderClass.value,
      numberOfStudents: numberOfStudents.value,
      students: allStudents.filter(item => [...studentsSelected].includes(item.name))
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

  const getStudents = async () => {
    const response = await listStudents();
    if(response && response.status === 200 && response.body) getItemsToSelect(response.body.data);
  }

  const getItemsToSelect = (studentsAux) => {
    setAllStudents([...studentsAux]);
    let studentsToSelect = [];
    [...studentsAux].forEach(item => {
      let aux = {};
      aux.title = item.name;
      aux.value = item.name;
      aux.key = item.name;
      studentsToSelect.push(aux);
    });
    setStudents(studentsToSelect);
  }

  useEffect( () => {
        getStudents();
    }, [])

    const handleClick = async () => {
    const data = prepareData();
    const response = await registerClassroom(data);
    (response && response.status === 200) ? prepareNotificationSuccess("Se registró con éxito el salón") : prepareNotificationDanger(response.message);
  }

  return (
    <FormContainer handleClick={handleClick} isAlert={isAlert} goList={()=>history.push("/classrooms")} notification={notification}>
      <InputComponent
        label="Clase"
        state={classroom}
        setState={setClassroom}
        type="text"
        placeholder="Clase"
        inputId="classId"
      ></InputComponent>
      <InputComponent
        label="Orden"
        state={orderClass}
        setState={setOrderClass}
        type="number"
        placeholder="Orden"
        inputId="orderId"
      ></InputComponent>
      <InputComponent
        label="Número de Estudiantes"
        state={numberOfStudents}
        setState={setNumberOfStudents}
        type="number"
        placeholder="Número de Estudiantes"
        inputId="numberOfStudentsId"
      ></InputComponent>
      <TreeSelectComponent
            data={students}
            value={studentsSelected}
            handleOnChange={(value)=>setStudentsSelected(value)}
        />
    </FormContainer>
  )
}

export default ClassroomForm