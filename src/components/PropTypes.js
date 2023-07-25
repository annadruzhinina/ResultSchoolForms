import React, { useState } from "react";
import PropTypes from "prop-types";

const Product = ({ name, price }) => {
  const [amount, setAmount] = useState(1);

  // const Product = ({ name, price, initialAmount }) => {
  //   const [amount, setAmount] = useState(initialAmount);
  return (
    <>
      <div>
        {name} - {price}
      </div>
      <div>Qty: {amount}</div>
      {/* <Basket amount={amount} /> */}
    </>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

export default Product;
