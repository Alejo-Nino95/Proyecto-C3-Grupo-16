import React, { useEffect, useState } from 'react';
// import Link from 'react-router-dom';
// import axiosClient from '../../config/axiosClient';
import Pro from './Productos/pro';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './Producto.css'

const Producto = () => {


    // const [products, setProducts] = useState([]);

    // const renderProductos = () => (
    //     <tbody>
    //         {Producto.map(Pro (
    //             <Pro
    //                 key={Pro}
    //                 id={Pro.id}
    //                 name={Pro.name}
    //                 price={Pro.price}
    //                 // image={producto.image}
    //             />
    //         ))}
    //     </tbody>
    // );

    // const getProductos = () => {
    //     axiosClient.get('/products')
    //     .then(res => {
    //         setProducts(res.data);
    //     })
    // };

    // useEffect(() => {
    //     getProductos();
    // }, []);

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col"><Button variant="primary">Añadir Producto</Button></th>
                </tr>
                <tr>
                    <th scope="col">100000</th>
                    <th scope="col xs={6} md={4}"><Container>
                        <Image className="Imagen" src="https://http2.mlstatic.com/D_NQ_NP_634621-MLA45731974326_042021-O.webp" rounded />
                    </Container></th>
                    <th scope="col">Xbox Series X</th>
                    <th scope="col">3.059.900</th>
                    <th scope="col" ><Button variant="success">Editar</Button><Button variant="danger">Eliminar</Button></th>
                </tr>
                <tr>
                    <th scope="col">100000</th>
                    <th scope="col xs={6} md={4}"><Container>
                        <Image className="Imagen" src="https://http2.mlstatic.com/D_NQ_NP_735635-MCO43097102213_082020-O.webp" rounded />
                    </Container></th>
                    <th scope="col">Portatil Hp 245</th>
                    <th scope="col">1.099.000</th>
                    <th scope="col" ><Button variant="success">Editar</Button><Button variant="danger">Eliminar</Button></th>
                </tr>
                <tr>
                    <th scope="col">100000</th>
                    <th scope="col xs={6} md={4}"><Container>
                        <Image className="Imagen" src="https://http2.mlstatic.com/D_NQ_NP_930877-MLA46540512462_062021-O.webp" rounded />
                    </Container></th>
                    <th scope="col">Smart TV</th>
                    <th scope="col">3.549.900</th>
                    <th scope="col" ><Button variant="success">Editar</Button><Button variant="danger">Eliminar</Button></th>
                </tr>
                <tr>
                    <th scope="col">100000</th>
                    <th scope="col xs={6} md={4}"><Container>
                        <Image className="Imagen" src="https://http2.mlstatic.com/D_NQ_NP_926709-MCO32086561343_092019-O.webp" rounded />
                    </Container></th>
                    <th scope="col">iPod Touch 7</th>
                    <th scope="col">2.799.000</th>
                    <th scope="col" ><Button variant="success">Editar</Button><Button variant="danger">Eliminar</Button></th>
                </tr>
                <tr>
                    <th scope="col">100000</th>
                    <th scope="col xs={6} md={4}"><Container>
                        <Image className="Imagen" src="https://http2.mlstatic.com/D_NQ_NP_896668-MLA44924126746_022021-O.webp" rounded />
                    </Container></th>
                    <th scope="col">Refrigerador no frost Mabe</th>
                    <th scope="col">2.078.000</th>
                    <th scope="col" ><Button variant="success">Editar</Button><Button variant="danger">Eliminar</Button></th>
                </tr>
            </thead>
            {/* {renderProductos()} */}
        </table>
    )
}

export default Producto
