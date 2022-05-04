import { useMemo } from "react"
import { useQuery } from "react-query"
import { useTable } from "react-table"

const Request = () => {
    // const fetchData = async () => await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json()

    const tableData = useMemo(() => [
        {
            col1: "Test 1",
            col2: "Test 2",
        },
        {
            col1: "Test 3",
            col2: "Test 4",

        },
    ], [])

    const columns = useMemo(() => [
        {
            Header: 'Column 1',
            accessor: 'col1',
        },
        {
            Header: 'Column 2',
            accessor: 'col2',
        },
    ], [])

    const tableInstance = useTable({ columns, data: tableData })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    // const { isLoading, error, data } = useQuery('apiRes', fetchData)

    // console.log(data)

    // if (isLoading) {
    //     return <p>Loading</p>
    // }
    // if (error) {
    //     return <p>Error: {error.message}</p>
    // }
    return (
        <>
            <table {...getTableProps()}>
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
        </>
    )
}

export default Request