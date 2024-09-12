import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import DeliveryBoyImage from "../../../../assets/images/stores-logo/delivery-boy.svg";
import  Box  from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

const SetLocation = () => {

  // popover location
  const [location, setLocation] = useState(null);

  const handleLocationClick = (event) => {
    setLocation(event.currentTarget);
  };

  const handleLocationClose = () => {
    setLocation(null);
  };

  const openLoc = Boolean(location);
  const id = openLoc ? "simple-popover" : undefined;

  return (
    <div>
      <Box
        sx={{ display: { xs: "none", sm: "flex" } }}
        className="mx-5 flex items-center text-gray-500 hover:text-green text-sm cursor-pointer "
        onClick={handleLocationClick}
      >
        <PlaceOutlinedIcon sx={{ fontSize: "20px", mr: "8px" }} />
        <span className="">Set A Location</span>
      </Box>

      <Popover
        id={id}
        open={openLoc}
        location={location}
        // onClose={handleLocationClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <div className="flex justify-between m-10">
          <Typography>Add Your Location</Typography>
          <CloseIcon
            sx={{ fontSize: "20px" }}
            onClick={handleLocationClose}
            className="fw-bold ml-5 hover:text-red-500"
          />
        </div>
        <div className="mx-2">
          <input
            type="search"
            name="search"
            placeholder="Search for area, location more"
            className="border w-full p-2 relative rounded-lg"
          />
          <SearchIcon
            sx={{ fontSize: "30px" }}
            className="absolute right-4 top-16"
          />
        </div>
        <img src={DeliveryBoyImage} alt="Delivery Boy" className="my-10" />
      </Popover>
    </div>
  );
};

export default SetLocation;
