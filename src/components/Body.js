import React from 'react';
import AdoptList from './AdoptList';

// const bodyStyles = {
//     width: "80%",
//     margin: "1% auto",
//     display: "flex",
//     justifyContent: "space-between"
// }
//Adjust to make into cards
function Body() {
    return (
        <React.Fragment>
            <div id="body">
                <AdoptList />
            </div>
        </React.Fragment>
    );
}

export default Body;