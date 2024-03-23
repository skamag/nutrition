import { useEffect, useState } from 'react'
import './test.css'

export default function Test() {
    const url = 'https://kassal.app/api/v1/products'
    const [matvarer, setMatvarer] = useState([])
    
    function fetchMatvareData() {
        fetch(url, {
            headers: {
                Authorization: `Bearer ${'N6SXLALwne8esRvbd83F1tTR76PpojpaOUL3Ws5W'}`
            }
        })
        .then(res => res.json())
        .then((data) => {
            let nyMatvare = data

            setMatvarer(matvarer => [...matvarer, nyMatvare])
            // console.log(matvarer.data[1].nutrition)
        })
    }

    useEffect(() => {
        fetchMatvareData()
    }, [])

    // return(
    //     <div>
    //         {matvarer.map((matvare) => {
    //             return(
    //                 console.log(matvarer[0].data[0].nutrition)
    //                 // <h1>{matvare}</h1>
    //             )
    //         })}
    //     </div>
    // )
}