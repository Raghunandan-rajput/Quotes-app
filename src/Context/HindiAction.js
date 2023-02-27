export const Hindi_Data =async()=>{
    const response = await fetch(`https://hindi-jokes-api.onrender.com/jokes?api_key=63a957ee69109a265394bdc04e5d`);
    const data = await response.json()
    return data;
}