const app = Vue.createApp({
    data() {
        return {
            producto: 'Socks',
            descripcion: '80% lana y 20% polyester',
            image: './assets/images/socks_blue.jpg',
            web: 'http://www.clarin.com',
            InStock: true,
            inventario: 0,
            OnSale: true,
            cart: 0,
            detalles: ['50% algodon', '22% seda', '18% papel', '10% fibra'],
            talles: ['Large', "Medium", "Small"],
            variantes: [
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'},
            ]
        }
    }
})