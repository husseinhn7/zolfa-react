import { useDispatch } from "react-redux";
import { setModal, setOpenModal } from "../store/modalSlice";

 
const useModal = () =>{
    const dispatch = useDispatch()
    const openModal = (state ) =>{
        dispatch(setModal(state))
    }
    const closeModal = () =>{
            dispatch(setOpenModal(false))
    }
    return [openModal, closeModal]
}


export default useModal