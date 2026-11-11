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

export default function Exams() {
  const [exam, setexam] = useState([]);
  const backendURL4 = process.env.REACT_APP_API_backendURL4;
  useEffect(() => {
    axios
      .get(backendURL4)
      .then((response) => response.data)
      .then((data) => {
        setexam(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  return (
    <>
      <div className="table">
        <h1>Exams</h1>
        <button className="add-student-button"> +Add Exam</button>

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
                <TableCell>name</TableCell>
                <TableCell align="right">subjectname</TableCell>
                <TableCell align="right">subjectcode</TableCell>
                <TableCell align="right">email</TableCell>
                <TableCell align="right">specialname</TableCell>
                <TableCell align="right">code</TableCell>
                <TableCell align="right">examdate</TableCell>
                <TableCell align="right">starttime</TableCell>
                <TableCell align="right">endtime</TableCell>
                <TableCell align="right">status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {exam.map((studentexams) => (
                <TableRow key={studentexams.ID}>
                  <TableCell component="th" scope="row">
                    {studentexams.name}
                  </TableCell>
                  <TableCell align="right">
                    {studentexams.subjectname}
                  </TableCell>
                  <TableCell align="right">
                    {studentexams.subjectcode}
                  </TableCell>
                  <TableCell align="right">{studentexams.email}</TableCell>
                  <TableCell align="right">
                    {studentexams.specialname}
                  </TableCell>
                  <TableCell align="right">{studentexams.code}</TableCell>
                  <TableCell align="right">{studentexams.examdate}</TableCell>
                  <TableCell align="right">{studentexams.starttime}</TableCell>
                  <TableCell align="right">{studentexams.endtime}</TableCell>
                  <TableCell align="right">{studentexams.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
