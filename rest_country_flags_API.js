// Use the rest countires API url -> https://restcountries.com/v3.1/all and display all the country flags in the console


var api = new XMLHttpRequest ();

api.open("GET","https://restcountries.com/v3.1/all");
api.send();

api.onload = function (){

    var result = JSON.parse(api.response);

    let countryFlags;
    let countryNames;
    let countryRegs;
    let countrySubRegs;
    let countryPops;

    for (var i=0; i<=result.length; i++) {

      // console.log (result[i] )
      
      countryNames =result[i].name.common,
      countryRegs =result[i].region
      countrySubRegs =result[i].subregion
      countryPops =result[i].population
      countryFlags = result[i].flags.png;
      
      // console.log(`Country Name :${countryNames}, Region:${countryRegs} , Sub-Region:${countrySubRegs}, Population :${countryPops} , Flag:${countryFlags}`);
      

      var countryDetails = {
        countryNames : result[i].name.common,
        Region        :result[i].region,
        Sub_Region    :result[i].subregion,
        Population    : result[i].population,
        Flag          : result[i].flags.png,
        }
        console.log(countryDetails);
    }
}

