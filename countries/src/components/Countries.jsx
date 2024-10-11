import React, { useState } from 'react';
import data from '../data';
import Header from './Header'

const Countries = () => {
    const [countries] = useState(data);

    const sortedCountries = countries.sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    return (
        <div>
            <Header/>
            <div className='container'>
            <div className='row'>
            {sortedCountries.length > 0 ? (
                sortedCountries.map((country) => (
                    <div className="col-md-4 p-1" key={country.id}>
                        <button 
                            type="button" 
                            className="country btn btn-secondary" 
                            data-bs-toggle="modal" 
                            data-bs-target={`#id${country.id}`}
                        >
                            <h4>{country.name}</h4>
                            <img src={country.media.flag}/>
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
                                <div class="modal-dialog modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title" id="staticBackdropLabel">{country.name} ({country.abbreviation})</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                        <h4>Capital: {country.capital}</h4>
                                        <h4>Population: {country.population ? country.population.toLocaleString() : 'N/A'}</h4>
                                        <img className='ortho' src={country.media.orthographic}/>
                                        <h4>Currency: {country.currency}</h4>
                                        <h4>Phone Code: {country.phone}</h4>
                                        <h4>Emblem: <img className='ortho' src={country.media.emblem}/></h4>
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
        </div>
        </div>
    );
}

export default Countries;

