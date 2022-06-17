import React from 'react';
import {
  Typography,
  Box,
  Stack,
  Pagination,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Paper,
  Grid,
  InputBase,
} from '@mui/material';

const columns = [
  { id: 'name', label: 'Name' },
  { id: 'country', label: 'Country', align: 'right', },
  { id: 'alpha_two_code', label: 'Code', align: 'right', },
  { id: 'state_province', label: 'State Province', align: 'right', },
];

function createData(name, country, alpha_two_code, state_province) {
  return { name, country, alpha_two_code, state_province };
}

const UniversityList = ({ universityList }) => {
  const rows = universityList.map((university) => createData(university.name, university.country, university.alpha_two_code, university['state-province']))
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }
  const [searched, setSearched] = React.useState("");
  const handleChangeSearch = (event, newSearch) => {
    setSearched(newSearch)
  }

  return (
    <Box m={1} p={1}>
      <Grid container p={1} m={1}>
        <Grid item xs={8}>
          <Typography variant="h5" color="primary">
            University Search
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <InputBase
            value={searched}
            onChange={handleChangeSearch}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Grid>

      </Grid>
      <Paper sx={{ minWidth: 275 }}>
        <TableContainer >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack direction="row" justifyContent="end" m={1} p={1} spacing={1}>
          <Pagination
            count={Math.round((rows.length + 5) / rowsPerPage)}
            color="primary"
            page={page}
            defaultPage={1}
            onChange={handleChangePage}
            showFirstButton
            showLastButton
          />
        </Stack>
      </Paper>
    </Box>
  );
};

export default UniversityList;
