import React from "react";
import PropTypes from "prop-types";

const animalStyles = {
    width: "60%",
    margin: "1% auto",
    display: "flex",
    justifyContent: "space-between",
    border: "solid"
}

function Animal(props) {
    return (
        <React.Fragment>
            <div onClick={() => props.whenAnimalClicked(props.id)} style={animalStyles}>
                <h3>{props.name} - {props.species}</h3>
                <p><em>{props.gender}</em></p>
                <hr />
            </div>
        </React.Fragment>
    );
}

Animal.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    id: PropTypes.string,
    whenAnimalClicked: PropTypes.func
};

export default Animal;