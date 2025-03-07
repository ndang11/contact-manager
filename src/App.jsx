import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import ContactList from "./component/ContactList";

function app() {
  return (
    <>
      <ContactList />
    </>
  );
}

export default app;
