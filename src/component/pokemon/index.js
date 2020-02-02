import React, { Component } from 'react';
import Forms from './Forms';
import { Row, Card, Col, Container, Spinner } from 'react-bootstrap';
import PokemonInfo from './pokemonInfo';
import Name from './Name';



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
    getUrlPokemo = ( number = 25 ) => {
        const api_pokemon = `https://pokeapi.co/api/v2/pokemon/${number}`;
        return (api_pokemon);
    }
    handleUpdate = ( number )=> {
        const api_pokemon = this.getUrlPokemo(number);
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
        const knowValue = ( data ) => {
            return(
                (data) ? 
                <Row>
                <Col md={5}>
                    <Card style={{width: "15em"}}>
                        <Card.Img variant="top" src={data.photo}/>
                     </Card>               
                </Col> 
                <Col xs={12} md={7}>
                    <Card bg="ligth">
                        <Card.Header>
                            <Name name={ data.name }></Name>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <PokemonInfo
                                    type={ data.type }
                                    number={ data.number }>
                                </PokemonInfo> 
                            </Card.Text>
                        </Card.Body>          
                    </Card>
                </Col>
            </Row>:
            <Spinner animation="grow"/>);
        }
        return(
            <Container>
                <Row style={{marginTop:"3em"}}>
                    <Col>
                        <Card bg="secondary" text="white">
                            <Card.Header>POKEMON</Card.Header>
                        </Card>                    
                    </Col>
                </Row>
                <Row style={{marginTop:"3em"}}>
                    <Col md={5}>
                        <Forms handleUpdate={this.handleUpdate}></Forms>
                    </Col>
                    <Col> 
                    {knowValue(data)}
                    </Col>
                </Row>
            </Container>
        )
    }
}
                                 

                            
export default Pokemon;
                
                


