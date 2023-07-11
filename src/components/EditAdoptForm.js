import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditAdoptForm(props) {
    const { adopt } = props;

    function handleEditAdoptFormSubmission(event) {
        event.preventDefault();
        props.onEditAdopt({
            name: event.target.name.value,
            species: event.target.species.value,
            gender: event.target.gender.value,
            description: event.target.description.value,
            id: adopt.id
        });
    }

    return (
        <React.Fragment>
            <ReusableForm
                formSubmissionHandler={handleEditAdoptFormSubmission}
                buttonText="Update Form" />
        </React.Fragment>
    );
}

EditAdoptForm.propTypes = {
    adopt: PropTypes.object,
    onEditAdopt: PropTypes.func
};
export default EditAdoptForm;