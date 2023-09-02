import { useState } from "react";
// import styles from "./App.module.css";

export const Select = () => {
  const [selectedProduct, setSelectedProduct] = useState("tv");
  const [selectedColors, setSelectedColors] = useState(["black", "white"]);

  const onSelectedProductChange = ({ target }) => {
    setSelectedProduct(target.value);
  };

  const onSelectedColorsChange = ({ target }) => {
    const newSelectedColors = [...target.selectedOptions].map(
      (selectedOption) => selectedOption.value
    );

    setSelectedColors(newSelectedColors);
  };

  return (
    <div className="atyles.app">
      <select value={selectedProduct} onChange={onSelectedProductChange}>
        <option value="tv">TV</option>
        <option value="smartphone">Smartphone</option>
        <option value="laptop">Laptop</option>
      </select>
      <select
        multiple={true}
        value={selectedColors}
        onChange={onSelectedColorsChange}
      >
        <option value="black">Чёрный</option>
        <option value="white">Белый</option>
        <option value="silver">Серебристый</option>
      </select>
    </div>
  );
};

export default Select;
