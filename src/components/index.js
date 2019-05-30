import React, { Component } from "react";
import { render } from "react-dom";
import App from "./app";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("worker.js");
}

render(<App />, document.getElementById("app"));
