import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';

export default function Profile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeAccessToken = () => {
    localStorage.removeItem("AccessToken");
    navigate("/signin");
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            // sx={{ ml: 2 }}
          >
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
            {/* <Avatar >H</Avatar> */}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <Link to="profile">
          <MenuItem>
             Profile
          </MenuItem>
        </Link>
        <Link to="/register">
          <MenuItem>
             My account
          </MenuItem>
        </Link>
        <Divider />
        <MenuItem>Add account</MenuItem>
        <Link to="/admin/">
          <MenuItem>Admin</MenuItem>
        </Link>
        <MenuItem onClick={removeAccessToken}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
