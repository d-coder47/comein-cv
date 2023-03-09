import React, { useState } from "react";

import { Avatar, Box, Typography, Icon } from "@mui/material";
import { ThumbUpOffAlt, ThumbUp, Star, StarOutline } from "@mui/icons-material";

import event1 from "../assets/img/event1.jpg";
import avatar from "../assets/img/avatar.jpg";

const CustomCard = () => {
  const [showTitle, setshowTitle] = useState(false);

  return (
    <div
      className="m-8 max-w-xs"
      onMouseEnter={() => setshowTitle(true)}
      onMouseLeave={() => setshowTitle(false)}
    >
      <Box
        sx={{
          maxWidth: 345,
          display: "flex",
          flexDirection: "column",
          marginBottom: "1rem",
        }}
      >
        <img
          src={event1}
          alt="event1"
          className=":hover cursor-pointer rounded-sm"
        />
        <Typography
          sx={{
            color: showTitle ? "#fff" : "transparent",
            marginLeft: "1rem",
            marginTop: "-2rem",
            fontWeight: "bold",
            width: "fit-content",
            "&:hover": {
              textDecoration: "underline",
              cursor: "pointer",
            },
          }}
        >
          Título do Evento
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
        <Avatar alt="avatar" src={avatar} sx={{ width: 18, height: 18 }} />
        <Typography
          fontWeight="bold"
          fontSize="0.9rem"
          sx={{
            "&:hover": {
              textDecoration: "underline",
              cursor: "pointer",
            },
          }}
        >
          Nome Publicador
        </Typography>

        <Box sx={{ display: "flex", marginLeft: "auto" }}>
          <ThumbUpOffAlt
            sx={{ display: "flex", width: 18, height: 18, cursor: "pointer" }}
          />
          {/* <ThumbUp sx={{ display: "flex", width: 18, height: 18 }} /> */}
          <Star
            sx={{ display: "flex", width: 18, height: 18, cursor: "pointer" }}
          />
          {/* <StarOutline sx={{ display: "flex", width: 18, height: 18 }} /> */}
        </Box>
      </Box>
    </div>
  );
};

export default CustomCard;
