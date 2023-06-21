export interface Product {
    category: string,
    title: string, 
    color: string, 
    img_path: string,
    main_img: string,
    sec_img: string,
    alt_images: Array<string>,
    id: number, 
    section: string,
    price: number
}

export interface CartItem {
    product: Product,
    quantity: number
}