
export const getfilterActivity = async(type,accessibility,participants,price) => {
    try {
        const url = `http://www.boredapi.com/api/activity?type=${type}&accessibility=${accessibility}&participants=${participants}$price=${price}`;
        console.log(url);
        const resp = await fetch(`http://www.boredapi.com/api/activity?type=${type}&accessibility=${accessibility}&participants=${participants}`);
        return await resp.json();
    }
    catch (error) {
        console.error(error);
    }
}
