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

export function clearCart() {
  cartRepository.clear();
}

export function increaseItem(productId: number) {
  const cart = getCart();
  const item = cart.items.find(item => item.productId === productId);

  if(item) {
    item.quantity++;
    saveCart(cart);
  }

}

export function decreaseItem(productId: number) {
  const cart = getCart();
  const item = cart.items.find(item => item.productId === productId);

  if(item) {
    item.quantity--;

    if(item.quantity < 1) {
      cart.items = cart.items.filter(item => item.productId !== productId);
    }
    saveCart(cart);
  }
}