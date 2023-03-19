import AsyncStorage from '@react-native-async-storage/async-storage';

const setItem= async (key:string,value:unknown)=>{
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
    return 'ok'
  }catch (e) {
    throw e
  }
}
const getItem = async (key:string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  }catch (e) {
    throw e
  }
}
const removeItem = async (key:string) => {
  try {
    await AsyncStorage.removeItem(key)
    return 'ok'
  }catch (e) {
    throw e
  }

}
export const storage={
  setItem,
  getItem,
  removeItem
}