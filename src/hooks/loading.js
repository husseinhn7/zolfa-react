import { useSelector } from "react-redux";
import { setLoading } from "../store/loadingSlice";
import { useDispatch } from "react-redux";



const useLoading = () =>{
    const dispatch = useDispatch()
    // const selector = useSelector((state)=>state.loading)
    const setIsLoading = (open) =>{
        dispatch(setLoading(open))
    }
    return [setIsLoading]
}


export default useLoading