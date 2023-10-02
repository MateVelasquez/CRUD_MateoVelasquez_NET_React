import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaUsuario from "./componentes/TablaUsuario"

const App = () => {

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
                            <TablaUsuario/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default App;