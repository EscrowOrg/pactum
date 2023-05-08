import React from 'react'
import { BackButton } from "../../../components/Button";
import NoTransitionWrapper from "../../../components/Dashboard/Home/NoTransitionWrapper";

const TermsAndConditions = () => {
  return (
          <NoTransitionWrapper>
      <div className="w-full h-full flex flex-col gap-8 py-5 overflow-auto">

        {/* Back Button */}
        <BackButton />

        {/* title */}
        <div className="mt-5">
          <h4 className="font-bold text-xl text-black"> Terms & Conditions</h4>

          <p className="text-base font-sm pt-2.5 text-gray-400">
            Last updated: January 2024
          </p>
        </div>

        {/* BODY */}
        <div>
          <h4 className=" font-bold">Introduction:</h4>
          <p className="pt-3">
            This Privacy Policy governs the manner in which our Crypto App
            (hereinafter referred to as "the App") collects, uses, maintains,
            and discloses information collected from users (hereinafter referred
            to as "Users") of the App. This Privacy Policy applies to the App
            and all products and services offered by the App.
          </p>
        </div>

        <div>
          <h4 className=" font-bold">Information collection:</h4>
          <p className="pt-3">
            We may collect personal identification information from Users in
            various ways, including, but not limited to, when Users visit the
            App, register on the App, place an order, subscribe to the
            newsletter, respond to a survey, fill out a form, and in connection
            with other activities, services, features or resources we make
            available on the App. Users may be asked for, as appropriate, name,
            email address, phone number, and other personal information. We will
            collect personal identification information from Users only if they
            voluntarily submit such information to us. Users can always refuse
            to supply personally identification information, except that it may
            prevent them from engaging in certain App-related activities.
          </p>
        </div>

        <div>
          <h4 className=" font-bold">Information usage:</h4>
          <p className="pt-3">
            We may collect and use Users' personal information for the following
            purposes:
          </p>
          <ul>
            <li className='pt-1.5'>
              To personalize user experience: We may use information in the
              aggregate to understand how our Users as a group use the services
              and resources provided on the App.
            </li>
            <li className='pt-1.5'>
              To improve the App: We may use feedback provided by the User to
              improve our products and services.
            </li>
            <li className='pt-1.5'>
              To process payments: We may use the information Users provide
              about themselves when placing an order only to provide service to
              that order. We do not share this information with outside parties
              except to the extent necessary to provide the service.
            </li>
            <li className='pt-1.5'>
              To send periodic emails: We may use the email address to send User
              information and updates pertaining to their order. It may also be
              used to respond to their inquiries, questions, and/or other
              requests.
            </li>
          </ul>
        </div>

        <div>
          <h4 className=" font-bold">Information protection:</h4>
          <p className="pt-3">
            We adopt appropriate data collection, storage, and processing
            practices and security measures to protect against unauthorized
            access, alteration, disclosure or destruction of Users' personal
            information, username, password, transaction information, and data
            stored on our App.
          </p>
        </div>

        <div>
          <h4 className=" font-bold">Sharing personal information:</h4>
          <p className="pt-3">
            We do not sell, trade, or rent Users' personal identification
            information to others. We may share generic aggregated demographic
            information not linked to any personal identification information
            regarding visitors and users with our business partners, trusted
            affiliates and advertisers for the purposes outlined above.
          </p>
        </div>

        <div>
          <h4 className=" font-bold">Third-party websites:</h4>
          <p className="pt-3">
            Users may find advertising or other content on our App that link to
            the websites and services of our partners, suppliers, advertisers,
            sponsors, licensors and other third parties. We do not control the
            content or links that appear on these websites and are not
            responsible for the practices employed by websites linked to or from
            our App. In addition, these websites or services, including their
            content and links, may be constantly changing. These websites and
            services may have their own privacy policies and customer service
            policies. Browsing and interaction on any other website, including
            websites which have a link to our App, is subject to that website's
            own terms and policies.
          </p>
        </div>

        <div>
          <h4 className=" font-bold">Changes to this privacy policy:</h4>
          <p className="pt-3">
            We have the discretion to update this Privacy Policy at any time.
            When we do, we will revise the updated date at the bottom of this
            page. We encourage Users to frequently check this page for any
            changes to stay informed about how we are helping to protect the
            personal information we collect. You acknowledge and agree that it
            is your responsibility to review this Privacy Policy periodically
            and become aware of modifications.
          </p>
        </div>

        <div>
          <h4 className=" font-bold">Your acceptance of these terms:</h4>
          <p className="pt-3">
            By using this App, you signify your acceptance of this policy. If
            you do not agree to this policy, please do not use our App. Your
            continued use of the App following the posting of changes to this
            policy will be deemed your acceptance of those changes.
          </p>
        </div>

        <div>
          <h4 className=" font-bold">Contacting us:</h4>
          <p className="pt-3 ">
            If you have any questions about this Privacy Policy, the practices
            of this App, or your dealings with this App, please contact us at
            insert
          </p>
        </div>
      </div>
    </NoTransitionWrapper>
  )
}

export default TermsAndConditions