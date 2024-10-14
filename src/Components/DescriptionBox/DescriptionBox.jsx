import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox_navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates buying
          and selling of products or services over the internent serves as a
          virtual marketplace where buisness and individual showcase their
          products,interacts with customers ,and conduct without the need for a
          physical presence. E-commerce websites have gained immense popularity
          due to their convenience accesibility,and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services and
          detailed descriptions,image,and any available varients (e.g. ,
          sizes,colors). Each product usually has its own dedicated with
          relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
