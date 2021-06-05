import React from "react";
import { useSelector } from "react-redux";

const Review = () => {
  const { token } = useSelector((state) => state.checkout);

  return (
    <>
      <h6>Order Summary</h6>

      <div className="overflow-auto">
        {token.live.line_items.map((product) => (
          <div className="flex mt-6" key={product.name}>
            <div className="col-span-2 sm:col-span-1 xl:col-span-1 mr-3 ">
              <img
                alt={product.name}
                src={product.media.source}
                className="h-24 w-24 rounded object-contain "
              />
            </div>
            <div className="flex flex-col">
              <div className="col-span-2 sm:col-span-4 xl:col-span-4">
                <h3 className="font-semibold text-black">{product.name}</h3>
                <p className="truncate">{product.description}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
              <div className="col-span-2 sm:col-span-1 xl:col-span-1 italic ">
                {product.line_total.formatted_with_symbol}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p>Sub-total: {token.live.subtotal.formatted_with_symbol}</p>
    </>
  );
};

export default Review;
