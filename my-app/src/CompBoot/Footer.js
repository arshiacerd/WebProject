import React from "react";

function Footer() {
  return (
    <>
      <div className="container-fluid footer_style">
        <div className="row">
          <div className="col-md-4 red">
            <h3>Food House</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis quo aliquid impedit quisquam dolor unde fugiat earum
              vel dolore? Libero animi deserunt itaque ratione, ipsum possimus
              modi aut voluptatibus maiores.
            </p>
          </div>
          <div className="col-md-4 yellow">
            <h3>Food House</h3>

            <ul>
              <li>Desi</li>
              <li>Fast Food</li>
              <li>Chinies</li>
              <li>Grill</li>
            </ul>
          </div>
          <div className="col-md-4 pink">
            <h3>Contact</h3>

            <ul>
              <li>Shah faisal</li>
              <li>abc@gmail.com</li>
              <li>+090078601</li>
              <li>576</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
