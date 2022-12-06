import React from 'react';
import PropTypes from "prop-types";
import Animal from './Animal';

const masterAnimalList = [
    {
        name: 'Jenny',
        species: 'German Shephard',
        gender: 'female',
        picture: "/img/germanShephard.jpg"
    },

    {
        name: 'Carl',
        species: 'Husky',
        gender: 'male',
        picture: "/img/Husky.jpg"
    },

    {
        name: 'Tom',
        species: 'Siamese cat',
        gender: 'male',
        picture: "/img/SiamCat.jpg"
    },

    {
        name: 'Alice',
        species: 'Persian cat',
        gender: 'female',
        picture: "/img/PersCat.jpg"
    },

    {
        name: 'Jerry',
        species: 'Grey Mouse',
        gender: 'male',
        picture: "/img/Mouse.jpg"
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
                    picture={animal.picture}
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