import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton from "./components/Buttons";

const App = () => <PrimaryButton>Hello sekai</PrimaryButton>;

ReactDOM.render(<App />, document.querySelector("#root"));