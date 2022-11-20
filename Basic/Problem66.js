function cityName(city) {
    if (city.length >= 3 && city.substring(0, 3) === 'Los' || city.substring(0, 3) === 'New') {
        return city;
    }
    else {
        return "__"
    }
}
console.log(cityName("Newyork"));
console.log(cityName("Los Angelas"));
console.log(cityName("Dhaka"));
