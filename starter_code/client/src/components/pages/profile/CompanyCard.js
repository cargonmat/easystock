import React from "react";
import { Link } from "react-router-dom";

const CompanyCard = props => {
  //({ ["2. name"],["1. symbol"], close, prevClose }) => {
  return (
    <tbody className="media">
      <tr className="content">
        <td>{props["2. name"]}</td>
        <td>{props["1. symbol"]}</td>{" "}
        <td>
          {" "}
          <Link to={`/details/${props["1. symbol"]}`} className="noDetail">
            details
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default CompanyCard;
