
export const getfilterActivity = async(type,accessibility,participants,price) => {
    try {
        const resp = await fetch(`https://www.boredapi.com/api/activity?type=${type}&accessibility=${accessibility}&participants=${participants}`);
        return await resp.json();
    }
    catch (error) {
        console.error(error);
    }
}
