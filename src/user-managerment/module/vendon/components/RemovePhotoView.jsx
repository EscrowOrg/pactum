import React from 'react'

const RemovePhotoView = ({closeModal}) => {
    return (
        <div className="w-full bg-white rounded-xl  gap-6 flex flex-col">

            {/* Container */}
            <div className="flex flex-col w-full">

                {/* title */}
                <div className="pt-3.5 pb-5 px-3 w-full">
                    <h3 className="font-semibold text-base w-full text-center">
                        Remove this photo?
                    </h3>

                    <p className="text-xs font-normal text-center w-full">
                        This will delete your current profile photo.
                    </p>
                </div>

                {/* Remove button */}
                <h4 className="w-full text-[#D1292D] font-semibold text-base border-t py-2 text-center">
                    Remove
                </h4>

                {/* Cancel button */}
                <h4
                onClick={closeModal} 
                className="font-normal text-base border-t py-2 w-full text-center my-auto">
                    Cancel
                </h4>
            </div>
        </div>
    )
}

export default RemovePhotoView