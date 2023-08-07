import { OrderDTO, OrderItemDTO } from "../models/order";

const CART_STORAGE = "@dscommerce/Cart-1.0.0";

export function save(cart: OrderDTO) {
  const str = JSON.stringify(cart);
  localStorage.setItem(CART_STORAGE, str);
}

export function get(): OrderDTO {
  const str = localStorage.getItem(CART_STORAGE) || '{"items": []}';
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
  const str = localStorage.getItem(CART_STORAGE) || '{"items": []}';
  const obj = JSON.parse(str) as OrderDTO;

  return obj.items.length;
}

export function clear() {
  localStorage.setItem(CART_STORAGE, '{"items": []}');
}
