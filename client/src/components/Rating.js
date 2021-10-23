import React from "react";

function Rating({ rating, numberViews }) {
  const value = Array(5)
    .fill()
    .map((item, i) => {
      return rating >= i + 1 ? (
        <span key={item}>&#9733;</span>
      ) : rating >= i + 1 - 0.5 ? (
        <span key={item}>&#11242;</span>
      ) : (
        <span key={item}>&#9734;</span>
      );
    });
  return (
    <div className="rating">
      <div>{value}</div>
      <div> {numberViews} reviews</div>
    </div>
  );
}
export default Rating;
