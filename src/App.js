import { ToastContainer, Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import MainRouter from './user-managerment/module/router';

function App() {
  return (
    <>
        <MainRouter />

        {/* toast container */}
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        transition={Zoom}
        pauseOnHover
        draggablePercent={40}
        theme="colored" />
    </>
  );
}

export default App;
