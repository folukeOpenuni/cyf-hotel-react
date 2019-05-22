import React, { Component } from "react";

const Footer = props => {
  const address = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  const list = address.map(add => {
    return <li>{add}</li>;
  });
  return <ul>{list}</ul>;
};

export default Footer;
