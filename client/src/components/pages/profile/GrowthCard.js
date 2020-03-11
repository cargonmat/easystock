import React from "react";

const Growth = props => {
  //({ ["2. name"],["1. symbol"], close, prevClose }) => {
  return (
    <>
      <thead>
        <tr>
          <th>Nombre: {props["company"]}</th>
        </tr>
      </thead>
      <tbody>
        <tr className="content">
          <td>
            <ul>
              <li>Valor actual: {props["value"]} USD.</li>
              <li style={{ color: props["growth"] >= 0 ? "green" : "red" }}>
                Crecimiento: {props["growth"].toFixed(4)}%.
              </li>
            </ul>
          </td>
        </tr>
        {/* </tr>
        <tr className="content">
          <td></td>
        </tr>
        <tr className="content">
          <td>
           
          </td>
        </tr> */}
        {/* <tr className="content">
          <td>Precio de actual:{values}</td>
        </tr> */}
        {/* <tr className="content">
          <td>
            <Link to={`/details/${props["company"]}`} className="noDetail">
              Realizar transacciones
            </Link>
          </td>
        </tr> */}
      </tbody>
    </>
  );
};

export default Growth;
