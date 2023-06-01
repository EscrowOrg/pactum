import react, { useState } from "react";
import { Camera, Gallery, Trash } from "iconsax-react";
import { useDropzone } from 'react-dropzone';

const ChangePhoto = ({ toggleModal2 }) => {

  // const { getRootProps, getInputProps, open } = useDropzone({noClick: true});

  
  const [selectedImage, setSelectedImage] = useState(null);
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const files = acceptedFiles.map(file => (
      
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
      
    ));

    const selectImage = () =>{
      
    }
    
  

  // 

  // const handleDrop = (acceptedFiles) => {
  //   setSelectedImage(acceptedFiles[0]);
  // };

  // const open = () => {
  //   console.log("hello")
  // }



  return (
    <div className="p-4 text-center">
      {/* <span className="w-32 h-1 bg-[#BFBFBF] border-t-2 border-dashed border-slate-50"></span> */}
      <h3 className="font-bold text-base">Change Photo:</h3>

      <div className="flex justify-center items-center bg-white border-slate-50 gap-4 py-4 px-5 my-3 rounded-2xl">
        {/* Photo */}
        <div>
          <Camera
            variant="Bulk"
            size={18}
            color="#A39CB2"
            className="w-14 h-14 bg-[#F5F3F6] p-3 rounded-[50%] "
          />
          <p className="text-sm font-medium pt-2">Photo</p>
        </div>

        {/* Gallery */}
{/* 
        <div>
          <Gallery
            variant="Bulk"
            size={18}
            color="#A39CB2"
            className="w-14 h-14 bg-[#F5F3F6] p-3 rounded-[50%] "
          />

          <button className="text-sm font-medium pt-2">Gallery</button>
        </div> */}

        <div {...getRootProps()} >
      <input {...getInputProps()} />
       
        <div >
        <Gallery
            variant="Bulk"
            size={18}
            color="#A39CB2"
            className="w-14 h-14 bg-[#F5F3F6] p-3 rounded-[50%] "
          />
          <button  className="text-sm font-medium pt-2">Gallery</button>
          {files}
        </div> 
    
    </div>

        {/* Delete photo */}
        <div onClick={toggleModal2}>
          <Trash
            variant="Bulk"
            size={18}
            color="#D1292D"
            className="w-14 h-14 bg-[#FBE9EA] p-3 rounded-[50%] "
          />
          <p className="text-[#D1292D] text-sm font-medium pt-2">Remove</p>
        </div>
      </div>
    </div>
  );
};

export default ChangePhoto;

// const props = {
//   name: 'file',
//   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//   headers: {
//     authorization: 'authorization-text',
//   },
//   onChange(info) {
//       if (info.file.status !== 'uploading') {
//         console.log(info.file, info.fileList);
//       }
//       if (info.file.status === 'done') {
//         message.success(`${info.file.name} file uploaded successfully`);
//       } else if (info.file.status === 'error') {
//         message.error(`${info.file.name} file upload failed.`);
//       }
//     },
//   };
