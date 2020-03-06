import React from "react";
import { Link } from "react-router-dom";

const Shares = props => {
  //({ ["2. name"],["1. symbol"], close, prevClose }) => {
  return (
    <tbody className="media">
      <tr className="content">
        <td>{props["company"]}</td>
        <td>{props["shares"]}</td>
        <td>{props["actualvalue"]}</td>
        <td>
          <Link to={`/details/${props["company"]}`} className="noDetail">
            Buy more
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default Shares;
