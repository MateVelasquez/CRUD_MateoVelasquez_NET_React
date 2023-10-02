import { useEffect, useState } from "react"
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, Button, ModalFooter } from "reactstrap"

const modeloUsuario = {
    id : 0,
    nombre: "",
    email: "",
    pais: "",
    ciudad: "",
    phone: "",
    direccion: "",
    codigoPostal: "",
}

const ModalUsuario = ({mostrarModal,setMostrarModal,guardarUsuario,editar,setEditar,editarUsuario}) => {

    const [usuario, setUsuario] = useState(modeloUsuario);

    const actualizarDato = (e) => {

        console.log(e.target.name + " : " + e.target.value)
        setUsuario(
            {
            ...usuario,
                [e.target.name]: e.target.value
           }
        )
    } 

    const enviarDatos = () => {

        if (usuario.id == 0) {
            guardarUsuario(usuario)
        } else {
            editarUsuario(usuario)
        }

        setUsuario(modeloUsuario)
    }

    useEffect(() => {
        if (editar != null){
            setUsuario(editar)
        }else {
            setUsuario(modeloUsuario)
        }
    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (

        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {usuario.id == 0 ? "Nuevo Usuario" : "Editar Usuario"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizarDato(e)} value={usuario.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input name="email" onChange={(e) => actualizarDato(e)} value={usuario.email} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Pais</Label>
                        <Input name="pais" onChange={(e) => actualizarDato(e)} value={usuario.pais} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Ciudad</Label>
                        <Input name="ciudad" onChange={(e) => actualizarDato(e)} value={usuario.ciudad} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Teléfono</Label>
                        <Input name="phone" onChange={(e) => actualizarDato(e)} value={usuario.phone} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Dirección</Label>
                        <Input name="direccion" onChange={(e) => actualizarDato(e)} value={usuario.direccion} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Código Postal</Label>
                        <Input name="codigoPostal" onChange={(e) => actualizarDato(e)} value={usuario.codigoPostal} />
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal} >Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalUsuario;