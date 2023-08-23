import { Formik } from "formik";
import { useEffect, useState } from "react";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { BASIC_REGISTRATION } from "../../../../serivce/apiRoutes.service";
import { BackButton, PrimaryButton } from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import FormError from "../../components/Global/FormError";
import { PasswordInput, TextInput } from "../../components/Input";
import { isEmpty } from "../../helpers/isEmpty";
import { getFromLocalStorage, saveToLocalStorage } from "../../helpers/localStorageMethods";
import { hasDigit, hasLowerCase, hasUpperCase } from "../../helpers/testForCase";
import useMakeReq from "../../hooks/Global/useMakeReq";
import PageWrapper from "../../layouts/PageWrapper";

const RegistrationIndividual = ()=>{

    // STATES
    const [email, setEmail] = useState("")


    // DATA INITIALIZATION
    const navigate = useNavigate()
    const {
        loading,
        data,
        makePostRequest,
        isSuccessful
    } = useMakeReq()


    // SIDE EFFECTS
    useEffect(()=>{
        if(isSuccessful!==true && !(isEmpty(data))) {
            toast.error(data.message)
        } else if(isSuccessful===true && !(isEmpty(data))) {
            toast.success(data.message)
            saveToLocalStorage("userId", data.data)
            saveToLocalStorage("individualEmail", email)
            navigate("/individual-verification-page")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, isSuccessful])

    useEffect(()=>{
        const userId = getFromLocalStorage("userId")
        if(!(isEmpty(userId))) {
            toast.info("Complete your registration!")
            navigate("/individual-profile")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(

        <Formik
        enableReinitialize
        initialValues={{
            individualEmail: "",
            password: ""
        }}
        onSubmit={(values) => {
            setEmail(values.individualEmail)
            makePostRequest(
                BASIC_REGISTRATION, 
                {
                    basicRegistration: {
                        email: values.individualEmail,
                        password: values.password
                    }
                }, 
            );
        }}
        validationSchema={
            Yup.object({
                individualEmail: Yup.string().email("invalid email address").required("Email is required"),
                password: Yup.string()
                .required('password is required')
                .min(8, 'password must be at least 8 characters long')
                .matches(/\d/, 'password must contain a number')
                .matches(/[a-z]/, 'password must contain a lowercase letter')
                .matches(/[A-Z]/, 'password must contain an uppercase letter')
            })
        }>
            {({
                values,
                isValid,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
            }) => {
                return(
                    <PageWrapper>

                        {/* container */}
                        <div className="w-full h-full flex flex-col gap-10 px-4 py-10">

                            {/* Back Button */}
                            <BackButton />

                            {/* caption */}
                            <p className="text-black font-bold text-2xl">
                                Sign Up as a Individual
                            </p>

                            {/* form */}
                            <form
                            className="flex flex-col gap-5 w-full h-full"
                            onSubmit={handleSubmit}>

                                {/* Company's email address container */}
                                <label className="flex flex-col gap-2 w-full">

                                    {/* label text */}
                                    <span
                                    className="font-normal text-xs text-black">
                                        Email
                                    </span>

                                    {/* input field */}
                                    <TextInput
                                    name={"individualEmail"}
                                    value={values.individualEmail}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholderText={"Enter email address"} />
                                    {
                                        touched.individualEmail && 
                                        errors.individualEmail && (
                                            <FormError
                                            text={errors.individualEmail} />
                                        )
                                    }
                                </label>

                                {/* password container */}
                                <label className="flex flex-col gap-2 w-full">

                                    {/* label text */}
                                    <span
                                    className="font-normal text-xs text-black">
                                        Password
                                    </span>

                                    {/* input field */}
                                    <PasswordInput
                                    name={"password"}
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholderText={"Enter your password"} />
                                    {
                                        touched.password && 
                                        errors.password && (
                                            <FormError
                                            text={errors.password} />
                                        )
                                    }

                                    {/* password strength */}
                                    <div className="w-full flex flex-col gap-3 mt-2">

                                        {/* characters contained */}
                                        <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
                                            <Checkbox
                                            disabled={true}
                                            value={values.password.length>=8} />
                                            Contains at least 8+ Characters
                                        </label>

                                        {/* digits contained */}
                                        <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
                                            <Checkbox
                                            disabled={true}
                                            value={hasDigit(values.password)} />
                                            Contains at least 1 number
                                        </label>

                                        {/* includes cases */}
                                        <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
                                            <Checkbox
                                            disabled={true}
                                            value={hasLowerCase(values.password) && hasUpperCase(values.password)} />
                                            Contains both lower (a-z) and upper case letters (A - Z)
                                        </label>
                                    </div>
                                </label>

                                {/* container */}
                                <div className="flex w-full flex-col mt-12 gap-3 pb-10">

                                    {/* terms and condition */}
                                    <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
                                        <Checkbox />
                                        I agree with the <span className="font-semibold text-sm text-[#141217]">Terms</span> and <span className="font-semibold text-sm text-[#141217]">Privacy Policy.</span> 
                                    </label>

                                    {/* container */}
                                    <div className="flex w-full flex-col mt-auto items-center gap-10">

                                        {/* signup button */}
                                        <div className='w-full flex flex-col items-stretch'>
                                        <PrimaryButton
                                            onClick={handleSubmit}
                                            disabled={!isValid || loading}
                                            loading={loading}
                                            type="submit"
                                            text={"Sign up"} />
                                        </div>

                                        {/* google and apple sign in */}
                                        <div className="flex flex-col gap-4 w-full items-center justify-center">

                                            {/* title */}
                                            <p className="font-semibold text-sm text-[#8D98AF] text-center">
                                                Or Sign Up with
                                            </p>

                                            {/* icons */}
                                            <div className="flex gap-8 items-center">

                                                {/* google */}
                                                <span
                                                className="h-[56px] w-[56px] border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-2xl cursor-pointer hover:bg-gray-200">
                                                    <FcGoogle
                                                    className="text-2xl" />
                                                </span>

                                                {/* apple */}
                                                <span
                                                className="h-[56px] w-[56px] border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-2xl cursor-pointer hover:bg-gray-200">
                                                    <BsApple
                                                    className="text-2xl" />
                                                </span>
                                            </div>
                                        </div>

                                        {/* Create new account */}
                                        <h4 className="text-black font-normal text-sm">
                                            I have an account?
                                            <span 
                                            onClick={()=>navigate("/loginIndividual")}
                                            className="font-semibold text-sm text-[#3A0CA3]">
                                                {" Log in."}
                                            </span>
                                        </h4>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </PageWrapper>
                )
            }}
        </Formik>
    )
}

export default RegistrationIndividual