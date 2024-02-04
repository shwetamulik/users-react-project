export const SmallerProduct = ({ product }) => {
  const { name, price } = product;
  return (
    <>
      <span>
        <h3>{name}</h3>
      </span>
      <span>{price}</span>
    </>
  );
};
