'use client';

import customersService from '@/services/customersService';
import { Appointment } from '@/types/customers/models';
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Toolbar,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';

type CustomersTableFilter = {
  currentPage: number;
  pageSize: number;
  searchQuery?: string;
};

const CustomersTable = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [totalPages, setTotalPages] = useState<number>();
  const [filter, setFilter] = useState<CustomersTableFilter>({ currentPage: 0, pageSize: 10, searchQuery: '' });

  useEffect(() => {
    getAppointments();
  }, [filter]);

  const getAppointments = async () => {
    const { items, page, total_pages } = await customersService.getAppointments(
      filter.currentPage + 1,
      filter.pageSize,
      filter.searchQuery
    );

    setAppointments(items);
    setTotalPages(total_pages);

    return items;
  };

  return (
    <Stack sx={{ px: { xs: 4, md: 10, lg: 16 }, pt: 2 }}>
      <Paper sx={{ width: '100%' }}>
        <Toolbar
          sx={{
            px: { xs: 2, sm: 4 }
          }}
        >
          <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="h4" component="div">
            Personal info of customers
          </Typography>
          <TextField
            size={'small'}
            variant="outlined"
            label="Search..."
            value={filter.searchQuery}
            onChange={e => setFilter(filter => ({ ...filter, currentPage: 0, searchQuery: e.target.value }))}
          />
        </Toolbar>
        <TableContainer>
          <Table sx={{ minWidth: 500 }}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Full name</TableCell>
                <TableCell align="center">Phone number</TableCell>
                <TableCell align="center">Service/ Message</TableCell>
                <TableCell align="center">Date/Time</TableCell>
                <TableCell align="center">Number of people</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map(apt => (
                <TableRow key={apt.appo_id}>
                  <TableCell align="center">{apt.name}</TableCell>
                  <TableCell align="center">{apt.phone}</TableCell>
                  <TableCell align="center">
                    {apt.service_id} {apt.message}
                  </TableCell>
                  <TableCell align="center">
                    {apt.date.toString()} {apt.time}
                  </TableCell>
                  <TableCell align="center">{apt.people_amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  count={100}
                  rowsPerPage={filter.pageSize}
                  page={filter.currentPage}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page'
                    },
                    native: true
                  }}
                  onPageChange={(e, currentPage) => setFilter(filter => ({ ...filter, currentPage }))}
                  onRowsPerPageChange={e => setFilter(filter => ({ ...filter, currentPage: 0, pageSize: Number(e.target.value) }))}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </Stack>
  );
};

export default CustomersTable;
