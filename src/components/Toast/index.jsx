import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const Toast = (type, mess) => {
    switch (type) {
        case 'success': {
            toast.success(mess, { autoClose: 1000, theme: "colored" })
            break
        }
        case 'error': {
            toast.error(mess, { autoClose: 1000, theme: "colored" })
            break
        }
        case 'info': {
            toast.info(mess, { autoClose: 1000, theme: "colored" })
            break
        }
        default: break
    }

}

export default Toast
