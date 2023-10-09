import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
    const { alpha3Code } = useParams();

    // Find the country with the matching alpha3Code
    const country = countries.find((c) => c.alpha3Code === alpha3Code);

    if (!country) {
        return <div>Country not found.</div>;
    }

    return (
        <div className="col-7">
            <h1>{country.name}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                        {country.area} km<sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map((border) => (
                                    <li key={border}>
                                        <a href={`/${border}`}>{border}</a>
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CountryDetails;