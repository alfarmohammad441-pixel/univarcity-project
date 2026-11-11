import { useState, useEffect } from "react";
import "./studentpage.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Search } from "lucide-react";
import axios from "axios";

export default function Subject() {
  const [subject, setsubject] = useState([]);
  const backendURL = process.env.REACT_APP_API_backendURL;
  useEffect(() => {
    axios
      .get(backendURL)
      .then((response) => response.data)
      .then((data) => {
        setsubject(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  return (
    <>
      <div className="table">
        <h1>Subject</h1>

        <TableContainer component={Paper}></TableContainer>
        <div className="search">
          <Search size={30} />
          <input type="text" placeholder="Search..." />
        </div>
        <button className="studentbutton">filter</button>
        <div className="student">
          <Table className="student-table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">name</TableCell>
                <TableCell align="right">code</TableCell>
                <TableCell align="right">credithours</TableCell>
                <TableCell align="right">Semester</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {subject.map((subjecttable) => (
                <TableRow key={subjecttable.ID}>
                  <TableCell component="th" scope="row">
                    {subjecttable.ID}
                  </TableCell>
                  <TableCell align="right">{subjecttable.name}</TableCell>
                  <TableCell align="right">
                    {subjecttable.credithours}
                  </TableCell>
                  <TableCell align="right">{subjecttable.code}</TableCell>
                  <TableCell align="right">{subjecttable.Semester}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
