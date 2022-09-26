import React from "react";
import NavigationTabs from "./NavigationTabs";

const inputStyles = {
    height: "30px",
    borderRadius: "25px",
    border: "3px solid #69a9f0",
}

const headerStyles = {
    width: "70%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between"
}



function Header() {
    return (
        <React.Fragment>
            <div id="header" style={headerStyles}>
                <NavigationTabs />
                <div id="search-tweet">
                    <form>
                        <input style={inputStyles} type="text" name="search" placeholder="Search.." />
                        <input style={inputStyles} id="tweet" type="text" name="tweet" placeholder="Tweet" />
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;