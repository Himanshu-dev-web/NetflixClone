import React from 'react'
import { UserAuth } from '../Context/AuthContext'
import { Link , Navigate} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const  {user } = UserAuth();
    if(!user){
        return  <Navigate to='/' />
    }
    else{
        return children
    }
}

export default ProtectedRoute
