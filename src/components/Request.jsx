import { useState } from "react"
import { useQuery } from "react-query"
import Table from "./Table"
const axios = require('axios')
const baseUrl = "https://jsonplaceholder.typicode.com"

const Request = () => {
    const [resourceUrl, setResourceUrl] = useState('/posts')
    //Fetch data using axios.
    const fetchData = async () => {
        const apiRes = await axios.get(`${baseUrl}${resourceUrl}`)
        // console.log(apiRes)
        return apiRes.data
    }

    //Fetch data using the fetchData function above. Refetch whenever resourceUrl changes.
    const { isLoading, error, data } = useQuery(resourceUrl, fetchData)

    // Return html when data is being loaded
    if (isLoading) {
        return <p>Loading</p>
    }
    // Return the error message if any errors where to occur.
    if (error) {
        return <p>Error: {error.message}</p>
    }

    // console.log(data)
    return (
        <>
            {/* Buttons to set the resourceUrl. */}
            <div className="button-wrapper">
                <button className="standard-button" onClick={() => (setResourceUrl('/posts'))}>Fetch posts</button>
                <button className="standard-button" onClick={() => (setResourceUrl('/albums'))}>Fetch albums</button>
                <button className="standard-button" onClick={() => (setResourceUrl('/todos'))}>Fetch todos</button>
            </div>
            {/* Pass the data as a prop to table */}
            <Table data={data}></Table>
        </>
    )
}

export default Request