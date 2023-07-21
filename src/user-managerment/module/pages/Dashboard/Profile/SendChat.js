import { Formik } from "formik";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { AUTH_SEND_CHAT } from "../../../../../serivce/apiRoutes.service";
import { getUserId } from "../../../../../serivce/cookie.service";
import { PrimaryButton } from "../../../components/Button";
import FormError from "../../../components/Global/FormError";
import { isEmpty } from "../../../helpers/isEmpty";
import useMakeReq from "../../../hooks/Global/useMakeReq";

const SendChat = ({closeDrawer}) => {

  // DATA INITIALIZATION
  const userId = getUserId()
  const {
    loading,
    makeAuthPostReq,
    isSuccessful,
    data
  } = useMakeReq()

  // SIDE EFFECT
  useEffect(()=>{
    if(isSuccessful && !isEmpty(data)) {
      toast.success(data?.message || "Message sent!")
      closeDrawer()
    }
  }, [isSuccessful])

  return(
  <Formik
  enableReinitialize
  initialValues={{
    message: "",
  }}
  onSubmit={(values) => {
    makeAuthPostReq(AUTH_SEND_CHAT, {
      userId:userId,
      message: values.message
    })
  }}
  validationSchema={
    Yup.object({
        message: Yup.string().min(9, "you text has to be longer").required("Required"),
    })
  }>
  {({
    values,
    touched,
    isValid,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    field,
  }) => {
    return (
      // send a chat container
      <form className="w-full h-full flex flex-col">

        {/* review field */}
        <div className="w-full h-full">
          <textarea
            name={"message"}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={20}
            cols={30}
            className="w-full outline-0 border-0pt-2 text-xs leading-loose"
            placeholder="Message"
          ></textarea>
          {
            touched.message && 
            errors.message && (
              <FormError 
              text={errors.message} />
            )
          }
        </div>

        {/* button */}
        <div className="flex flex-col items-stretch w-full">
          <PrimaryButton
            loading={loading}
            onClick={handleSubmit}
            disabled={loading || isSubmitting || !isValid}
            height="h-14"
            text={"Send Message"}
          />
        </div>
      </form>
    );
    }}
    </Formik>
    )
};

export default SendChat;
