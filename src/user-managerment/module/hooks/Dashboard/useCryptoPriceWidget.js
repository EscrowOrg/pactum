import { useEffect } from "react";

const useCryptoPriceWidget = (url) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.type = "text/javascript";

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
}

export default useCryptoPriceWidget