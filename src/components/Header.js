import React from "react";
import NavigationTabs from "./NavigationTabs";

const inputStyles = {
    height: "30px",
    borderRadius: "25px",
    border: "3px solid #00FFFF",
    textAlign: "center"
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
                <div id="search-petname">
                    <form>
                        <input style={inputStyles} id="petname" type="text" name="petname" placeholder="PetName" />
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;