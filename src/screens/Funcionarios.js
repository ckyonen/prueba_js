import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button,Container} from "reactstrap";

import axios from 'axios';
import Timeout from "../components/headers/Timeout";

export default class Funcionarios extends Component {

    constructor(props){
        super(props)
        this.state = {
            persons: [],
            timePassed: false
        }
    }



    //
    // state = {
    //     persons: []
    // }



    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })

        setTimeout(()=>{this.setState({timePassed: true})}, 1000);

    }




    render() {
        console.log(this)
        const {persons} = this.state;

        if (!this.state.timePassed) {
            return <Timeout/>;
        } else {


            return (
                <>
                    <h1> API- Funcionarios MAP 1</h1>
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


                    <h1> API- Funcionarios MAP y FILTER ID Menor a 3 </h1>
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


                            {persons.filter(person => person.id < 3).map((person, index) => {
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


                    <h1> API- Funcionarios MAP y FILTER Nombre Igual a 'Patricia Lebsack' </h1>
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


                            {persons.filter(person => person.name === 'Patricia Lebsack').map((person, index) => {
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


