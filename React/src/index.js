import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello ,欢迎来到 Build-Simple-Family-bucket-of-React系列一之搭建react
          <br />
        </h1>
        作者： {this.props.name}
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="张不怂" />, mountNode);
