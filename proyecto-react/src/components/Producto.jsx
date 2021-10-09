import React, { useEffect, useState } from 'react';
// import Link from 'react-router-dom';
// import axiosClient from '../../config/axiosClient';
import Pro from './Productos/pro';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './Producto.css'

const Producto = () => {

    return (
        <div>
            <div>
                    <form>
                        <input type="text" placeholder='Buscar producto' />
                        <Button variant="primary">Buscar</Button>
                    </form>
            </div>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col"><Button variant="primary">Añadir Producto</Button></th>
                        </tr>
                        {Pro.map(index => {
                            return (<>
                                <tr><th scope="col">{index.id}</th>
                                    <th scope="col xs={6} md={4}"><Container>
                                        <Image className="Imagen" src={index.producto} rounded />
                                    </Container></th>
                                    <th scope="col">{index.nombre}</th>
                                    <th scope="col">{index.precio}</th>
                                    <th scope="col" ><Button variant="success">Editar</Button><Button variant="danger">Eliminar</Button></th> </tr></>)
                        })}
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Producto
