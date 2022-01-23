import { Product } from "./product";

export class CartItem {
    id : number =0;
    productName: string = '';
    price: number = 0;
    productId: number = 0;
    qty : number = 0
    
    constructor(id: any,product: Product,qty = 1){
        // this.id = id;
        // this.productId = product.id;
        // this.productName = product.name;
        // this.price = product.price;
        // this.qty = product.qty;

}
}

