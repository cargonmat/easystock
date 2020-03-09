import React from "react";
import { Link } from "react-router-dom";

const Shares = props => {
  //({ ["2. name"],["1. symbol"], close, prevClose }) => {
  return (
    <>
      <tbody
        className="media"
        style={{ visibility: props["shares"] == 0 ? "collapse" : "inherit" }}
      >
        <tr className="content">
          <td>{props["company"]}</td>
        </tr>
        <tr className="content">
          <td>{props["shares"]}</td>
        </tr>
        <tr className="content">
          <td>{props["actualvalue"]}</td>
        </tr>
        <tr className="content">
          <td>
            <Link to={`/details/${props["company"]}`} className="noDetail">
              Realizar transacciones
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Shares;
