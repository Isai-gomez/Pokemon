import React, { Component } from 'react';
import { Row, Card, Col,Container } from 'react-bootstrap';
import PokemonInfo from '../pokemonInfo';
import Name from './Name';
import pokemon from '../../img/pokemon.jpg'
import './styles.css'


const obPokemon = {
    name:'Pikachu',
    type:'Elecctrico',
    number:25
}

class Pokemon extends Component {     
    render(){
        const { type, number } = obPokemon;
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
                                <Card.Img variant="top" src={pokemon}/>
                            </Card>               
                        </Col>
                        <Col xs={12} md={8}>
                            <Card bg="ligth">
                                <Card.Header>
                                    <Name name={obPokemon.name}></Name>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <PokemonInfo
                                        type={type}
                                        number={number}>
                                        </PokemonInfo> 
                                    </Card.Text>
                                </Card.Body>          
                            </Card>          
                        </Col>
                    </Row>
                </Container>)
        }
    }

                            
export default Pokemon;
                
                


