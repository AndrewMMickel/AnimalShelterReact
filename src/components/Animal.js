import React from "react";
import PropTypes from "prop-types";

// const animalStyles = {
//     width: "40%",
//     height: "auto",
//     margin: "1% auto",
//     display: "block",
//     justifyContent: "space-evenly",
//     border: "solid",
//     paddingLeft: "0px",
//     color: "aqua",
//     borderRadius: "7px",
//     boxShadow: "10px 10px lightblue",
//     textAlign: "center",
// }

function Animal(props) {
    return (
        <React.Fragment>
            <div onClick={() => props.whenAnimalClicked(props.id)} className="animal-comp">
                <h3>{props.name} - {props.species}</h3>
                <hr />
                <p><em>{props.gender}</em></p>
                <hr />
                <img src={props.picture} alt="" className="animal-img" />
                <hr />
                <p><em>{props.description}</em></p>
            </div>
        </React.Fragment>
    );
}

Animal.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    picture: PropTypes.string,
    id: PropTypes.string,
    description: PropTypes.string,
    whenAnimalClicked: PropTypes.func
};

export default Animal;