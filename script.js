const amountEle =document.querySelector(".amount");
const convertedAmount=document.querySelector(".converted-amount");
const fromCurrency=document.querySelector(".from-currency");
const toCurrency=document.querySelector(".to-currency");
const result=document.querySelector(".result");
const container=document.querySelector(".container");

const countries = [
    { name: "United Arab Emirates", currency: "AED" },
    { name: "Afghanistan", currency: "AFN" },
    { name: "Albania", currency: "ALL" },
    { name: "Armenia", currency: "AMD" },
    { name: "Netherlands", currency: "ANG" },
    { name: "Angola", currency: "AOA" },
    { name: "Argentina", currency: "ARS" },
    { name: "Australia", currency: "AUD" },
    { name: "Aruba", currency: "AWG" },
    { name: "Azerbaijan", currency: "AZN" },
    { name: "Bosnia and Herzegovina", currency: "BAM" },
    { name: "Barbados", currency: "BBD" },
    { name: "Bangladesh", currency: "BDT" },
    { name: "Bulgaria", currency: "BGN" },
    { name: "Bahrain", currency: "BHD" },
    { name: "Burundi", currency: "BIF" },
    { name: "Bermuda", currency: "BMD" },
    { name: "Brunei", currency: "BND" },
    { name: "Bolivia", currency: "BOB" },
    { name: "Brazil", currency: "BRL" },
    { name: "Bahamas", currency: "BSD" },
    { name: "Bhutan", currency: "BTN" },
    { name: "Botswana", currency: "BWP" },
    { name: "Belarus", currency: "BYN" },
    { name: "Belize", currency: "BZD" },
    { name: "Canada", currency: "CAD" },
    { name: "Democratic Republic of the Congo", currency: "CDF" },
    { name: "Switzerland", currency: "CHF" },
    { name: "Chile", currency: "CLP" },
    { name: "China", currency: "CNY" },
    { name: "Colombia", currency: "COP" },
    { name: "Costa Rica", currency: "CRC" },
    { name: "Cuba", currency: "CUP" },
    { name: "Cape Verde", currency: "CVE" },
    { name: "Czech Republic", currency: "CZK" },
    { name: "Djibouti", currency: "DJF" },
    { name: "Denmark", currency: "DKK" },
    { name: "Dominican Republic", currency: "DOP" },
    { name: "Algeria", currency: "DZD" },
    { name: "Egypt", currency: "EGP" },
    { name: "Eritrea", currency: "ERN" },
    { name: "Ethiopia", currency: "ETB" },
    { name: "Eurozone", currency: "EUR" },
    { name: "Fiji", currency: "FJD" },
    { name: "Falkland Islands", currency: "FKP" },
    { name: "United Kingdom", currency: "GBP" },
    { name: "Georgia", currency: "GEL" },
    { name: "Guernsey", currency: "GGP" },
    { name: "Ghana", currency: "GHS" },
    { name: "Gibraltar", currency: "GIP" },
    { name: "Gambia", currency: "GMD" },
    { name: "Guinea", currency: "GNF" },
    { name: "Guatemala", currency: "GTQ" },
    { name: "Guyana", currency: "GYD" },
    { name: "Hong Kong", currency: "HKD" },
    { name: "Honduras", currency: "HNL" },
    { name: "Croatia", currency: "HRK" },
    { name: "Haiti", currency: "HTG" },
    { name: "Hungary", currency: "HUF" },
    { name: "Indonesia", currency: "IDR" },
    { name: "Israel", currency: "ILS" },
    { name: "Isle of Man", currency: "IMP" },
    { name: "India", currency: "INR" },
    { name: "Iraq", currency: "IQD" },
    { name: "Iran", currency: "IRR" },
    { name: "Iceland", currency: "ISK" },
    { name: "Jersey", currency: "JEP" },
    { name: "Jamaica", currency: "JMD" },
    { name: "Jordan", currency: "JOD" },
    { name: "Japan", currency: "JPY" },
    { name: "Kenya", currency: "KES" },
    { name: "Kyrgyzstan", currency: "KGS" },
    { name: "Cambodia", currency: "KHR" },
    { name: "Kiribati", currency: "KID" },
    { name: "Comoros", currency: "KMF" },
    { name: "North Korea", currency: "KPW" },
    { name: "South Korea", currency: "KRW" },
    { name: "Kuwait", currency: "KWD" },
    { name: "Cayman Islands", currency: "KYD" },
    { name: "Kazakhstan", currency: "KZT" },
    { name: "Laos", currency: "LAK" },
    { name: "Lebanon", currency: "LBP" },
    { name: "Sri Lanka", currency: "LKR" },
    { name: "Liberia", currency: "LRD" },
    { name: "Lesotho", currency: "LSL" },
    { name: "Libya", currency: "LYD" },
    { name: "Morocco", currency: "MAD" },
    { name: "Moldova", currency: "MDL" },
    { name: "Madagascar", currency: "MGA" },
    { name: "North Macedonia", currency: "MKD" },
    { name: "Myanmar", currency: "MMK" },
    { name: "Mongolia", currency: "MNT" },
    { name: "Macau", currency: "MOP" },
    { name: "Mauritania", currency: "MRU" },
    { name: "Mauritius", currency: "MUR" },
    { name: "Maldives", currency: "MVR" },
    { name: "Malawi", currency: "MWK" },
    { name: "Mexico", currency: "MXN" },
    { name: "Malaysia", currency: "MYR" },
    { name: "Mozambique", currency: "MZN" },
    { name: "Namibia", currency: "NAD" },
    { name: "Nigeria", currency: "NGN" },
    { name: "Nicaragua", currency: "NIO" },
    { name: "Norway", currency: "NOK" },
    { name: "Nepal", currency: "NPR" },
    { name: "New Zealand", currency: "NZD" },
    { name: "Oman", currency: "OMR" },
    { name: "Panama", currency: "PAB" },
    { name: "Peru", currency: "PEN" },
    { name: "Papua New Guinea", currency: "PGK" },
    { name: "Philippines", currency: "PHP" },
    { name: "Pakistan", currency: "PKR" },
    { name: "Poland", currency: "PLN" },
    { name: "Paraguay", currency: "PYG" },
    { name: "Qatar", currency: "QAR" },
    { name: "Romania", currency: "RON" },
    { name: "Serbia", currency: "RSD" },
    { name: "Russia", currency: "RUB" },
    { name: "Rwanda", currency: "RWF" },
    { name: "Saudi Arabia", currency: "SAR" },
    { name: "Solomon Islands", currency: "SBD" },
    { name: "Seychelles", currency: "SCR" },
    { name: "Sudan", currency: "SDG" },
    { name: "Sweden", currency: "SEK" },
    { name: "Singapore", currency: "SGD" },
    { name: "Saint Helena", currency: "SHP" },
    { name: "Sierra Leone", currency: "SLL" },
    { name: "Somalia", currency: "SOS" },
    { name: "Suriname", currency: "SRD" },
    { name: "South Sudan", currency: "SSP" },
    { name: "São Tomé and Príncipe", currency: "STN" },
    { name: "El Salvador", currency: "SVC" },
    { name: "Syria", currency: "SYP" },
    { name: "Eswatini", currency: "SZL" },
    { name: "Thailand", currency: "THB" },
    { name: "Tajikistan", currency: "TJS" },
    { name: "Turkmenistan", currency: "TMT" },
    { name: "Tunisia", currency: "TND" },
    { name: "Tonga", currency: "TOP" },
    { name: "Turkey", currency: "TRY" },
    { name: "Trinidad and Tobago", currency: "TTD" },
    { name: "Taiwan", currency: "TWD" },
    { name: "Tanzania", currency: "TZS" },
    { name: "Ukraine", currency: "UAH" },
    { name: "Uganda", currency: "UGX" },
    { name: "United States", currency: "USD" },
    { name: "Uruguay", currency: "UYU" },
    { name: "Uzbekistan", currency: "UZS" },
    { name: "Venezuela", currency: "VES" },
    { name: "Vietnam", currency: "VND" },
    { name: "Vanuatu", currency: "VUV" },
    { name: "Samoa", currency: "WST" },
    { name: "Central African CFA franc", currency: "XAF" },
    { name: "East Caribbean dollar", currency: "XCD" },
    { name: "West African CFA franc", currency: "XOF" },
    { name: "CFP franc", currency: "XPF" },
    { name: "Yemeni rial", currency: "YER" },
    { name: "South African rand", currency: "ZAR" },
    { name: "Zambian kwacha", currency: "ZMW" },
    { name: "Zimbabwean dollar", currency: "ZWL" }
];

//append currency in options
countries.forEach(country=>{
    const opt1 = document.createElement('option');
    const opt2 = document.createElement('option');
    opt1.value=opt2.value=country.currency;
    opt1.textContent=opt2.textContent=`${country.currency} (${country.name})`;
    fromCurrency.appendChild(opt1);
    toCurrency.appendChild(opt2);
    toCurrency.value="INR";
    fromCurrency.value="USD";
})

async function getConverted(){
    const amount = parseFloat(amountEle.value);
    const fromCurr= fromCurrency.value;
    const toCurr=toCurrency.value;
    result.innerHTML=`<h2>Fetching ........</h2>`
    try{
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurr}`);

        const data = await response.json();
        // console.log(data);

        const conversionRate = data.rates[toCurr];
        const convertedAmo = amount*conversionRate;
        if(typeof conversionRate==='undefined'){
            conversionRate.value="";
            result.innerHTML=`<h2>Exchange rate is not available!!!</h2>`;
        }
        else{
            convertedAmount.value = convertedAmo;
            result.innerHTML=`<h2>${amount} ${fromCurr} = ${convertedAmo} ${toCurr}</h2>`;
        }
    }
    catch{
        container.innerHTML=`<h2>Error while Fetching!!!</h2>`
    }
    
}
// getConverted();
amountEle.addEventListener('input', getConverted);
fromCurrency.addEventListener('change',getConverted);
toCurrency.addEventListener('change', getConverted);
window.addEventListener('load',getConverted);