class ModelMem {

    constructor() {
        this.pedidos = []
    }

    obtenerPedidos = async () => this.pedidos

    guardarPedido = async pedido => {
        pedido.id = String(+(this.productos[this.productos.length - 1]?.id || 0) + 1)
        this.pedidos.push(pedido)
        return pedido
    }
}
export default ModelMem