import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import "./DashboardMP.css";
import {TableCell, TableRow, Table, TableHead, TableContainer, TableBody} from "@mui/material";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db.collection("contacts").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({
          ...doc.data(), //spread operator
          key: doc.id, // `id` given to us by Firebase
        });
      });
      setPosts(getPostsFromFirebase);
      setLoading(false);
    });
  

    // return cleanup function
    return () => subscriber();
  }, [loading]); // empty dependencies array => useEffect only called once

  if (loading) {
    return <h2>loading firebase data...</h2>;
  }

  return (
    
    <div className="table-container">
      <h1>Answers:</h1>
      <TableContainer>
      <Table sx={{ minWidth: 750}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>No.</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Student Number</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Contact Number</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Current College</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Current Year</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Classification of Concern</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Nature of Concern</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>About Concern</TableCell>
            <TableCell sx={{ fontWeight: 700}}>Concern</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>   
        {posts.map((row, index) => (
          
          <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
             <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.Email}</TableCell>
              <TableCell>{row.StudentNumber}</TableCell>
              <TableCell>{row.ContactNumber}</TableCell>
              <TableCell>{row.CurrentCollege}</TableCell>
              <TableCell>{row.CurrentYear}</TableCell>
              <TableCell>{row.ClassificationConcern}</TableCell>
              <TableCell>{row.NatureConcern}</TableCell>
              <TableCell>{row.AboutConcern}</TableCell>
              <TableCell>{row.Concern}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
)}
export default Dashboard;

