import React, { useState } from 'react';
import data from '../data';

const Countries = () => {
    const [countries] = useState(data);

    const sortedCountries = countries.sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    return (
        <div>
            <h1>Countries</h1>
            {sortedCountries.length > 0 ? (
                sortedCountries.map((country) => (
                    <div key={country.id}>
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            data-bs-toggle="modal" 
                            data-bs-target={`#id${country.id}`}
                        >
                            {country.name}
                        </button>
                        <div>
                            <div 
                                className="modal fade" 
                                id={`id${country.id}`} 
                                data-bs-backdrop="static" 
                                data-bs-keyboard="false" 
                                tabIndex="-1" 
                                aria-labelledby="staticBackdropLabel" 
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{country.name}</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                        <h1>Population: {country.population ? country.population.toLocaleString() : 'N/A'}</h1>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No countries found.</p>
            )}
        </div>
    );
}

export default Countries;

