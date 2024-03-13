import { useEffect } from 'react'
import './test.css'

export default function Test() {
    const url = 'https://kassal.app/api/v1/products'
    
    function fetchMatvareData() {
        fetch(url, {
            headers: {
                Authorization: `Bearer ${'N6SXLALwne8esRvbd83F1tTR76PpojpaOUL3Ws5W'}`
            }
        })
        .then(res => res.json())
        .then((data) => console.log(data))
    }

    useEffect(() => {
        fetchMatvareData()
    }, [])

    return(
        <h1>{url}</h1>
    )
}