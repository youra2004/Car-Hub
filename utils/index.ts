import { CarProps, FilterProps } from "@/types"

export const fetchCars = async (filter: FilterProps) =>{
    const {manufacturer, model, year, fuel, limit} = filter
    const headers = {
        'X-RapidAPI-Key': '2ee78cafbfmshbcbd7b8fa5321cdp1c2648jsna9b3b547b9a8',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    
    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?year=${year}&make=${manufacturer}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {method: "GET", headers: headers, })
    
    const data = await res.json()

    return data
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1; 
    const ageFactor = 0.05; 
  
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', "hrjavascript-mastery");
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
}