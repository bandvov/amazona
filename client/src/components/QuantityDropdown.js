import React from "react";

export default function QuantityDropdown({
  onChange,
  optionItems,
  defaultValue,
}) {
  return (
    <select onChange={onChange} value={defaultValue}>
      {[...Array(optionItems).keys()].map((x) => (
        <option key={x + 1} value={x + 1}>
          {x + 1}
        </option>
      ))}
    </select>
  );
}
