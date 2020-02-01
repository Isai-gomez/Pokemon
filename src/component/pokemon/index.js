import React, { Component } from 'react';
import { Row, Card, Col, Container } from 'react-bootstrap';
import PokemonInfo from '../pokemonInfo';
import Name from './Name';
import pokemon from '../../img/pokemon.jpg';


class Pokemon extends Component {
    constructor(){
        super();
        this.state = {
            name:"Pikachu",
            type:"Electrico",
            number: 25,
            photo:pokemon,
        }
    }
    componentDidMount(){
        this.handleUpdate();
    }
    getUrlPokemo = number => {
        const api_pokemon = `https://pokeapi.co/api/v2/pokemon/${number}`;
        return (api_pokemon);
    }
    handleUpdate = () => {
        const api_pokemon = this.getUrlPokemo(34);
        fetch(api_pokemon)
            .then( resolve =>{
                return resolve.json()
            })
            .then(data => {
               this.setState({
                   name:data.species.name.toUpperCase(),
                   photo:data.sprites.front_shiny,
               })
            });
                
    }     
    render(){
        const { name, type, number, photo } = this.state;
        return(
            <Container> 
                <Row>
                    <Col>
                        <Card bg="secondary" text="white">
                            <Card.Header>POKEMON</Card.Header>
                        </Card>                    
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <Card style={{width: "20em"}}>
                                <Card.Img variant="top" src={photo}/>
                            </Card>               
                    </Col>
                    <Col xs={12} md={8}>
                        <Card bg="ligth">
                            <Card.Header>
                                <Name name={ name }></Name>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <PokemonInfo
                                    type={ type }
                                    number={ number }>
                                    </PokemonInfo> 
                                </Card.Text>
                            </Card.Body>          
                        </Card>          
                    </Col>
                </Row>
            </Container>
        )
    }
}

                            
export default Pokemon;
                
                


