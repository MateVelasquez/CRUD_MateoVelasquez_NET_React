import { useState, useEffect } from "react"
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaUsuario from "./componentes/TablaUsuario"
import ModalUsuario from "./componentes/ModalUsuario"


const App = () => {

    const [usuarios, setUsuarios] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false);

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

    const guardarUsuario = async (usuarios) => {
        const response = await fetch("api/usuario/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json;charset=utf-8'
            },
            body: JSON.stringify(usuarios)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarUsuarios();
        }
    }

    return (
        <Container>
            <Row classname="mt-5">

                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de Usuarios</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success" onClick={() => setMostrarModal(!mostrarModal) } >Nuevo Usuario</Button>
                            <hr></hr>
                            <TablaUsuario data ={usuarios}/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


            <ModalUsuario mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarUsuario={guardarUsuario} />
        </Container>
    )
}

export default App;