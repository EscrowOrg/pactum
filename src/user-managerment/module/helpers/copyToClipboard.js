import { toast } from "react-toastify";

export const copyToClipBoard = async (text, functionToCall) => {

    const successMessage = "Copied Successfully!"
    try {
        await navigator.clipboard.writeText(text);
        toast.success(successMessage)
        console.log(successMessage)
        functionToCall && functionToCall()
    } catch (error) {
        console.log("Failed to copy Text! ", error)
    }
};