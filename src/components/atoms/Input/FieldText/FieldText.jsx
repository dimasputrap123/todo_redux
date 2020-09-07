import React from "react";
import { TextField } from "@material-ui/core";
import "./styles.css";

const FieldText = ({ label, handleChange, value, name, error, onFocus }) => {
  return (
    <div className="cot">
      <TextField
        id="outlined-basic"
        name={name}
        label={label}
        variant="outlined"
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
        className="cot2"
      />
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

FieldText.defaultProps = {
  label: "Label",
  handleChange: () => console.log("fungsinya blm di set"),
  value: "",
};

export default FieldText;
