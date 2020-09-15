import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import DesktopFooter from "../../../molecules/footer/DesktopFooter";
import ilustrate from "../../../../assets/img/illustration";

const useStyle = makeStyles({
  card: {
    width: 907,
    height: 555,
  },
  form: {
    backgroundColor: "#fff",
    padding: 21,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  illustration: {
    backgroundColor: "#e5e5e5",
  },
});
const TempLogin = ({ children }) => {
  const classes = useStyle();
  return (
    <div className={"background-desktop"}>
      <div className="container-center-desktop">
        <Grid container className={classes.card}>
          <Grid item xs={6} container className={classes.form}>
            {children}
          </Grid>
          <Grid
            item
            xs={6}
            container
            justify="center"
            alignItems="center"
            className={classes.illustration}
          >
            <img src={ilustrate.login} alt="" className="w-100 h-auto" />
          </Grid>
        </Grid>
      </div>
      <DesktopFooter />
    </div>
  );
};

export default TempLogin;
