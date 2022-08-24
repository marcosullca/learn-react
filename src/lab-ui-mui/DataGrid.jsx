import { Typography, Box } from '@mui/material'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
export default function DataGrid1() {

    //  El valor por defecto es 100px
    //  las COLUMNAS no pueden tener menos de 50px de ANCHO (minWidth)
    //  Si a minWidth le das un valor menor a 100px, se mantendra con 100px
    //  si a width le das un valor menor a 50px, se mantendra con 50px
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'daa',
            headerName: 'Last name',
            minWidth: 150,
            editable: true,
            flex: 1.5,
            renderCell: ({ row }) => (
                <Typography gutterBottom variant="body1" sx={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                    {row.lastName}
                </Typography>
            )
        },
        {
            field: 'allData',
            headerName: 'Todos los Datos',
            //type: 'number',
            minWidth: 100,
            flex: 1,
            editable: true,
            renderCell: ({ row }) => (
                <Box display="flex" justifyContent="center" flexDirection="column" sx={{ whiteSpace: 'normal' }}>
                    <Typography gutterBottom variant="body2">
                        {row.lastName}
                    </Typography>
                    {/* <Typography gutterBottom variant="body2">
                        {row.age}
                    </Typography> */}
                    <Typography gutterBottom variant="body2">
                        {row.firstName}
                    </Typography>
                </Box>
            )

        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'LLLLLLLLAAAAAAAANNNNNNNIIIIIIIISSSSSSSSTTTTTTTTTTLLLLLLLLAAAAAAAAT', firstName: 'Cersei LLLLLLLL AAAAAAAA NNNNNNN IIIIIIII SSSSSSSS TTTTTTTTTT', age: 44 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    return (
        <React.Fragment>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    rowHeight={150}
                />
            </Box>
        </React.Fragment>
    )
}
