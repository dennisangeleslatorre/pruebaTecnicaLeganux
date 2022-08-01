import React, { useState, useEffect } from 'react'
import TableHeader from '../../components/TableHeader/TableHeader'
import Table from '../../components/Table/Table'
import { listClassrooms } from '../../Api/api'
import { Link } from 'react-router-dom'

//Constantes
const columns = [
    {name:'Class', label: 'Clase', sortVar:0 },
    {name:'Order', label: 'Order', sortVar:0 },
    {name:'numberOfStudents', label: 'Maximo número de Estudantes', sortVar:0 },
    {name:'active', label: 'Estado', sortVar:0 },
];

//campos de filtro
const fieldsFilter= [
    {name:'Class'},
];

const Classrooms = () => {
    const [items, setItems] = useState([]);

    const getItems = async () => {
        const response = await listClassrooms();
        console.log(response);
        if(response && response.status === 200 && response.body) getItemsTable(response.body.data);
    }

    const getItemsTable = (itemsAux) => {
        const listItemsTable = itemsAux.map((item) => {
            let aux = {};
            aux.Class = item.Class;
            aux.Order = item.Order;
            aux.numberOfStudents = item.numberOfStudents;
            aux.active = item.active ? "Activo" : "Inactivo";
            return aux;
        });
        setItems(listItemsTable);
    }

    useEffect( () => {
        getItems();
    }, [])
    

  return (
    <div className="continer-fluid pt-2 pb-2 pl-2 pr-2" style={{ background: '#FFFFFF' }}>
        <div className="row">
            <div className="col">
                <Link className="btn btn-success" to={"/"}>Volver</Link>
                <div className="card pr-3 pl-3">
                    <TableHeader title="Salones" labelButton="Agregar Salones" url="/classroomForm" />
                    <div className="card-body">
                            <Table columns={columns} data={items} fieldsFilter={fieldsFilter}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Classrooms