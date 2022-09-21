const  loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
const displayCountries =  countries => {
    console.log(countries);
    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(allCountriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
}

// const getCountryHTML = country => {
//     //  option  1 
//    const {name, flags} = country;
//     return `
//        <div>
//           <h2>${country.name.common}</h2>
//           <img src="${country.flags.png}">
//        </div>
    
//     `
// }
const getCountryHTML = (country) => {
    //  orginal
    // distrutaring
    const {name,flags,area,region} = country;
    return `
       <div>
          <h2>${name.common}</h2>
          <img src="${flags.png}">
          <p>Area: ${area}</p>
          <p>Region: ${region}</p>

       </div>
    
    `
}

loadCountries();