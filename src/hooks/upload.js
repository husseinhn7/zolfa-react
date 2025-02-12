import { usePostApiMutation } from "../store/apiSlice"





const useUpload =  () =>{
    const [postApi] = usePostApiMutation()
    const upload = async (file) =>{
    const form = new FormData()
    form.append("file", file)
    const response = await postApi({url:"/upload/single", isFormData :true, body : form})
    if (response.data) return response.data.data.file.path

    return response.error
}
 return [upload]
} 

export default useUpload