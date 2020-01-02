import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import moment from 'moment';

export default function Table(props) {

  const [data, setData] = useState({
    company: '',
    amount: '',
    id: ''
  })


  return (
    <div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">company</th>
              <th scope="col">amount</th>
              <th scope="col">createdAt</th>
            </tr>
          </thead>
          <tbody>
            {props.investments.map((element) => (
              <tr key={element._id}>
                <td>{element.company}</td>
                <td>{element.amount}</td>
                <td>{moment(element.createdAt).format('LL')}</td>
                <td> <button type="button" onClick={() => setData({ company: element.company, amount: element.amount, id: element._id })} className="btn btn-primary" data-toggle="modal" data-target="#editModal" > Editar </button></td>
                <td><button onClick={() => props.delete(element._id)}>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <Form  company={data.company} amount={data.amount} edit={(company, amount) => props.edit(data.id, company, amount )} />
      </div>
    </div>
  )
}