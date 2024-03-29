import { useEffect, useRef } from 'react'
import { createPortal } from "react-dom";
import cn from "classnames";
import useMountTransition from '../../hooks/Dashboard/useMountTransition';
import "./index.css"

// CLEAR PORTAL ROOT
function createPortalRoot() {
    const drawerRoot = document.createElement("div");
    drawerRoot.setAttribute("id", "drawer-root");
    return drawerRoot;
}

const Drawer = ({
    insertCurve=true,
    height="",
    isOpen,
    children,
    className,
    onClose,
    type,
    relationshipStatus,
    position = "bottom",
    removeWhenClosed = true
}) => {

    // DATA INITIALIZATION
    const bodyRef = useRef(document.querySelector("body"));
    const portalRootRef = useRef(
        document.getElementById("drawer-root") || createPortalRoot()
    );
    const isTransitioning = useMountTransition(isOpen, 300);


    // SIDE EFFECTS
    // Append portal root on mount
    useEffect(() => {
        bodyRef.current.appendChild(portalRootRef.current);
        const portal = portalRootRef.current;
        const bodyEl = bodyRef.current;

        return () => {
            // Clean up the portal when drawer component unmounts
            portal.remove();
            // Ensure scroll overflow is removed
            bodyEl.style.overflow = "";
        };
    }, []);

    // Prevent page scrolling when the drawer is open
    useEffect(() => {
        const updatePageScroll = () => {
            if (isOpen) {
                bodyRef.current.style.overflow = "hidden";
            } else {
                bodyRef.current.style.overflow = "";
            }
        };

        updatePageScroll();
    }, [isOpen]);

    if (!isTransitioning && removeWhenClosed && !isOpen) {
        return null;
    }

    return createPortal(
        <div
        aria-hidden={isOpen ? "false" : "true"}
        className={cn("drawer-container", {
            open: isOpen,
            in: isTransitioning,
            className
        })}>

            {/* top curve */}
            {
                insertCurve &&
                <div className={cn('top-curve', position)}>
                    {" "}
                </div>
            }

            {/* drawer container */}
            <div className={cn(`drawer ${height}`, position, type, relationshipStatus)} role="dialog">
                {children}
            </div>
            
            {/* Backdrop */}
            <div className="backdrop" onClick={onClose} />
        </div>,
        portalRootRef.current
    );
}

export default Drawer