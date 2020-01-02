import React from 'react'


export default function MoneyTo (props){
    return (
        <div>
            <h1 className="ml-2">
               Monto a Invertir:  {props.money}
            </h1>
        </div>
    )
}