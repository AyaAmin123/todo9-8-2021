import React, { Component } from "react";
import "./AddItems.css";
import { Button, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
export default class AddItems extends Component {
  state = { task: "", timetotake: "" };
  mytaskRef = React.createRef();
  mytimeRef = React.createRef();
  handleSubmit = () => {
    this.props.addItem(this.state);
    this.setState({ task: "", timetotake: "" });
  };
  render() {
    return (
      <div style={{ margin: "15px 10px 15px 10px" }}>
        <TextField
          autoFocus={true}
          className="Tfield_1"
          type="text"
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder="What need to be done ?"
          onChange={(e) => {
            this.setState({ task: e.target.value });
          }}
          inputRef={this.mytaskRef}
          onKeyPress={(e) => {
            if (e.code === "Enter" && this.state.task !== "")
              if (this.state.timetotake !== "") this.handleSubmit();
              else this.mytimeRef.current.focus();
          }}
          value={this.state.task}
        />
        <TextField
          inputRef={this.mytimeRef}
          className="Tfield_2"
          type="text"
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder="Time in Minutes"
          onChange={(e) => {
            this.setState({ timetotake: e.target.value });
          }}
          onKeyPress={(e) => {
            if (e.code === "Enter" && this.state.timetotake !== "")
              if (this.state.task !== "") this.handleSubmit();
              else this.mytaskRef.current.focus();
          }}
          value={this.state.timetotake}
        />
        <Button
          disabled={this.state.timetotake === "" && this.state.task === ""}
          style={{
            margin: "18px 0px 0px 20px",
            backgroundColor: "#DB5461",
            color: "white",
          }}
          variant="contained"
          onClick={this.handleSubmit}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}
