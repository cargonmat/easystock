import React from "react";
import { Link } from "react-router-dom";

const Shares = props => {
  //({ ["2. name"],["1. symbol"], close, prevClose }) => {

  return (
    <>
      <tbody
        className="media"
        //style={{ visibility: props["shares"] === 0 ? "collapse" : "inherit" }}
      >
        <tr className="content">
          <td>Nombre: {props["company"]}.</td>
        </tr>
        <tr className="content">
          <td>Acciones: {props["shares"]}.</td>
        </tr>
        <tr className="content">
          <td>Precio de compra: {props["actualvalue"]} USD.</td>
        </tr>
        {/* <tr className="content">
          <td>Precio de actual:{values}</td>
        </tr> */}
        <tr className="content">
          <td>
            <Link to={`/details/${props["company"]}`} className="black">
              Realizar transacciones
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Shares;
