export const getActivityByKey = async(key) => {
    try{
      const resp = await fetch(`https://www.boredapi.com/api/activity?key=${key}`);
      return await resp.json();
    }
    catch (error) {
    //manejo del error
    console.error(error);
    }
};
