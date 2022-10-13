import React from 'react';
import PropTypes from "prop-types";
import Animal from './Animal';
const masterAnimalList = [
    {
        name: 'Jenny',
        species: 'German Shephard',
        gender: 'female'
    },

    {
        name: 'Carl',
        species: 'Husky',
        gender: 'male'
    },

    {
        name: 'Tom',
        species: 'Siamese cat',
        gender: 'male'
    },

    {
        name: 'Alice',
        species: 'Persian cat',
        gender: 'female'
    },

    {
        name: 'Jerry',
        species: 'Grey Mouse',
        gender: 'male'
    },
]
function AdoptList(props) {
    return (
        <React.Fragment>
            <hr />
            {masterAnimalList.map((animal, index) =>
                <Animal
                    // whenAnimalClicked={props.onAnimalSelection}
                    name={animal.name}
                    species={animal.species}
                    gender={animal.gender}
                    key={index} />
            )}
        </React.Fragment>
    );
}

AdoptList.propTypes = {
    masterAnimalList: PropTypes.array,
    onAnimalSelection: PropTypes.func
};
export default AdoptList;