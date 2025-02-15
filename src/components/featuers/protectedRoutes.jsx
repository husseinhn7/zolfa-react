import { Outlet } from 'react-router'
import { Navigate } from 'react-router'
import Layout from '../layout'
import { useSelector } from 'react-redux'


const ProtectedRoutes = () => {
    const auth = useSelector((state)=>state.auth)
    if ( !auth.isAuth){
        return <Navigate to="/login" /> 
    }
    
  return   <Layout>  <Outlet/>  </Layout>
  
  
}

export default ProtectedRoutes
