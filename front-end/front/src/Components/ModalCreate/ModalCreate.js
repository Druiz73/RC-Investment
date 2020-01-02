import React, {  useState } from 'react';

export default function ModalCreate(props) {

    const [inversor, setInversor] = useState({
        company: '',
        amount: ''
    });


    function handleInput(e) {

        const name = e.target.name;
        const value = e.target.value;
        setInversor({
            ...inversor,
            [name]: value
        })
        console.log(inversor)
    }


    return (

        <div className="ml-5 d-flex flex-row-reverse">
            <button type="button" className="btn btn-primary mt-3 mr-5" data-toggle="modal" data-target="#create" >
                INVERTIR
            </button>

            <div className="modal" id="create" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Crear</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body d-flex justify-content-around">
                            <label>Company</label>
                            <input type="text" name="company" id="CompanyTo" placeholder="Company" value={inversor.company} onChange={(e) => handleInput(e)} />
                                <label>Amount</label>
                                <input type="number" name="amount" min="10000" max="1000000" id="amountTo" value={inversor.amount} placeholder="Amount" onChange={(e) => handleInput(e)} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={(company,amount) => props.save( inversor.company, inversor.amount)}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            )
        }
