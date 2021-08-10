import React from "react";
import "./TodoItems.css";
import ClearIcon from "@material-ui/icons/Clear";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { Checkbox } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
export default function TodoItems(props) {
  const { items, deleteItem } = props;
  const ListItems = items.length ? (
    <Table aria-label="simple table">
      <TableHead style={{ backgroundColor: "#8AA29E" }}>
        <TableRow>
          {/* <TableCell>Dessert (100g serving)</TableCell> */}
          <TableCell style={{ color: "white" }} align="center"></TableCell>
          <TableCell style={{ color: "white" }}>Task</TableCell>
          <TableCell style={{ color: "white" }}>Time</TableCell>
          <TableCell style={{ color: "white" }}>Remove</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(({ id, task, timetotake }) => (
          <TableRow key={id}>
            <TableCell align="center">
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
            </TableCell>
            <TableCell>{task}</TableCell>
            <TableCell>{timetotake}</TableCell>
            <TableCell>
              <ClearIcon fontSize="small" onClick={() => deleteItem(id)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    <p>No Items to show</p>
  );
  return <div className="ListItemscon">{ListItems}</div>;
}
