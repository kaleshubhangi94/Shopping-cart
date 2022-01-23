export class Product {
    id : number;
    name: string;
    description: string;
    price: number;
    qty : number
    imageUrl: string;

    constructor(id:number,name:string,description='',qty =0,price=0,imageUrl='https://m.media-amazon.com/images/I/41NjhAexoTL.jpg'){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.qty = qty
        this.imageUrl = imageUrl
    }
}


    
