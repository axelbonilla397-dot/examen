export interface Product {
    id: string;
    marca: string;
    modelo: string;
    title: string;
    price: number;
    oferta?: number;
    description: string;
    category: string;
    stock: number;
    badge?: string;
    images: string[];
    slug: string;
    specs: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: "1",
    marca: "Toyota",
    modelo: "Corolla",
    title: "Toyota Corolla 2021",
    price: 385000,
    oferta: 340000,
    description: "Vehículo confiable, económico y en excelente estado.",
    category: "sedan",
    stock: 1,
    badge:"LIQUIDACION",
    images: ["https://www.toyota.com.gt/hubfs/Colores-Corolla-2020-Blanco.jpg"],
    slug: "toyota-corolla-2021",
    specs: [
      { label: "Año", value: "2021" },
      { label: "Transmisión", value: "Automática" },
      { label: "Motor", value: "1.8L" },
      { label: "Kilometraje", value: "32,000 km" }
    ]
  },
  {
    id: "2",
    marca: "Honda",
    modelo: "Civic",
    title: "Honda Civic 2022",
    price: 420000,
    oferta: 400000,
    badge: "LIQUIDACION",
    description: "Coche compacto con excelente rendimiento y tecnología moderna.",
    category: "sedan",
    stock: 1,
    images: ["https://www.prensalibre.com/wp-content/uploads/2022/06/ACT100622EmpresarialHonda2.jpg?quality=52&w=1024"],
    slug: "honda-civic-2022",
    specs: [
      { label: "Año", value: "2022" },
      { label: "Transmisión", value: "Manual" },
      { label: "Motor", value: "2.0L" },
      { label: "Kilometraje", value: "18,000 km" }
    ]
  },
  {
    id: "3",
    marca: "Hyundai",
    modelo: "Elantra",
    title: "Hyundai Elantra 2020",
    price: 365000,
    description: "Sedán económico, eficiente y cómodo para la ciudad.",
    category: "sedan",
    stock: 1,
    images: ["https://cdn.jdpower.com/JDPA_2020%20Hyundai%20Elantra%20Sport%20Blue%20Front%20View%20Small.jpg"],
    slug: "hyundai-elantra-2020",
    specs: [
      { label: "Año", value: "2020" },
      { label: "Transmisión", value: "Automática" },
      { label: "Motor", value: "2.0L" },
      { label: "Kilometraje", value: "40,000 km" }
    ]
  },
  {
    id: "4",
    marca: "Kia",
    modelo: "Sportage",
    title: "Kia Sportage 2023",
    price: 540000,
    description: "SUV versátil y moderno, ideal para familia y ciudad.",
    category: "suv",
    stock: 1,
    images: ["https://storage.googleapis.com/www.savvydealer.com/new/Kia/Sportage/All-Trims/2024/Features/2024-Kia-Sportage-Exterior.jpg"],
    slug: "kia-sportage-2023",
    specs: [
      { label: "Año", value: "2023" },
      { label: "Transmisión", value: "Automática" },
      { label: "Motor", value: "2.5L" },
      { label: "Kilometraje", value: "9,000 km" }
    ]
  },
  {
    id: "5",
    marca: "Ford",
    modelo: "Ranger",
    title: "Ford Ranger 2022",
    price: 680000,
    description: "Pickup robusta y confiable para trabajo y aventura.",
    category: "pickup",
    stock: 1,
    images: ["https://fotografias.lasexta.com/clipping/cmsimages02/2021/11/25/74B4D7D2-9293-4CE3-BB32-54139CC93F04/104.jpg?crop=1279,1279,x323,y0&width=1200&height=1200&optimize=low&format=webply"],
    slug: "ford-ranger-2022",
    specs: [
      { label: "Año", value: "2022" },
      { label: "Transmisión", value: "Automática" },
      { label: "Motor", value: "3.2L Diesel" },
      { label: "Kilometraje", value: "22,000 km" }
    ]
  },
  {
    id: "6",
    marca: "Chevrolet",
    modelo: "Hilux",
    title: "Toyota Hilux 2021",
    price: 720000,
    description: "Pickup confiable y resistente para todo terreno.",
    category: "pickup",
    stock: 1,
    images: ["https://www.diariomotor.com/imagenes/2020/06/toyota-hilux-2021-09.jpg?class=XL"],
    slug: "Toyota-hilux-2021",
    specs: [
      { label: "Año", value: "2021" },
      { label: "Transmisión", value: "Manual" },
      { label: "Motor", value: "2.8L Diesel" },
      { label: "Kilometraje", value: "35,000 km" }
    ]
  },
  {
    id: "7",
    marca: "Mazda",
    modelo: "CX-5",
    title: "Mazda CX-5 2023",
    price: 590000,
    description: "SUV elegante y deportivo con excelente desempeño.",
    category: "suv",
    stock: 1,
    images: ["https://di-uploads-pod42.dealerinspire.com/jerryseinermazda/uploads/2023/01/2023-mazda-cx-5-gallery-image07.jpg"],
    slug: "mazda-cx5-2023",
    specs: [
      { label: "Año", value: "2023" },
      { label: "Transmisión", value: "Automática" },
      { label: "Motor", value: "2.5L" },
      { label: "Kilometraje", value: "12,000 km" }
    ]
  },
  {
    id: "8",
    marca: "Nissan",
    modelo: "Frontier",
    title: "Nissan Frontier 2022",
    price: 650000,
    description: "Pickup potente y confiable para trabajo pesado.",
    category: "pickup",
    stock: 1,
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzM3uxlPR6qJqUjpx5DEA691ePg80i3sQpcQ&s"],
    slug: "nissan-frontier-2022",
    specs: [
      { label: "Año", value: "2022" },
      { label: "Transmisión", value: "Automática" },
      { label: "Motor", value: "2.5L Diesel" },
      { label: "Kilometraje", value: "27,000 km" }
    ]
  },
  {
    id: "9",
    marca: "Volkswagen",
    modelo: "Jetta",
    title: "Volkswagen Jetta 2021",
    price: 410000,
    description: "Sedán cómodo y confiable para uso diario.",
    category: "sedan",
    stock: 1,
    images: ["https://www.crainvw.com/blogs/3227/wp-content/uploads/2021/06/blog2-4_Impressive_Features_of_the_2021_VW_Jetta_GLI_637582211026826078.png"],
    slug: "volkswagen-jetta-2021",
    specs: [
      { label: "Año", value: "2021" },
      { label: "Transmisión", value: "Automática" },
      { label: "Motor", value: "1.4L Turbo" },
      { label: "Kilometraje", value: "29,000 km" }
    ]
  },
  {
    id: "10",
    marca: "BMW",
    modelo: "X5",
    title: "BMW X5 2023",
    price: 1250000,
    description: "SUV de lujo con alto desempeño y confort premium.",
    category: "lujo",
    stock: 1,
    images: ["https://hips.hearstapps.com/hmg-prod/images/bmw-x5-2024-1600-03-1675845761.jpg?crop=0.75xw:1xh;center,top&resize=1200:*"],
    slug: "bmw-x5-2023",
    specs: [
      { label: "Año", value: "2023" },
      { label: "Transmisión", value: "Automática" },
      { label: "Motor", value: "3.0L Turbo" },
      { label: "Kilometraje", value: "8,000 km" }
    ]
  },
  {
    id: "11",
    marca: "Mercedes-Benz",
    modelo: "C-Class",
    title: "Mercedes C-Class 2022",
    price: 1150000,
    description: "Sedán de lujo con tecnología y confort avanzados.",
    category: "sedan",
    stock: 1,
    images: ["https://hips.hearstapps.com/hmg-prod/images/2022-mercedes-benz-c-class-106-1613767205.jpg"],
    slug: "mercedes-c-class-2022",
    specs: [
      { label: "Año", value: "2022" },
      { label: "Transmisión", value: "Automática" },
      { label: "Motor", value: "2.0L Turbo" },
      { label: "Kilometraje", value: "15,000 km" }
    ]
  },
  {
    id: "12",
    marca: "Audi",
    modelo: "A4",
    title: "Audi A4 2021",
    price: 980000,
    description: "Sedán elegante con tecnología de punta y buen rendimiento.",
    category: "sedan",
    stock: 1,
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNiOhBdP_de9qI36kEdHGjkCnEBw7TUqNabQ&s"],
    slug: "audi-a4-2021",
    specs: [
      { label: "Año", value: "2021" },
      { label: "Transmisión", value: "Automática" },
      { label: "Motor", value: "2.0L Turbo" },
      { label: "Kilometraje", value: "21,000 km" }
    ]
  },
  {
    id: "13",
    marca: "Toyota",
    modelo: "Fortuner",
    title: "Toyota Fortuner 2022",
    price: 890000,
    description: "SUV robusta, cómoda y familiar.",
    category: "suv",
    stock: 1,
    images: ["https://www.toyotacr.com/uploads/family/d9472fdd836f972bb956ab42f869487912ee2c8a.png"],
    slug: "toyota-fortuner-2022",
    specs: [
      { label: "Año", value: "2022" },
      { label: "Transmisión", value: "Automática" },
      { label: "Motor", value: "2.8L Diesel" },
      { label: "Kilometraje", value: "19,000 km" }
    ]
  },
  {
    id: "14",
    marca: "Jeep",
    modelo: "Wrangler",
    title: "Jeep Wrangler 2023",
    price: 1100000,
    description: "SUV todoterreno con estilo icónico y gran desempeño.",
    category: "lujo",
    stock: 1,
    images: ["https://alcf.s3.us-west-1.amazonaws.com/_custom/2023/jeep/wrangler-4xe/2023-jeep-wrangler-4xe-main.jpg"],
    slug: "jeep-wrangler-2023",
    specs: [
      { label: "Año", value: "2023" },
      { label: "Transmisión", value: "Manual" },
      { label: "Motor", value: "3.6L" },
      { label: "Kilometraje", value: "6,000 km" }
    ]
  },
  {
    id: "15",
    marca: "Suzuki",
    modelo: "Vitara",
    title: "Suzuki Vitara 2021",
    price: 480000,
    description: "SUV compacto, ideal para ciudad y familia.",
    category: "suv",
    stock: 1,
    images: ["https://i.ytimg.com/vi/-4uzBjeQDEM/maxresdefault.jpg"],
    slug: "suzuki-vitara-2021",
    specs: [
      { label: "Año", value: "2021" },
      { label: "Transmisión", value: "Automática" },
      { label: "Motor", value: "1.6L" },
      { label: "Kilometraje", value: "34,000 km" }
    ]
  }
];



export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getRelatedProducts = (category: string, currentSlug: string) =>
    products.filter(p => p.category === category && p.slug !== currentSlug).slice(0, 4);
