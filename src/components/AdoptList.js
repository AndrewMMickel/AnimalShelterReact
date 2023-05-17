import React from 'react';
import PropTypes from "prop-types";
import Animal from './Animal';

// const masterAnimalList = [
//     {
//         name: 'Jenny',
//         species: 'German Shephard',
//         gender: 'female',
//         picture: "/img/germanShephard.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     },

//     {
//         name: 'Carl',
//         species: 'Husky',
//         gender: 'male',
//         picture: "/img/Husky.jpg",
//         description: "Lorem ipsum"
//     },

//     {
//         name: 'Tom',
//         species: 'Siamese cat',
//         gender: 'male',
//         picture: "/img/SiamCat.jpg",
//         description: "Lorem ipsum"
//     },

//     {
//         name: 'Alice',
//         species: 'Persian cat',
//         gender: 'female',
//         picture: "/img/PersCat.jpg",
//         description: "Lorem ipsum"
//     },

//     {
//         name: 'Jerry',
//         species: 'Grey Mouse',
//         gender: 'male',
//         picture: "/img/Mouse.jpg",
//         description: "Lorem ipsum"
//     },
// ]
function AdoptList(props) {
    return (

        <React.Fragment>
            {props.adoptListArray.map((animal, index) =>

                <Animal
                    // whenAnimalClicked={props.onAnimalSelection}
                    name={animal.name}
                    species={animal.species}
                    gender={animal.gender}
                    picture={animal.picture}
                    description={animal.description}
                    key={index} />
            )}
        </React.Fragment>
    );
}

AdoptList.propTypes = {
    adoptListArray: PropTypes.array,
    onAnimalSelection: PropTypes.func
};
export default AdoptList;