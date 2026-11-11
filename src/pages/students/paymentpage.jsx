import "./studentpage.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Paymentpage() {
  const [payment, setpayment] = useState([]);
  const backendURL3 = process.env.REACT_APP_API_backendURL3;
  useEffect(() => {
    axios
      .get(backendURL3)
      .then((response) => {
        setpayment(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  return (
    <>
      <div className="table">
        <h1>payment</h1>{" "}
        <button className="add-student-button"> +Add payment</button>
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
                <TableCell align="right">totalpaid</TableCell>
                <TableCell align="right">subjectname</TableCell>
                <TableCell align="right">code</TableCell>
                <TableCell align="right">type</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {payment.map((studentpayment) => (
                <TableRow key={studentpayment.ID}>
                  <TableCell component="th" scope="row">
                    {studentpayment.ID}
                  </TableCell>
                  <TableCell align="right">{studentpayment.name}</TableCell>
                  <TableCell align="right">
                    {studentpayment.totalpaid}
                  </TableCell>
                  <TableCell align="right">
                    {studentpayment.subjectname}
                  </TableCell>
                  <TableCell align="right">{studentpayment.code}</TableCell>
                  <TableCell align="right">{studentpayment.type}</TableCell>
                  <TableCell align="right">{studentpayment.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
