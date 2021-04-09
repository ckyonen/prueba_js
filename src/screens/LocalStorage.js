import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button,Container} from "reactstrap";

import axios from 'axios';
import App from "../App";
import AppHeaders from "../components/headers/AppHeaders";
import Timeout from "../components/headers/Timeout";

export default class LocalStorage extends Component {

    constructor(props){
        super(props)
        this.state = {
            persons: this.fetchFromStorage(),
            timePassed: false
        }
    }


    componentDidMount() {
        setTimeout(()=>{this.setState({timePassed: true})}, 1000);
    }

    setTimePassed() {
        this.setState({timePassed: true});
    }


    fetchPersons = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        const { data: persons } = response;
        this.setState({ persons }, this.callback)
        console.log({ persons });
        console.log("ASYN");
        alert('Informacion Cargada desde API');

    }




    fetchFromStorage = () => JSON.parse(localStorage.getItem('persons'))



    onPersonsFetch = () => {
        const { persons } = this.state;
        if(persons){
            localStorage.setItem('persons', JSON.stringify(persons))
        }
        const savedPersonsFetch = JSON.parse(localStorage.getItem('persons'))
        this.setState({ persons: savedPersonsFetch });
        console.log(savedPersonsFetch);
        console.log("FETCH");
        alert('Informacion Cargada desde LocalStorage');
    }




    render() {

        console.log(this.onPersonsFetch);
        const {persons} = this.state;
        console.log("RENDER");

        if (!this.state.timePassed) {
            return <Timeout/>;
        } else {


            return (
                <>
                    <h1> Cargar en LocalStorage</h1>
                    <div>
                        <Button variant="contained" color="primary" onClick={this.onPersonsFetch}>
                            Local Storage
                        </Button>
                        <br/>
                        <br/>
                        <Button variant="contained" color="primary" onClick={this.fetchPersons}>
                            API
                        </Button>
                    </div>

                    <Container>
                        <br/>
                        <Table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NOMBRE</th>
                                <th scope="col">USUARIO</th>
                                <th scope="col">MAIL</th>
                                <th scope="col">WEB</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>

                            <tbody>

                            {persons.map((person, index) => {
                                return (
                                    <tr key={person.id}>
                                        <td>{person.id}</td>
                                        <td>{person.name}</td>
                                        <td>{person.username}</td>
                                        <td>{person.email}</td>
                                        <td>{person.website}</td>

                                    </tr>
                                );
                            })}

                            </tbody>
                        </Table>

                    </Container>

                </>

            );
        }

    }


}

