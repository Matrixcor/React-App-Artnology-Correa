const produc = [
    { 
        id:'1', 
        title:"Canon EOS 5D",
        categoryId: "Camaras",
        description: "Camara reflex formato completo FX, montura compatible con lentes manuales y autofoco",
        price:250000,
        stock: 10,
        pictureUrl:"/images/img-async-mockup/canon-eos-5d.jpg"

    },
    {
        id:'2', 
        title:"Huion Inspiron H950P",
        categoryId: "Tablets",
        description: "Tableta grafica especialmente diseñada para el diseño de proyectos graficos.",
        price:155000,
        stock: 10,
        pictureUrl:"/images/img-async-mockup/huion-inspiroy-h950p.jpg"

    },
    {
        id:'3',
        title: "Huion Kanvas PRO 13",
        categoryId: "Tablets", 
        description: "La tableta HUION ofrece lo ultimo en dispositivos de diseño grafico, versatilidad en atajos para trabajar los diseños digitales.",
        price:200000,
        stock: 10,
        pictureUrl:"/images/img-async-mockup/huion-kamvas-pro-13.jpg"

    },
    {
        id:'4',
        title:"ASUS ZenBook PRO Duo 15",
        categoryId: "Notebooks",
        description: "Combina el poder de las pantallas O-Led, lo que brinda un area de trabajo superior. ",
        price:350000,
        stock: 10,
        pictureUrl:"/images/img-async-mockup/laptop-ASUS-ZenBook-Pro-Duo-15.jpg"
    },
    {
        id:'5',
        title:"MacBook PRO 2021",
        categoryId: "Laptops", 
        description: "Con los superpoderes del chip M1 y M2, camara Face-Time HD, Touch ID y una vibrante pantalla Retina",
        price:800000,
        stock: 10,
        pictureUrl:"/images/img-async-mockup/laptops-Nueva-McBook-Pro-2021-1.jpg"
    },
    {
        id:'6', 
        title:"Microsoft Surface Laptop Studio",
        categoryId: "Laptops",
        description: "Hazlo todo con estilo, rendimiento y velocidad",
        price:225000,
        stock: 10,
        pictureUrl:"/images/img-async-mockup/laptop-Microsoft-Surface-Laptop-Studio.jpg"
        
    },
    {
        id:'7',
        title:"Nikon D5 FX",
        categoryId: "Camaras",
        description: "La linea de formato completo de Nikon ofrece una version unica para capturar lo mejores momentos. Diseñada para el ambito profesional, la calidad de su sensor con alta densidad de pixeles y sensibilidad.",
        price:950000,
        stock: 10,
        pictureUrl:"/images/img-async-mockup/nikon-D5.jpg"
       
    },
    {
        id:'8', 
        title:"Wacom One DTC-133",
        categoryId: "Tablets",
        description: "Tercera generacion de tabletas para diseño profesional. Alta densidad de pixeles para capturar cada linea de diseño.",
        price:193000,
        stock: 10,
        pictureUrl:"/images/img-async-mockup/wacom-one - dtc-133.jpg"
        
    },
    {
        id:'9', 
        title:"X-Pen Innovator 16",
        categoryId: "Tablets", 
        description: "Persigue la eficiencia en el dibujo con la elevada precision de su panel tactil. Sorprendete con la simplicidad de diseño.",
        price:180000,
        stock: 10,
        pictureUrl:'/images/img-async-mockup/x-pen-innovator-16.jpg'
    },
    {
        id:'10', 
        title:"X-Pen PRO-15",
        categoryId: "Tablets",
        description: "X-Pen pro trae a tu alcance la solucion perfecta que conbina eficiencia y precision. aumenta tu productividad.",
        price:195000,
        stock: 10,
        pictureUrl:"/images/img-async-mockup/xpen-pro-15.JPG"
    }
]

export const getProduc = ()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve (produc)
        },2000)
    })
}
export const getProducByCategory = (CategoryId)=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve (produc.filter(prod => prod.categoryId == CategoryId))
        },2000)
    })
}

export const getProducById = (ItemId)=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve (produc.find(prod => prod.id === ItemId))
        },2000)
    })
}