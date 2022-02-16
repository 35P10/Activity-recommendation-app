import React, { useState } from 'react';
import { getActivityByKey } from '../helpers/getActivityByKey';

  export const SearchByKeyBar = ({setActivity}) => {
  const [inputKey, setinputKey] = useState(3943506);

  const handleKeyChange = ({target}) =>{
      setinputKey(target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault(); //evitar que la pagina se actualize al presionar Enter en el input
      getActivityByKey(inputKey)
          .then(setActivity)    
  };
  //    <form className='search-key-form' onSubmit={handleSubmit}>
  return (
    <form className='search-key-form' onSubmit={handleSubmit}>
        <input
                type = "number"
                value={inputKey}
                onChange={handleKeyChange}
        />
        <button className='submit-button' type='submit'><span id='icon-arrow'></span></button>  
    </form>
  )
}
