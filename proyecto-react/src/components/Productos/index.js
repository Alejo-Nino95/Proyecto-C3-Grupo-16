import React from 'react';
import { render } from 'react-dom';

const Productos = () => {

    const renderProductos = () => {

    };
    
    return (
        <table className = "table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            {renderProductos()}
        </table> 
    )
};

export default Productos;