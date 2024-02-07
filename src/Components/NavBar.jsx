import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [value, setValue] = useState(0);

  // const location = useLocation();

  // useEffect(() => {
  //   switch (location.pathname) {
  //     case "/":
  //       setValue(0);
  //       break;
  //     case "/":
  //       setValue(1);
  //       break;
  //     case "/":
  //       setValue(2);
  //       break;
  //     default:
  //       setValue(2);
  //   }
  // }, [location.pathname]);

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
          onChange={(e, newValue) => setValue(newValue)}>
          <BottomNavigationAction
            sx={{ "*": { color: value === 0 ? "#f76c6c" : "#24305E" } }}
            // component={Link}
            // to="/"
            label="Home"
            icon={<iconify-icon icon="ant-design:home-twotone" />}
          />
          <BottomNavigationAction
            sx={{ "*": { color: value === 1 ? "#f76c6c" : "#24305E" } }}
            // component={Link}
            // to="/"
            label="Sell"
            icon={<iconify-icon icon="ant-design:plus-circle-twotone" />}
          />
          <BottomNavigationAction
            sx={{ "*": { color: value === 2 ? "#f76c6c" : "#24305E" } }}
            // component={Link}
            // to="/"
            label="Profile"
            icon={<iconify-icon icon="ant-design:user-outlined" />}
          />
        </BottomNavigation>
      </Box>
    </>
  );
}
