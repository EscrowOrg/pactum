import { useEffect, useState } from 'react'
import { Camera, Gallery, Trash } from "iconsax-react";
import { useDropzone } from 'react-dropzone';

const SettingsChangePhoto = ({
    toggleRemovePhotoModal,
    files,
    setFiles,
    setIsFilePicked,
    closeModal
}) => {

    // DATA INITIALIZATION
    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            "image/*": [],
        },
        onDrop: (acceptedFiles) => {
            closeModal()
            setFiles(acceptedFiles.map((file) => Object.assign(file, {
                preview: URL.createObjectURL(file),
            })));
        }
    });

    return (
        <div className="w-full bg-white rounded-xl p-4 gap-6 flex flex-col">

            {/* container */}
            <div className="p-4 text-center">
        
                {/* title */}
                <h3 className="font-bold text-base">
                    Change Photo:
                </h3>

                {/* body container */}
                <div className="flex justify-center items-center bg-white border-slate-50 gap-4 py-4 px-5 my-3 rounded-2xl">

                    {/* Photo */}
                    <div>

                        <Camera
                        variant="Bulk"
                        size={18}
                        color="#A39CB2"
                        className="w-14 h-14 bg-[#F5F3F6] p-3 rounded-[50%] " />

                        <p className="text-sm font-medium pt-2">
                            Photo
                        </p>
                    </div>

                    <div {...getRootProps()} >

                        <input {...getInputProps()} />
                
                        <div >
                            <Gallery
                            variant="Bulk"
                            size={18}
                            color="#A39CB2"
                            className="w-14 h-14 bg-[#F5F3F6] p-3 rounded-[50%] " />

                            <button  className="text-sm font-medium pt-2">
                                Gallery
                            </button>
                        </div> 
                    </div>

                    {/* Delete photo */}
                    <div onClick={toggleRemovePhotoModal}>

                        <Trash
                        variant="Bulk"
                        size={18}
                        color="#D1292D"
                        className="w-14 h-14 bg-[#FBE9EA] p-3 rounded-[50%] " />

                        <p className="text-[#D1292D] text-sm font-medium pt-2">
                            Remove
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsChangePhoto