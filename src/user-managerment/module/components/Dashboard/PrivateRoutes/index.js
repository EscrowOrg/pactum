import { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../../../../context/AuthContext'
import { isEmpty } from '../../../helpers/isEmpty'

const PrivateRoutes = () => {

    // DATA INITIALIZATION
    const {user} = useContext(AuthContext)
    // let auth = {'token':true}

    useEffect(()=>{
        console.log(user)
    }, [user])

    return (
        user ? <Outlet/> : <Navigate to='/loginIndividual'/>
    )
}

export default PrivateRoutes