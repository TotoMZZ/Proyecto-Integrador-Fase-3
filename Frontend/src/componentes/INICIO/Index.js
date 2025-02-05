import { useEffect, useState } from 'react'
import './Index.css'

import servicioProductos from '../../servicios/productos'
import { useStateLocalStorage } from '../../Hooks/useStateLocalStorage'

export function Index() {
    const [productos, setProductos] = useState([])
    //const [carrito, setCarrito] = useState([])
    const [carrito, setCarrito] = useStateLocalStorage('carrito', [])

    useEffect(() => {
        console.log('Componente Inicio (montado)')

        async function pedir() {
            const productos = await servicioProductos.getAll()
            //console.log(productos)
            setProductos(productos)
        }
        pedir()

        return () => {
            console.log('Componente Inicio (desmontado)')
        }
    }, [])

    /* useEffect( () => {
        console.log(carrito)
    },[carrito]) */

    function agregar(producto) {
        //console.log('agregar', producto)

        const carritoClon = [...carrito]

        const id = producto.id
        const productoExistente = carritoClon.find(p => p.id === id)

        if (!productoExistente) {
            producto.cantidad = 1
            carritoClon.push(producto)
        }
        else {
            productoExistente.cantidad++
            const index = carritoClon.findIndex(p => p.id === id)
            carritoClon.splice(index, 1, productoExistente)
        }
        setCarrito(carritoClon)
    }

    return (
        <div className="inicio">
            <div className="section-cards">
                <div className="section-cards-header">
                </div>
                {/* <!-- https://www.iconfinder.com/free_icons --> */}
                <div className="section-cards-body">
                    {!productos.length && <h2>No se encontraron productos para mostrar</h2>}
                    {
                        productos.map((producto, i) =>
                            <section key={i} >
                                <h3>{producto.nombre}</h3>
                                <img src={producto.foto} alt={"foto de " + producto.nombre + ' ' + producto.marca} />
                                <p><b>Precio:</b> ${producto.precio}</p>
                                <p><b>Stock:</b> {producto.stock}</p>
                                <p><b>Marca:</b> {producto.marca}</p>
                                <p><b>Categoría:</b> {producto.categoria}</p>
                                <p><b>Descripcion Corta:</b> {producto.descripcionCorta}</p>
                                <p><b>Descripcion Larga:</b> {producto.descripcionLarga}</p>
                                <p><b>Edad Desde:</b> {producto.edadDesde}</p>
                                <p><b>Edad Hasta:</b> {producto.edadHasta}</p>
                                <br />
                                <p><b style={{ color: 'gold' }}>Envío:</b> {producto.envio ? 'Si' : 'No'}</p>
                                <button id={"btnComprar-" + producto.id} onClick={
                                    () => agregar(producto)
                                }>Agregar al carrito</button>
                            </section>
                        )
                    }
                </div>
            </div>
        </div>
    )
}