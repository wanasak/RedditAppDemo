import { AsyncStorage } from 'react-native'

const TOKEN_KEY = '@RedditClient:token'
const EXPIRE_KEY = '@RedditClient:expire'

export const clearToken = async() => {
    AsyncStorage.removeItem(EXPIRE_KEY)
    await AsyncStorage.removeItem(TOKEN_KEY)
}

export const setToken = async() => {
    AsyncStorage.setItem(EXPIRE_KEY, Date.now().toString())
    await AsyncStorage.setItem(TOKEN_KEY, token)
}

export const getToken = async() => await AsyncStorage.getItem(TOKEN_KEY)

export const tokenHasExpire = async() => {
    const expiration = await AsyncStorage.getItem(EXPIRE_KEY)
    if (!expiration) return true

    const difference = Date.now() - Number(expiration)
    return difference > 600000
}