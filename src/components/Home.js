import React from "react";
import { makeStyles, createStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className = "Home">
      <div className={classes.root}>
        <Grid container spacing={3}>
          {Object.keys(shoes).map((keynames) => {
            const shoe = shoes[keynames];
            return (
              <Grid key={shoe.id} item xs={12} md={4} lg={3}>
                <Link to={`/${keynames}`}>
                  <Paper id = "Home__card" className={classes.paper}>
                    <div className="Home__shoes">
                      <h4>{shoe.name}</h4>
                      <img
                        src={shoe.imageURL}
                        width="100%"
                        height="300px"
                        alt=""
                      />
                      <div className = "Home__imgfooter">
                      <h5>{shoe.gender}</h5>
                      <h4>{shoe.price}$</h4>
                      </div>
                    </div>
                  </Paper>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
