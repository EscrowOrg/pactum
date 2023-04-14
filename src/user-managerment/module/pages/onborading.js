import React from "react";
import PageWrapper from "../layouts/PageWrapper";
import RegisterAsCard from "../components/RegisterAsCard";
import { useNavigate } from "react-router";

const Onborading = ()=>{

    // DATA INITIALIZATION
    const navigate = useNavigate()

    return(
        <PageWrapper>
            <div className="w-full h-full flex flex-col gap-8 px-4 py-10">

                {/* first container */}
                <div className="w-full flex flex-col gap-10">

                    {/* title and description */}
                    <div className="w-full flex flex-col gap-2">

                        {/* title */}
                        <p className="text-black font-bold text-2xl">
                            Create an account
                        </p>

                        {/* description */}
                        <p className="font-normal text-sm text-[#645B75]">
                            Select either of these to get started.
                        </p>
                    </div>

                    {/* card containers */}
                    <div className="flex flex-col w-full gap-6">

                        {/* vendor signup */}
                        <RegisterAsCard
                        iconPath={"/images/onboarding/vendor.png"}
                        url="/vendon-register"
                        title={"I am a vendor"}
                        subTitle={"A vendor user is capable of creating several users and is typical for registered businesses."} />

                        {/* individual signup */}
                        <RegisterAsCard
                        iconPath={"/images/onboarding/individual.png"}
                        url={"/individual-register"}
                        title={"I am an individual user"}
                        subTitle={"An individual user account is most preferred for personal use."} />
                    </div>
                </div>

                {/* Login */}
                <h4 className="text-black font-normal text-sm text-center w-full mt-12">
                    I have an account?
                    <span
                    onClick={()=>navigate("/loginIndividual")} 
                    className="font-semibold text-sm text-[#3A0CA3]">
                        {" Log In."}
                    </span>
                </h4>
            </div>
        </PageWrapper>
    )
}
export default Onborading