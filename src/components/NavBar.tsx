import React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const NavBar = () => {
  return (
    <div className="border-b border-gray-200 p-2 flex items-center justify-start w-full">
      <Typography variant="h5" className="">
        Come In
      </Typography>
      <Button
        sx={{ marginLeft: "auto", marginRight: "0.5rem" }}
        variant="contained"
      >
        Entrar
      </Button>
      <Button variant="outlined">Cadastrar</Button>
    </div>
  );
};

export default NavBar;
