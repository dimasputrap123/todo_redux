import { makeStyles } from "@material-ui/core";
import React from "react";

const DesktopFooter = (props) => {
  const useStyles = makeStyles({
    root: {
      backgroundColor: "#fff",
      position: "fixed",
      bottom: 0,
      right: 0,
      width: "100%",
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p>ini halaman desktopfooter kayanyas</p>
    </div>
  );
};

export default DesktopFooter;
