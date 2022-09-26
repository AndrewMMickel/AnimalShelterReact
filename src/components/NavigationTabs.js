import React from 'react';

const navTabStyles = {
    display: "flex",
    flexGrow: "3"
}

const navBtnStyles = {
    border: "1px solid #666666",
    color: "#666666",
    height: "100%",
    width: "20%",
    fontSize: "1.1vw"
}

function NavigationTabs() {
    return (
        <React.Fragment>
            <div id="navigation-tabs" className="col-md-6" style={navTabStyles}>
                <button type="button" className="nav-btn" style={navBtnStyles}>Home</button>
                <button type="button" className="nav-btn" style={navBtnStyles}>Notifications</button>
                <button type="button" className="nav-btn" style={navBtnStyles}>Messages</button>
            </div>
        </React.Fragment>
    );
}

export default NavigationTabs;