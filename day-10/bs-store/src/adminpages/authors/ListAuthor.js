import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import AddAuthor from "./AddAuthor";
import AddIcon from "@mui/icons-material/Add";
import { Button, ButtonGroup, Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ListAuthor() {
  const { authors, setAuthors } = React.useContext(AppContext);
  const navigate = useNavigate();

  const removeAuthor = (id) => {
    // let arr = [];

    // for(const author of authors){
    //     if(author.id!==id){
    //       arr.push(author);
    //     }
    // }
    // setAuthors(arr);

    // ACTION
    const url = `http://localhost:8080/api/v1/authors/${id}`;
    console.log(url);

    axios
      .delete(url)
      .then((resp) => resp.data)
      .then((resp) => {
        let afterRemove = authors.filter((author) => author.id !== id);
        setAuthors(afterRemove);
      })
      .catch((err) => console.error("DELETE ERROR", err));
  };

  const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
  };

  const fab = {
    color: "primary",
    sx: fabStyle,
    icon: <AddIcon />,
    label: "Add",
  };

  return (
    <div>
      Author List {authors.length}
      <Fab
        sx={fab.sx}
        aria-label={fab.label}
        onClick={() => navigate("/admin/authors/add")}
        color={fab.color}
      >
        {fab.icon}
      </Fab>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">First name</TableCell>
            <TableCell align="left">Last namee</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="center">?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {authors.map((author) => (
            <TableRow
              key={author.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{author.id}</TableCell>
              <TableCell align="left">{author.firstName}</TableCell>
              <TableCell align="left">{author.lastName}</TableCell>
              <TableCell align="left">{author.email}</TableCell>
              <TableCell align="center">
                <ButtonGroup orientation="vertical" >
                  <Button>Edit</Button>
                  <Button onClick={() => removeAuthor(author.id)}  >Remove</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}
