const  loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
const displayCountries =  countries => {
    console.log(countries);
    const allCountriesHTML = countries.map(country => )
}

const getCountryHTML = country => {
    return `
       <div>
          <h2>${country.name.common}</h2>
       </div>
    
    `
}

loadCountries();