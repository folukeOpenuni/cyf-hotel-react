import React from "react";
import moment from "moment";

const SearchResults = props => {
  const tableInfo = props.results;
  const tableDisplay = tableInfo.map(items => (
    <tr>
      <th scope="row">{items.id}</th>
      <td>{items.title}</td>
      <td>{items.firstName}</td>
      <td>{items.surname}</td>
      <td>{items.email}</td>
      <td>{items.roomId}</td>
      <td>{items.checkInDate}</td>
      <td>{items.checkOutDate}</td>
      <td>{moment(items.checkOutDate).diff(items.checkInDate, "days")}</td>
    </tr>
  ));
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">checkindate</th>
            <th>checkoutDate</th>
            <th scope="col">Numbers of nights</th>
          </tr>
        </thead>
        <tbody>{tableDisplay}</tbody>
      </table>
    </div>
  );
};

export default SearchResults;
