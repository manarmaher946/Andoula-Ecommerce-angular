import { ProductCartDTO } from "./ProductCart"

export interface UpdateDTO {
    cartId:string,
    ProductCartDTOs: ProductCartDTO[]
}