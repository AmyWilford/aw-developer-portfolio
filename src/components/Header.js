import React from "react";
import Nav from "./Nav";

// import "../components/styles/Header.css";
export default function Header({ currentPage, handlePageChange }) {
  return <Nav currentPage={currentPage} handlePageChange={handlePageChange} />;
}
