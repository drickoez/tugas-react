import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunctionalComponent from "./Pembahasan/FunctionalComponent";

export default class Component extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent nama="Dimas" />
        <FunctionalComponent nama="Ricko" />
      </div>
    );
  }
}
