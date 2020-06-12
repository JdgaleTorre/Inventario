import Head from 'next/head';
import Layout from '../../components/Layout/index';
import { useState } from 'react';
import useCustomForm from '../../hooks/useCustomForm';

type Product = {
    product: string ,
    description: string,
    categoryId: string,
    quantity: number, 
    price: number,
    cost: number,
    margin: number,
    profits: number,

}

export const Nuevo = (): JSX.Element => {
    const product: Product = {product: '', description: '', categoryId: '', quantity: 0, price: 0, cost: 0, margin: 0, profits: 0};

    const {
        values,
        errors,
        touched,
        handleChange,
        handleChangeTextArea,
        handleBlur,
        handleSubmit
    } = useCustomForm({initialValues: product, 
        onSubmit: values => console.log({values})
    });

    const SaveProduct = (product) => {
        console.log(product);
    };

    // const CalculateMarginProfit = (price, cost) => {
    //     console.log(cost, price);
    //     setMargin(1-(cost/price));
    //     setProfits(price-cost);
    // }

    return (
        <Layout home>
        <h1 className="title">Productos / Nuevo</h1>
        <form onSubmit={handleSubmit}>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <div className="field">
                            <div className="control">
                                <p>Producto</p>
                                <input className="input is-primary" type="text" placeholder="Producto" name="product" value={values.product} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <p>Descripción</p>
                                <textarea className="textarea is-primary" placeholder="e.g. Hello world" name="description" value={values.description} onChange={handleChangeTextArea}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tile is-4 is-vertical is-parent">
                    <div className="tile is-child box">
                        <p className="title">Organización</p>
                        <div className="columns">
                            <div className="column">
                                <p>Tipo de producto</p>
                                <div className="select is-fullwidth is-primary">
                                    <select>
                                        <option>Camisas</option>
                                        <option>Pantalones</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tile is-child box">
                        <p className="title">Inventario</p>
                        <div className="columns">
                            <div className="column">
                                <p>Cantidad</p>
                                <input className="input is-primary" type="text" name="quantity" placeholder="Cantidad" value={values.quantity} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <p className="title">Precio</p>
                        <div className="columns">
                            <div className="column is-half">
                                <div className="field">
                                    <div className="control">
                                        <p>Precio</p>
                                        <input className="input is-primary" type="text" name="price" placeholder="Precio" value={values.price} onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-half">
                                <div className="field">
                                    <div className="control">
                                        <p>Costo</p>
                                        <input className="input is-primary" type="text" name="cost" placeholder="Costo" value={values.cost} onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="columns">
                            <div className="column is-half">
                                <div className="field">
                                    <div className="control">
                                        <p>Margen</p>
                                        <input className="input is-static" type="text" name="margin" placeholder="-" value={values.margin} readOnly/>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-half">
                                <div className="field">
                                    <div className="control">
                                        <p>Ganacia</p>
                                        <input className="input is-static" type="text" name="profit" placeholder="-" value={values.profits} readOnly/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-4 is-offset-8">
                    <div className="buttons">
                        <button className="button is-primary" type="submit">Guardar</button>
                        <button className="button">Descartar</button>
                    </div>    
                </div>
            </div>


        </form>
        </Layout>
    )
}

export default Nuevo