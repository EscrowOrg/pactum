import { Formik } from "formik";
import { useContext, useEffect } from "react";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { AuthContext } from "../../../context/AuthContext";
import { LoginCall } from "../../../serivce/apiCalls";
import { PrimaryButton } from "../components/Button";
import FormError from "../components/Global/FormError";
import { PasswordInput, TextInput } from "../components/Input";
import PageWrapper from "../layouts/PageWrapper";
import { AUTH_POST_VALIDATE_DEVICE_TOKEN } from "../../../serivce/apiRoutes.service";




const LoginUser  = () =>{

   // DATA INITIALIZATION
   const navigate = useNavigate()
   const location = useLocation();
   const from = location.state?.from || "/home";
   const {
      user, 
      isfetching, 
      dispatch, 
      error: loginError
   } = useContext(AuthContext);

  

   // SIDE EFFECTS
   useEffect(()=>{
      if(user?.success===true) {
         navigate(from, { replace: true });
      }
      
   }, [user])

   useEffect(()=>{
      if(loginError) {
         toast.error("Login was unSuccessfull")
      }
   }, [loginError])

   return(

         <Formik
         enableReinitialize
         initialValues={{
            emailAddress: "",
            password: ""
         }}
         onSubmit={(values) => {
            LoginCall(values,dispatch);
         }}
         validationSchema={
            Yup.object({
               emailAddress: Yup.string().email("invalid email address").required("Email is required"),
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
            dirty,
            touched,
            isValid,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            field,
         }) => {
            return(
               <PageWrapper>
                  <div className="w-full h-full flex flex-col gap-8 px-4 py-10">

                     {/* caption */}
                     <div className="w-full flex flex-col gap-2">
                        <p className="text-black font-bold text-2xl">
                           Welcome Back!
                        </p>

                        <p className="text-sm font-normal text-[#645B75]">
                           Log in to access your account.
                        </p>
                     </div>

                     {/* form */}
                     <form
                     className="flex flex-col gap-5 w-full h-full">

                           {/* email input container */}
                           <label className="flex flex-col gap-2 w-full">

                              {/* label text */}
                              <span className="font-normal text-xs text-black">
                                 Email Address
                              </span>

                              {/* input field */}
                              <TextInput
                              name={"emailAddress"}
                              value={values.emailAddress}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholderText={"Enter email address"} />
                              {
                                 touched.emailAddress && 
                                 errors.emailAddress && (
                                    <FormError 
                                    text={errors.emailAddress} />
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
                              onBlur={handleBlur}
                              placeholderText={"Enter your password"} />
                              {
                                    touched.password && 
                                    errors.password && (
                                       <FormError 
                                       text={errors.password} />
                                    )
                              }

                              {/* bottom label text */}
                              <span 
                              onClick={()=>navigate("/forgot-password")} 
                              className="font-normal text-sm text-[#3A0CA3]">
                                 Forgot password?
                              </span>
                           </label>


                           {/* container */}
                           <div className="flex w-full flex-col mt-auto items-center gap-10">

                              {/* Login button */}
                              <div className='w-full flex flex-col items-stretch'>
                                 <PrimaryButton
                                 type="submit"
                                 onClick={handleSubmit}
                                 loading={isfetching}
                                 text={"Log in"}  
                                 disabled={isfetching || isSubmitting || !isValid}/>
                              </div>

                              {/* google and apple sign in */}
                              <div className="flex flex-col gap-4 w-full items-center justify-center">

                                 {/* title */}
                                 <p className="font-semibold text-sm text-[#8D98AF] text-center">
                                    Or Sign In with
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
                                 Don’t have account?
                                 <span 
                                 onClick={()=>navigate("/onboradings")}
                                 className="font-semibold text-sm text-[#3A0CA3] cursor-pointer">
                                    {" Create one."}
                                 </span>
                              </h4>
                           </div>
                     </form>
                  </div>
               </PageWrapper>
            )
         }}
      </Formik>
   )
}
export default LoginUser;