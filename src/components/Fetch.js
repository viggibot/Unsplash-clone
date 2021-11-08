import {useState, useEffect} from "react";

const useFetch = (url) => {
    
    const [fetchData, setData] = useState(null);
    const [isPending,setStatus] = useState(true);
    const [error,setError] = useState(null);

    const [dataLength, setLength] = useState(null);
    
    useEffect(() => {
        fetch(url)
        .then((res) => {
            if(!res.ok)
            {
                throw Error('Could not fetch data');
            }
            return res.json()
        })
        .then((data) => {
            setData(data);
            setLength(data.length);
            setStatus(false);
            setError(null);
        })
        .catch((err) => {
            setStatus(false);
            setError(err.message);
        })
    },[url]);

    return {fetchData, isPending, error, dataLength};

}

export default useFetch;