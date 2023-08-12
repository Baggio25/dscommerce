export const formatPrice = (price: number | undefined) => {

  const params = {maximumFractionDigits: 2, minimumFractionDigits: 2};
  if(price === undefined) {
    return 0;
  }

  return new Intl.NumberFormat('pt-BR', params).format(price);
}