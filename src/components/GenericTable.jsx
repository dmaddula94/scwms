import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

const GenericTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  // Assuming all rows have the same structure
  const headers = Object.keys(data[0]).filter(key => key !== 'location').concat(['Latitude', 'Longitude']);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Full':
        return 'red';
      case 'Half Full':
        return 'orange';
      case 'Empty':
        return 'green';
      default:
        return 'black';
    }
  };

  const getCell = (header, row, cellIndex) => {
    if (header === 'Latitude') {
      return <TableCell key={cellIndex}>{row.location.latitude}</TableCell>;
    } else if (header === 'Longitude') {
      return <TableCell key={cellIndex}>{row.location.longitude}</TableCell>;
    } else if (header === 'status') {
      return <TableCell key={cellIndex} style={{ color: getStatusColor(row[header]) }}>{row[header]}</TableCell>;
    } else {
      return <TableCell key={cellIndex}>{row[header]}</TableCell>;
    }
  };

  const renderTableHead = () => {
    return (
      <TableHead>
        <TableRow>
          {headers.map((header, index) => (
            <TableCell key={index}>{header.charAt(0).toUpperCase() + header.slice(1)}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const renderTableBody = () => {
    return (
      <TableBody>
        {data
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {headers.map((header, cellIndex) => (
                getCell(header, row, cellIndex)
              ))}
            </TableRow>
          ))}
      </TableBody>
    );
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          {renderTableHead()}
          {renderTableBody()}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[15, 25, 50]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default GenericTable;
