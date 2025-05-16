import React from "react";

function CartItems({ title }: { title: string }) {
  return (
    <div className="w-full h-[40vh] my-8">
      <div className="w-full flex justify-center items-center">
        <div className="w-11/12 flex flex-col items-start gap-4">
          <div className="w-full">
            <h2 className="font-bold text-[#0d4b72] text-lg uppercase select-none">
              {title}
            </h2>
          </div>
          <div className="w-full">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
