import React from 'react';
import PokemonInfo from '../pokemon/pokemonInfo';
import Name from '../pokemon/Name';
import { Row, Col, Card, Spinner } from 'react-bootstrap'

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
export default knowValue;