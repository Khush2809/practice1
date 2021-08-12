import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import image14 from "../Images/image14.svg";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import StarIcon from "@material-ui/icons/Star";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./../Components/Appbar.css";
import Home from "../Pages/Home";
import Table from "./Table";
import { Button, Container } from "@material-ui/core";
import { IoCalendarClearOutline } from "react-icons/io5";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },

  toolbar: {
    paddingBottom: "3%",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: "#E5E5E5",
  },
  logo: {
    fontFamily: "'Poppins', sans-serif",
  },
  logo1: {
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "0.15px",
    color: "white",
  },
  root1: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "347.5px",
    height: "37.46px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    // padding: 10,
    fontFamily: "'Poppins', sans-serif",
    fontSize: "12px",
    color: "rgba(63, 14, 64, 1)",
  },
  divider: {
    height: 28,
    margin: 4,
  },
  btn: {
    fontFamily: "'Poppins', sans-serif",
    textTransform: "Capitalize",
    borderRadius: "0px",
    justifyContent: "start",
    fontSize: "14px",
    color: "rgba(0, 0, 0, 0.54)",
    "&:hover": {
      color: "white",
      backgroundColor: "rgba(63, 14, 64, 1)",
    },
  },
  end: {
    display: "flex",
    justifyContent: "center",
  },
  btn1: {
    backgroundColor: "rgba(63, 14, 64, 1)",
    fontFamily: "'Poppins', sans-serif",
    color: "white",
    marginTop: "2%",
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#3F0E40",
          }}
        >
          <Typography className={classes.logo1}>KEYWORDS</Typography>
          {/* <h5>Hello</h5> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Paper component="form" className={classes.root1}>
                {/* <IconButton className={classes.iconButton} aria-label="menu">
                  <MenuIcon />
                </IconButton> */}
                <InputBase
                  className={classes.input}
                  // placeholder="Search Google Maps"
                  // inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  SUBMIT
                </IconButton>
                {/* <Divider className={classes.divider} orientation="vertical" /> */}
                <IconButton
                  color="primary"
                  className={classes.iconButton}
                  aria-label="directions"
                >
                  <ArrowRightAltIcon />{" "}
                </IconButton>
              </Paper>
            </div>
            <div>
              <Avatar
                style={{
                  backgroundColor: "white",
                  color: "rgba(63, 14, 64, 1)",
                  marginLeft: "10px",
                }}
              >
                A
              </Avatar>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        {/* <h2>Hello</h2> */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={image14}
            style={{
              // width: "52.6px",
              // height: "52.6px",
              // marginTop: "2.55%",
              borderRadius: "100%",
              alignItems: "center",
            }}
          ></img>
          <h3 className={classes.logo}>TermMonitor</h3>
        </div>
        <Divider />
        <Button startIcon={<HomeIcon />} className={classes.btn}>
          Add Keywords
        </Button>
        <Button startIcon={<GroupIcon />} className={classes.btn}>
          Matches{" "}
        </Button>
        <Button startIcon={<IoCalendarClearOutline />} className={classes.btn}>
          Manage sources{" "}
        </Button>
        <Button startIcon={<IoCalendarClearOutline />} className={classes.btn}>
          Integration
        </Button>
        <Button startIcon={<IoCalendarClearOutline />} className={classes.btn}>
          Alerts{" "}
        </Button>
        <Button
          startIcon={<StarIcon />}
          endIcon={<ArrowDropDownIcon />}
          className={classes.btn}
        >
          Settings
        </Button>
        <Button className={classes.btn}>Billings</Button>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Home />
        <Table />
        <Container className={classes.end}>
          <Button className={classes.btn1} variant="contained" size="large">
            Save Filters
          </Button>{" "}
        </Container>
      </main>
    </div>
  );
}
