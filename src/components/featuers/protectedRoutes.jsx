import { Outlet } from 'react-router'
import { Navigate } from 'react-router'
import Layout from '../layout'
import GlobalModal from './globalModal'




const ProtectedRoutes = () => {
    // const auth = useSelector((state : RootState)=>state.auth)
    const auth = true
    if ( false){
        return <Navigate to="/login" /> 
    }

    
  return   <Layout> <GlobalModal/> <Outlet/>  </Layout>
  
  
}

export default ProtectedRoutes
