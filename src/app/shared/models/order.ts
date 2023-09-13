import { ShippingInfo } from "./shippingInfo";
import { ShoppingCart } from "./shopping-cart";

export class Order{

    datePlaced:number =0;
    items: any[] =[];
    cartTotal:number =0;

    constructor( public userId: string, public shipping: ShippingInfo, shoppingCart: ShoppingCart){
        this.datePlaced = new Date().getTime();
        this.cartTotal = shoppingCart.totalPrice;
    
        this.items = shoppingCart.items.map(i => {
            return{
              product: {
                title: i.title,
                imageUrl: i.imageUrl,
                price: i.price
              },
              quantity: i.quantity,
              totalPrice: i.totalPrice
            }
          })
    }

}