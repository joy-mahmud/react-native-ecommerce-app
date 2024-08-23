import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
const userType = createContext()
const UserContext = ({ children }) => {
    const [userId, setUserId] = useState('')
    useEffect(() => {
        const fetchUser = async () => {
            const token = await AsyncStorage.getItem('authToken')
            const decodedToken = jwtDecode(token)
            const userId = decodedToken.userId
            setUserId(userId)
        }
        fetchUser()
    }, [])
    return (
        <userType.Provider value={{ userId, setUserId }}>
            {
                children
            }
        </userType.Provider>
    )
}

export {userType,UserContext}