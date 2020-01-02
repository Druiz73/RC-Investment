import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table/Table';
import ModalCreate from './Components/ModalCreate/ModalCreate';
import MoneyTo from './Components/MoneyTo/MoneyTo';
import moment from 'moment';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      investments: [],
      company: '',
      amount: '',
      createdAt: '',
      moneyto:''
    };
  }

  componentDidMount() {
    this.get();
    this.getMoney();
  }

  get() {
    fetch("http://localhost:4000/investment/")
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.setState({
          investments: data
        })
      });
  }
  getMoney(){
    fetch("http://localhost:4000/investment/amount")
      .then(resp => resp.json())
      .then(data => {
        console.log(data.random)
        this.setState({
          moneyto: data.random
        })
      });
  }

  delete(id) {
    fetch(`http://localhost:4000/investment/delete/${id}`, {
      method: 'DELETE'
    })
      .catch(err => console.error(err))
      .then(() => {
        this.get();
      })
  }

  handleButton(id, company, amount) {
    console.log(id,company,amount)
    fetch("http://localhost:4000/investment/" + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        company: company,
        amount: amount
      })
    })
    
      .then(resp => resp.json())
      .then(data => {
        this.get();
      });
  }

  save(company, amount) {
    if (this.state.moneyto > 10000) {
      fetch("http://localhost:4000/investment/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          company: company,
          amount: amount,
          createdAt: moment().format('LL')
        })
      })
        .then(resp => resp.json())
        .then(data => {
          this.get();
          this.setState({
            moneyto: this.state.moneyto - amount
          })
        })
    }
    else {
      alert("El importe debe ser mayor a 10000");
    }
  }


  render() {
    return (
      <div>
        <MoneyTo  money={this.state.moneyto}/>
        <ModalCreate save={(company, amount) => this.save(company, amount)} />
        <Table investments={this.state.investments} delete={(id) => this.delete(id)} edit={(id, company, amount) => this.handleButton(id, company, amount)} />
      </div>
    )
  }
}





