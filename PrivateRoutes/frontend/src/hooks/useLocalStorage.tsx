export const useLocalStorage = () => {
  const setLocalItem = ( key: string , value: unknown ) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };


  const getLocalItem = (key: string) => {
    try {
      const item = localStorage.getItem(key);
      return item? JSON.parse(item) : undefined;
    } catch (err) {
      console.log(err);
    }
  }


  const removeLocalItem = (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.log(err);
    }
  } 

  return { setLocalItem  , getLocalItem , removeLocalItem};
};
