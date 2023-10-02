import { useState, useEffect } from "react"
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaUsuario from "./componentes/TablaUsuario"
import ModalUsuario from "./componentes/ModalUsuario"


const App = () => {

    const [usuarios, setUsuarios] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar,setEditar] = useState(null)

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

    const editarUsuario = async (usuarios) => {
        const response = await fetch("api/usuario/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(usuarios)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarUsuarios();
        }
    }

    const eliminarUsuario = async (id) => {

        var respuesta = window.confirm("Desea eliminar el usuario?")

        if (!respuesta) {
            return;
        }

        const response = await fetch("api/usuario/Eliminar/" + id, {
            method: 'DELETE',
        })

        if (response.ok) {
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
                            <TablaUsuario
                                data={usuarios}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                eliminarUsuario={eliminarUsuario}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>


            <ModalUsuario
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarUsuario={guardarUsuario}
                editar={editar}
                setEditar={setEditar}
                editarUsuario={editarUsuario}
            />
                
        </Container>
    )
}

export default App;