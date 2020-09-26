import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import shoes from "./shoes.json";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

function Men() {
  const classes = useStyles();

  return (
    <div className="Men">
      <div className={classes.root}>
        <Grid container spacing={3}>
          {Object.keys(shoes).map((keynames) => {
            const shoe = shoes[keynames];
            if (shoe.gender === "MEN") {
              return (
                <Grid key={shoe.id} item xs={12} md={4} lg={3}>
                    <Link to={`/${keynames}`}>
                  <Paper id = "Men__card" className={classes.paper}>
                    <div className="Men__shoes">
                      <h4 className = "Men__textunderline" >{shoe.name}</h4>
                      <img
                        src={shoe.imageURL}
                        width="300px"
                        height="300px"
                        alt={shoe.name}
                      />
                      <div className="Men__imagefooter">
                        <h5>{shoe.gender}</h5>
                        <h4>{shoe.price}$</h4>
                      </div>
                    </div>
                  </Paper>
                  </Link>
                </Grid>
              );
            } 
            else {
                return false
            }
          })}
          
        </Grid>
      </div>
    </div>
  );
}

export default Men;
