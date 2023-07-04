import { OrderDTO, OrderItemDTO } from "../models/order";
import * as cartRepository from "../localstorage/cart-repository";
import { ProductDTO } from "../models/product";


export function saveCart(cart: OrderDTO) {
  cartRepository.save(cart);
}

export function getCart(): OrderDTO {
  return cartRepository.get();
}

export function addProduct(productDTO: ProductDTO) {
  const cart = cartRepository.get();
  const item = cart.items.find(product => product.productId === productDTO.id);

  if(!item) {
    const newItem = new OrderItemDTO(productDTO.id, 1, productDTO.name, productDTO.price, productDTO.imgUrl);
    cart.items.push(newItem);
    saveCart(cart);
  }
}