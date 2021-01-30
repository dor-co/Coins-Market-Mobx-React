const webApiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

class CoinsService {
    
    get = async () => {
        const options = {
            method: "GET",
        }
     const request = new Request(webApiUrl, options);
     const response = await fetch(request);
     return response.json();
    }
}

export default CoinsService;
