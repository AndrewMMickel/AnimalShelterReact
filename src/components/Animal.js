import React from "react";
import PropTypes from "prop-types";

const animalStyles = {
    width: "40%",
    margin: "1% auto",
    display: "block",
    justifyContent: "space-evenly",
    border: "solid",

}

function Animal(props) {
    return (
        <React.Fragment>
            <div onClick={() => props.whenAnimalClicked(props.id)} style={animalStyles}>
                <h3>{props.name} - {props.species}</h3>
                <p><em>{props.gender}</em></p>
                <img src={props.picture} alt="" />
                <hr />
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
    whenAnimalClicked: PropTypes.func
};

export default Animal;