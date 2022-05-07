import { useQuery } from "react-query"
import Table from "./Table"
const axios = require('axios')


const Request = () => {
    const fetchData = async () => {
        const apiRes = await axios.get('https://jsonplaceholder.typicode.com/posts/2')
        console.log(apiRes)
        return [apiRes.data]
    }

    const { isLoading, error, data } = useQuery('apiRes', fetchData)


    if (isLoading) {
        return <p>Loading</p>
    }
    if (error) {
        return <p>Error: {error.message}</p>
    }

    console.log(data)
    return (
        <>
            <Table data={data}></Table>
        </>
    )
}

export default Request