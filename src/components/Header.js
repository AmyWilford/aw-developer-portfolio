import React from "react";
import Nav from "./Nav";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <Nav
      currentPage={currentPage}
      handlePageChange={handlePageChange}
    />
  );
}
