import { Container } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import shoes from "./shoes.json";

function ProductDetails() {
  const { id } = useParams();
  const shoe = shoes[id];
  console.log("heyyy", shoe);
  if (!shoe) {
    return (
      <div>
        <h1>Sorry</h1>
        <h1>No Product Found</h1>
      </div>
    );
  }

  return (
    <Container maxWidth="lg">
      <div className="ProductDetails" key={id}>
        <div className="ProductDetails__image">
          <img src={shoe.imageURL} alt="" />
        </div>
        <div className="ProductDetails__heading">
          <h4 style ={{textDecoration:"underline"}}  >{shoe.name}</h4>
          <h6>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quia
            cum eligendi atque tempore. Blanditiis eius vitae nobis vero
            inventore consectetur minima consequatur explicabo suscipit officiis
            beatae incidunt, minus quos. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Iure quas aperiam aut fuga, non enim temporibus
            eligendi at, vitae alias soluta blanditiis. Cum nobis, quibusdam
            nemo deserunt aperiam quo a!
          </h6>
          <div className="ProductDetails__cardfooter">
            <h4>{shoe.price}$</h4>
            <h4>Left:{shoe.items_left}</h4>
          </div>
          <h4  style = {{marginTop:"10px",color:"#acactj"}}>Category: {shoe.category}</h4>

        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;
