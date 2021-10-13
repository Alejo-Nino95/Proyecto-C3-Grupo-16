import React from 'react'
import './ModificacionProductos.css'

const ModificacionProductos = () => {

    return (
        <div className="Form container">
            <form>
                <div className="row justify-content-center">
                    <div className="row">
                        <div className="col-3">
                            <label className="label">Id</label>
                        </div>
                        <div className="col-8">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label className="label">Producto</label>
                        </div>
                        <div className="col-8">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label className="label">Nombre</label>
                        </div>
                        <div className="col-8">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label className="label">Precio</label>
                        </div>
                        <div className="col-8">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-2 align-self-end">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </div>

                </div>

            </form >
        </div >
    )
}

export default ModificacionProductos
