import { useState, useEffect } from "react"
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaUsuario from "./componentes/TablaUsuario"


const App = () => {

    const [usuarios, setUsuarios] = useState([])

    const mostrarUsuarios = async () => {
        const response = await fetch("api/usuario/Lista");

        if (response.ok) {
            const data = await response.json();
            setUsuarios(data)
        } else {
            console.log("Error en la lista")
        }
    }

    useEffect(() =>{
        mostrarUsuarios()
    },[])

    return (
        <Container>
            <Row classname="mt-5">

                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de Usuarios</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success">Nuevo Usuario</Button>
                            <hr></hr>
                            <TablaUsuario data ={usuarios}/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default App;