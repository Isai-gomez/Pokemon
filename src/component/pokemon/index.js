import React, { Component } from 'react';
import Forms from './Forms';
import { getUrlPokemon } from '../service/getUrlPokemon';
import knowValue  from '../service/knowValue'
import { Row, Card, Col, Container } from 'react-bootstrap';

class Pokemon extends Component {
    constructor(){
        super();
        this.state = {
          data: null,

        }
    }
    componentDidMount(){
       this.handleUpdate();
    }
    
    handleUpdate = ( number )=> {
        const api_pokemon = getUrlPokemon(number);
        fetch(api_pokemon)
            .then( resolve =>{
                return resolve.json()
            })
            .then(data => {
                this.setState({
                   data:{
                   name:data.species.name.toUpperCase(),
                   photo:data.sprites.front_shiny,
                   number:data.id,
                   type:data.types[0].type.name.toUpperCase(),
                   }
               })
            });                
    }

    render(){
        const { data } = this.state;        
        return(
            <Container>
                <Row style={{marginTop:"3em"}}>
                    <Col>
                        <Card bg="secondary" text="white">
                            <Card.Header>BUSCADOR DE POKEMON</Card.Header>
                        </Card>                    
                    </Col>
                </Row>
                <Row style={{marginTop:"3em"}}>
                    <Col md={5}>
                        <Forms handleUpdate={this.handleUpdate}></Forms>
                    </Col>
                    <Col> 
                    { knowValue(data) }
                    </Col>
                </Row>
            </Container>
        )
    }
}
                                 

                            
export default Pokemon;
                
                


