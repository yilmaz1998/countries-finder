import React, { useState } from 'react'
import { useEffect } from 'react'


const Countries = () => {
    const [countries, setCountires] = useState([])

    useEffect(() => {
        fetch("https://api.sampleapis.com/countries/countries/")
        .then((res) => {
            if(res.ok) {
                return res.json()
            } else {
                throw new Error("Failed to fetch")
            }
        })
        .then((data) => {
            const sortedCountries = data.sort((a, b) => 
            a.name.localeCompare(b.name)
        );
           setCountires(sortedCountries)
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        })
    }, [])

  return (
    <div>
        {countries.length > 0 ? (
                countries.map((country, index) => (
                    <div key={index}>
                        <h4>{country.name}</h4>
                    </div>
                ))
            ) : (
                <p>No countries found.</p>
            )}
    </div>
  )
}

export default Countries