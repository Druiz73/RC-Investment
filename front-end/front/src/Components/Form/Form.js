import React, {  useState } from 'react';


export default function Form(props) {
    const [inversor, setInversor] = useState({
        company: '',
        amount: ''
    });


   function handleInput (e) {
       
        const name = e.target.name;
        const value = e.target.value;
        setInversor({
            ...inversor,
            [name]: value
        })
    }

    return (
        <div>
            <div className="modal fade" id="editModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">EDITAR</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input placeholder="Ingrese la compania" name="company" type="text" id="company" value={inversor.company} onChange={(e)=>handleInput(e)}></input>
                            <input placeholder="Ingrese el monto" type="text" name="amount" id="amount" value={inversor.amount} onChange={(e)=>handleInput(e)}></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" id="cerrar" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" onClick={() => (props.edit( inversor.company, inversor.amount))} className="btn btn-primary">Modificar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
