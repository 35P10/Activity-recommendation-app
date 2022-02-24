export const getRandomActivity = async() => {

    try{
      const resp = await fetch('https://www.boredapi.com/api/activity/');
      return await resp.json();
    }
    catch (error) {
    //manejo del error
    console.error(error);
    }
};
