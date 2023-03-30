import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import './topscroll.scss'
function Topscroll() {
    return (
        <>
            <div>
                {/* <div style={{ marginTop: "150vh" }} /> */}
                <ScrollToTop smooth />
            </div>
        </>
    )
}
export default Topscroll;
