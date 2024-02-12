import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/listing":
        setValue(0);
        break;
      case "/profile":
        setValue(2);
        break;
    }
  }, [location.pathname]);

  //Add dialog popup for sell items which will spawn a form to add a listing

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <BottomNavigation
          sx={{ bgcolor: "#A8D0E6" }}
          showLabels
          value={value}
          onChange={(e, newValue) =>
            newValue !== 1 ? setValue(newValue) : null
          }>
          <BottomNavigationAction
            sx={{ "*": { color: value === 0 ? "#f76c6c" : "#24305E" } }}
            component={Link}
            to="/listings"
            label="Home"
            icon={<iconify-icon icon="ant-design:home-twotone" />}
          />
          <BottomNavigationAction
            sx={{ "*": { color: "#24305E" } }}
            label="Sell"
            icon={<iconify-icon icon="ant-design:plus-circle-twotone" />}
          />
          <BottomNavigationAction
            sx={{ "*": { color: value === 2 ? "#f76c6c" : "#24305E" } }}
            component={Link}
            to="/profile"
            label="Profile"
            icon={<iconify-icon icon="ant-design:user-outlined" />}
          />
        </BottomNavigation>
      </Box>
    </>
  );
}
