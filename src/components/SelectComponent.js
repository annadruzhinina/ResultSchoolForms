import React from "react";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const productOptions = [
  { value: "tv", label: "TV" },
  { value: "smartphone", label: "Smartphone" },
  { value: "laptop", label: "Laptop" },
];

const colorOptions = [
  { value: "black", label: "Black" },
  { value: "silver", label: "Silver" },
  { value: "white", label: "White" },
];
function SelectComponent() {
  return (
    <div>
      <Select options={productOptions} defaultValue={productOptions[0]} />
      <Select
        isMulti
        options={colorOptions}
        defaultValue={(colorOptions[0], colorOptions[1])}
      />
    </div>
  );
}

export default SelectComponent;
