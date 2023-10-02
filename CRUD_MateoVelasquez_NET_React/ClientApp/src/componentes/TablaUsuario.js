import { Button, Table } from "reactstrap"

const TablaUsuario = ({ data }) => {

    return (

        <Table stripped responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Pais</th>
                    <th>Ciudad</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                    <th>Código Postal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="7">Sin resgistros</td>
                        </tr>
                    ) : (
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.nombre}</td>
                                    <td>{item.email}</td>
                                    <td>{item.pais}</td>
                                    <td>{item.ciudad}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.direccion}</td>
                                    <td>{item.codigoPostal}</td>
                                    <td>
                                        <Button color="primary" size="sm" classname="me-2">Editar</Button>
                                        <Button color="danger" size="sm">Eliminar</Button>
                                    </td>
                                </tr>
                            ))
                        
                    )

                }
            </tbody>
        </Table>
    )
}

export default TablaUsuario;