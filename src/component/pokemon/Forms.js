import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

class Forms extends Component {
    constructor(props){
        super(props);
        this.numberRef = React.createRef();
    }
    buscarPokemon = e => {
        e.preventDefault();
        
        // envialos por props
        this.props.handleUpdate(this.numberRef.current.value)
    }
    render() {
        return (
            <Form onSubmit={this.buscarPokemon}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Numero del pokemon</Form.Label>
                    <Form.Control ref = {this.numberRef}type="text" placeholder="Escribe el número del pokemon"></Form.Control>
                    <Form.Text className="text-muted">
                        Escribe un numero entero para obtener datos del pokemon
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit"> Buscar</Button>

            </Form>
        );
    }
}

export default Forms;