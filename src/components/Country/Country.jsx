import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {
    // console.log(country)
    const {name, flags,population, area ,cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited=()=>{
        setVisited(true);
    }
    console.log(handleVisitedCountries)
    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h3>Name : {name?.common} </h3>
            <img src={flags?.png} alt="" /> 
            <p>Population : {population}</p> 
            <p>Area : {area} </p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={()=>handleVisitedCountries(country, country.flags.png)}>Mark as visited</button>
            {/* <button onClick={()=>handleVisitedFlag(country.flags.png)}>Add Flag</button> */}
            <button onClick={handleVisited}>{visited ?'Visited':'Going'}</button>
            {visited ? 'I have visited this country':'I want to visit'}
        </div>
    );
};

export default Country;