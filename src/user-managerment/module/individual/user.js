import { FcGoogle } from "react-icons/fc"
import { BsApple } from "react-icons/bs"
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../layouts/PageWrapper";
import { PrimaryButton } from "../components/Button";
import { PasswordInput, TextInput } from "../components/Input";
import { AuthContext } from "../../../context/AuthContext";
import { LoginCall } from "../../../serivce/apiCalls";
import { toast } from "react-toastify";

const LoginUser  = () =>{

   // DATA INITIALIZATION
   const navigate = useNavigate()


   // STATES
   const [users, setUsers] = useState({
      emailAddress: "",
      password: "",
   })

   const {user, isfetching, dispatch, error: loginError} = useContext(AuthContext);

   // HANDLERS
    const  handleChange = (e)=>{
      const {name, value} = e.target;
      setUsers({
         ...users,
         [name]: value
      })
   }
  
   const handleSubmit = (e)=>{
      e.preventDefault();
      LoginCall({
         loginRequest: {
            email: users.emailAddress,
            password: users.password
         }
      },dispatch);

      return user;
   }

   useEffect(()=>{
      console.log(user, isfetching)
   }, [user, isfetching])

   useEffect(()=>{
      if(loginError)
      toast.error("Login was unSuccessfull")
   }, [loginError])
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
            className="flex flex-col gap-5 w-full h-full"
            onSubmit={handleSubmit}>

                  {/* email input container */}
                  <label className="flex flex-col gap-2 w-full">

                     {/* label text */}
                     <span className="font-normal text-xs text-black">
                        Email Address
                     </span>

                     {/* input field */}
                     <TextInput
                     name={"emailAddress"}
                     value={users.emailAddress}
                     onChange={handleChange}
                     placeholderText={"Enter email address"} />
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
                     value={users.password}
                     onChange={handleChange}
                     placeholderText={"Enter your password"} />

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
                        loading={isfetching}
                        text={"Log in"}  
                        disabled={isfetching}/>
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
                        className="font-semibold text-sm text-[#3A0CA3]">
                           {" Create one."}
                        </span>
                     </h4>
                  </div>
            </form>
         </div>
      </PageWrapper>
   )
}
export default LoginUser;