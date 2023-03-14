import { Snackbar, Alert } from "@mui/material"
import { useApi } from "../context/ContextApi"
import { LocalPizza } from "@mui/icons-material"

export default function Notification() {

    const { open, handleClose } = useApi()  


    return (
        <Snackbar  open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert icon={<LocalPizza/>} sx={{ width: '100%' }}>
                Haz agregado una Pizza!!!
            </Alert>
        </Snackbar>


    )
}