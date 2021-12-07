import {types} from '../types/types';

export const setError = (error) => ({ 
   type: types.uiSetError,
   payload: error
});

export const remuveError = () => ({ 
    type: types.uiRemuveError
   
 });


 export const startLoading  = () => ({ 
    type: types.uiStartLoading
   
 });


 export const finishLoading  = () => ({ 
    type: types.uiFinishLoading
   
 });

