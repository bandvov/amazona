import React from "react";

export default function QuantityDropdown({ onChange, optionItems }) {
  return (
    <select onChange={onChange}>
      {[...Array(optionItems).keys()].map((x) => (
        <option key={x + 1} value={x + 1}>
          {x + 1}
        </option>
      ))}
    </select>
  );
}
