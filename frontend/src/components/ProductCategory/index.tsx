
import "./styles.css";

type ProductCategoryProps = {
  name: string;
}

export function ProductCategory({ name }: ProductCategoryProps) {
  return (
      <div className="dsc-category">{name}</div>
  );
}
