import { OrderDTO } from "../models/order";

const CART_STORAGE = "@dscommerce/Cart-1.0.0";

export function save(cart: OrderDTO) {
  const str = JSON.stringify(cart);
  localStorage.setItem(CART_STORAGE, str);
}

export function get(): OrderDTO {
  const str = localStorage.getItem(CART_STORAGE) || '{"items": []}';
  return JSON.parse(str);
}

