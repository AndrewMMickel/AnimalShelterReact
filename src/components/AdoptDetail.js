import React from "react";
import PropTypes from "prop-types";

function AdoptDetail(props) {
    const { animal, onClickingDelete } = props;

    return (
        <React.Fragment>
            <h1>Adopt Detail</h1>
            <h3>{animal.name} - {animal.species}</h3>
            <p><em>{animal.gender}</em></p>
            <p><em>{animal.description}</em></p>
            <button onClick={() => onClickingDelete(animal.id)}>Close Ticket</button>
            <hr />
        </React.Fragment>
    );
}

AdoptDetail.propTypes = {
    animal: PropTypes.object,
    onClickingDelete: PropTypes.func
};

export default AdoptDetail;
