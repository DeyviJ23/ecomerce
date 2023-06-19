const products = [
    { 
        id: '1',
        name: 'Rico Can',
        price: 50, 
        category: 'alimento', 
        img:'https://s7d2.scene7.com/is/image/TottusPE/42946468_1?wid=1500&hei=1500&qlt=70', 
        stock: 25, 
        description:'Comida para perro Rico Can'

    },
    { id: '2', name: 'Rico Cat', price: 45, category: 'alimento', img:'https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F2020%2FMASCOTAS%2FRICOCAT-GATITOS-BEBES-SABOR-CARNE-PESCADO-Y-LECHE-BOLSA-9-KG_001040000295_7.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=2bf6a4e7041f74931d7eca257add2fb6', stock: 20, description:'Comida para gato Rico Cat'},
    { id: '3', name: 'Canbo Adulto', price: 80, category: 'alimento', img:'https://gopet.vtexassets.com/arquivos/ids/157808-800-auto?v=1773543691&width=800&height=auto&aspect=true', stock: 12, description:'Comida para mascotas adultas Canbo'},
    { id: '4', name: 'Canbo Cachorro', price: 70, category: 'alimento', img:'https://mascotaveloz.pe/wp-content/uploads/2020/03/MV000800.jpg', stock: 10, description:'Comida para mascotas pequeñas Canbo'},
    { id: '5', name: 'Barritas', price: 25, category: 'alimento', img:'https://plazavea.vteximg.com.br/arquivos/ids/26452149-1000-1000/20282075.jpg', stock: 35, description:'Barritas de cordero para mascotas'},
    { id: '6', name: 'Arnes', price: 20, category: 'accesorios', img:'https://falabella.scene7.com/is/image/FalabellaPE/882538097_1?wid=1500&hei=1500&qlt=70', stock: 50, description:'Arnes para pasear mascotas'},
    { id: '7', name: 'Comedero doble', price: 45, category: 'accesorios', img:'https://promart.vteximg.com.br/arquivos/ids/3308661-1000-1000/image-3b2a9ef14efe4321906022dd69fa6f21.jpg?v=637746578771570000', stock: 50, description:'Comedero y bebedero para mascotas'},
    { id: '8', name: 'Bexter Shampoo', price: 15, category: 'cuidado', img:'https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F2289%2FMASCOTAS%2FBEXSHAPERPS500ML_185359985245_2.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=d6a5fa3699be7a8ba6f23dc02eed7184', stock: 100, description:'Barritas de cordero para mascotas'},
    { id: '9', name: 'Antipulgas', price: 40, category: 'cuidado', img:'https://mascotify.pe/wp-content/uploads/2021/12/FRONTLINE-Spray-x-250ml-Antipulgas-para-perros-y-gatos.png', stock: 120, description:'Antipulgas para mascotas'},
    { id: '10', name: 'Colonia Animal', price: 30, category: 'cuidado', img:'https://plazavea.vteximg.com.br/arquivos/ids/529513-1000-1000/20120280.jpg', stock: 50, description:'Colonia para mascotas'},
    { id: '11', name: 'Doxipet Medicina', price: 25,  category: 'cuidado', img:'https://www.sani.com.ar/usr/timthumb.php?src=https://www.sani.com.ar/productos/fotos/6063.jpg&w=188&h=250&zc=1', stock: 110, description:'Medicina para mascotas'},
    { id: '12', name: 'Cama Bunny', price: 50, category: 'otros', img:'https://falabella.scene7.com/is/image/FalabellaPE/882538155_1?wid=1500&hei=1500&qlt=70', stock: 90, description:'Cama para mascotas'}
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}