import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);



    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = (country,flag) => {
        const newVisitedCountry = [...visitedCountries, country];
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedCountries(newVisitedCountry);
        setVisitedFlag(newVisitedFlag);
    }

    // const handleVisitedFlag = flag =>{
    //     const newVisitedFlag = [...visitedFlag, flag];
    //     setVisitedFlag(newVisitedFlag);
    // }
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <div>
                <h5>Visited Countries : {
                visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>

            </div>
            <div>
                {
                    visitedFlag.map((flag ,ind)=><img key={ind} src={flag}></img>)
                }
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        // handleVisitedFlag={handleVisitedFlag}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;