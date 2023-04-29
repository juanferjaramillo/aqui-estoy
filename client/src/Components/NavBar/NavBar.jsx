import image from "../../img/aquiestoy.jpg";
import { useLocation } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import { useState } from "react";
import {
  CardMedia,
  Box,
  Button,
  Grid,
  Hidden,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";

export default function NavBar(props) {
  const {user} = useSelector((state) => state.auth);
  const {id} = user;
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = () => {
    setShowLogin(true);
  };
  const handleMouseLeave = () => {
    setShowLogin(false);
  };
  const handleClick = (event) => {
    // ...
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (name) => {
    handleMenuClose();
    // ...
  };

  return (
    <Box
      sx={{
        background: "#F6F6F6",
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Box>
            <Hidden smDown>
              <Button variant="text" name="about" onClick={handleClick}>
                Acerca de
              </Button>
              <Button variant="text" name="calendar" onClick={handleClick}>
                Calendario
              </Button>
            </Hidden>
            <Hidden mdUp>
              <IconButton onClick={handleMenuClick}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <MenuItem
                  name="about"
                  onClick={() => handleMenuItemClick("about")}
                >
                  Acerca de
                </MenuItem>
                <MenuItem
                  name="calendar"
                  onClick={() => handleMenuItemClick("calendar")}
                >
                  Calendario
                </MenuItem>
              </Menu>
            </Hidden>
          </Box>
        </Grid>
        <Grid item>
          <CardMedia
            component="img"
            style={{ height: "20%", width: "20%" }}
            image={image}
            alt="aquiEstoy"
          />
        </Grid>
        <Grid item>
          <Box>
            {location.pathname !== `/profile/${id}` && (
              <Button name="session" onClick={handleMouseEnter}>
                Iniciar sesión
              </Button>
            )}
            {showLogin && <LoginForm handleMouseLeave={handleMouseLeave} />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
