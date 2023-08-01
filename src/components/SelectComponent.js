import React from "react";
import { useState } from "react";
import Select from "react-select";

function SelectComponent() {
  const [selectedProduct, setSelectedProduct] = useState("tv");
  const [selectedColors, setSelectedColors] = useState(["black", "silver"]);
  const onSelectedProductChange = (target) => setSelectedProduct(target.value);
  const onSelectedColorsChange = ({ target }) => {
    const newSelectedColors = [...target.selectedOptions].map(
      (selectedTarget) => selectedTarget.value
    );
    setSelectedColors(newSelectedColors);
  };

  return (
    <div>
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
        <option value="black">Black</option>
        <option value="silver">Silver</option>
        <option value="white">White</option>
      </select>
    </div>
  );
}

export default SelectComponent;
