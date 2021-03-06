import { useMemo } from "react"
import { useTable } from "react-table"


const Table = ({ data }) => {
    // The columns to be supplied to useTable. 
    // Accessor should match the respective property in the data from the API.
    // Unfortunately haven't found a good way to hide the "Message" column when its not needed
    const columns = useMemo(() => [
        {
            Header: 'User ID',
            accessor: 'userId',
        },
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: "Message",
            accessor: "body",
        },
    ], [])

    const tableInstance = useTable({ columns, data: data })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <div className="table-wrapper">

            <h2>User Data</h2>

            <table className="table" {...getTableProps()}>

                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th{...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr{...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>

            </table>

        </div>
    )
}

export default Table