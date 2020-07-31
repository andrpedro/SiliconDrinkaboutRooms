import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6)
  }
}));

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        404 - Estamos perdidos igual a você
      </Typography>
      <Button
        component={AdapterLink}
        to="/chip_pip"
        variant="outlined"
        color="primary"
        size="large"
      >
        Voltar a entrada
      </Button>
    </div>
  );
};

export default PageNotFound;
