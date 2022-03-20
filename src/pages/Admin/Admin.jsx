/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteProduct,
	fetchProducts,
} from '../../store/actions/productActions';
const columns = [
	{
		id: 'productName',
		label: 'Name',
		minWidth: 50,
		maxWidth: 10,
		align: 'center',
	},

	{
		id: 'image',
		label: 'Image',
		minWidth: 50,
		align: 'center',
	},
	{
		id: 'description',
		label: 'Desc',
		minWidth: 50,
		align: 'center',
		maxWidth: '100px',
		overflow: 'hidden',
	},
	{
		id: 'type',
		label: 'Type',
		minWidth: 50,
		align: 'center',
	},
	{
		id: 'price',
		label: 'Price',
		minWidth: 50,
		align: 'center',
		format: (value) => value.toFixed(2),
	},
	{
		label: 'edit',
		align: 'center',
		maxWidth: 75,
	},
	{
		label: 'del',
		align: 'center',
		minWidth: 50,
	},
];
const Admin = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((store) => store.auth);
	const { products } = useSelector((store) => store.product);

	useEffect(() => {
		if (user && user.email !== 'kadyrkulov.980@gmail.com') {
			navigate('/');
		}
	}, [user]);
	useEffect(() => {
		dispatch(fetchProducts());
	}, []);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(4);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const handleDeleteProduct = (id) => {
		dispatch(deleteProduct(id));
	};

	return (
		<>
			<Paper sx={{ width: '100%' }}>
				<TableContainer sx={{ maxHeight: 640 }}>
					<Table stickyHeader aria-label='sticky table'>
						<TableHead>
							{/* <TableRow>
              <TableCell align="center" colSpan={2}>
                Admin
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Panel
              </TableCell>
            </TableRow> */}
							<TableRow>
								{columns.map((column) => (
									<TableCell
										key={column.id}
										align={column.align}
										style={{
											top: 0,
											minWidth: column.minWidth,
											maxWidth: column.maxWidth,
											overflow: column.overflow,
										}}
									>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{products &&
								products
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row) => {
										return (
											<TableRow
												hover
												role='checkbox'
												tabIndex={-1}
												key={row.id}
											>
												{columns.map((column) => {
													const value = row[column.id];
													if (column.label === 'edit') {
														return (
															<TableCell
																key={column.id}
																align={column.align}
																style={{ maxWidth: 30 }}
															>
																<Button
																	onClick={() =>
																		navigate(`/editproduct/${row.id}`)
																	}
																	variant='outlined'
																	color='warning'
																>
																	edit
																</Button>
															</TableCell>
														);
													}
													if (column.label === 'del') {
														return (
															<TableCell
																key={column.id}
																align={column.align}
																style={{ maxWidth: 30 }}
															>
																<Button
																	variant='outlined'
																	color='secondary'
																	onClick={() => {
																		handleDeleteProduct(row.id);
																	}}
																>
																	del
																</Button>
															</TableCell>
														);
													}
													return (
														<TableCell
															key={column.id}
															align={column.align}
															style={{
																maxWidth: column.maxWidth,
																overflow: column.overflow,
															}}
														>
															{column.format && typeof value === 'number' ? (
																column.format(value)
															) : column.id === 'image' ? (
																<img width={100} src={value} alt='pic' />
															) : (
																value
															)}
														</TableCell>
													);
												})}
											</TableRow>
										);
									})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component='div'
					count={products?.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
			<Button onClick={() => navigate('/addproduct')} sx={{ margin: '0 auto' }}>
				Add
			</Button>
		</>
	);
};

export default Admin;
