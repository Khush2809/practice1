import React from "react";
import { Box, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "5%",
  },
  title: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "20px",
    marginRight: "10px",
  },
  filled: {
    backgroundColor: "rgba(63, 14, 64, 1)",
    color: "white",
    width: "58px",
    height: "29px",
    fontSize: "15px",
    marginRight: "10px",
  },
  upgrade: {
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "0.46px",
  },
  advance: {
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "0.15px",
    fontSize: "15px",
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 850,
    marginLeft: "3%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  box: {
    backgroundColor: "white",
    height: "86px",
    marginTop: "1%",
    marginBottom: "2%",
    // display: "flex",
    alignItems: "center",
    // marginLeft: "3%",
  },
  btn: {
    backgroundColor: "rgba(63, 14, 64, 1)",
    fontFamily: "'Poppins', sans-serif",
    color: "white",
    marginRight: "50px",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.main}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" flexDirection="row">
            <Box className={classes.title}>Add Another Keyword</Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.filled}
            >
              1/3
            </Box>
            <Box display="flex" alignItems="center" className={classes.upgrade}>
              UPGRADE
            </Box>
          </Box>
          <Box className={classes.advance}>Advance Search</Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
          className={classes.box}
        >
          <Box>
            <Paper component="form" className={classes.root}>
              <IconButton className={classes.iconButton} aria-label="menu">
                <SearchIcon />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="Enter your filters here"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>
          </Box>
          <Box>
            <Button className={classes.btn} variant="contained" size="large">
              Save Filters
            </Button>
          </Box>{" "}
        </Box>
        <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px" }}>
          The terms you are tracking
        </h3>
      </Container>
    </div>
  );
};

export default Home;
