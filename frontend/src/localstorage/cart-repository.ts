import { OrderDTO, OrderItemDTO } from "../models/order";
import { CART_KEY_STORAGE } from "../utils/system";


export function save(cart: OrderDTO) {
  const str = JSON.stringify(cart);
  localStorage.setItem(CART_KEY_STORAGE, str);
}

export function get(): OrderDTO {
  const str = localStorage.getItem(CART_KEY_STORAGE) || '{"items": []}';
  const obj = JSON.parse(str) as OrderDTO;

  const cart = new OrderDTO();
  obj.items.forEach((item) => {
    cart.items.push(
      new OrderItemDTO(
        item.productId,
        item.quantity,
        item.name,
        item.price,
        item.imgUrl
      )
    );
  });

  return cart;
}

export function count(): number {
  const str = localStorage.getItem(CART_KEY_STORAGE) || '{"items": []}';
  const obj = JSON.parse(str) as OrderDTO;

  return obj.items.length;
}

export function clear() {
  localStorage.setItem(CART_KEY_STORAGE, '{"items": []}');
}
