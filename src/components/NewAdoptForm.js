import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
function NewAdoptForm(props) {

    return (
        <React.Fragment>
            <ReusableForm
                formSubmissionHandler={handleNewAdoptFormSubmission}
                buttonText="Submit adoption!" />
        </React.Fragment>
    );

    function handleNewAdoptFormSubmission(event) {
        event.preventDefault();
        props.onNewAdoptCreation({ names: event.target.name.value, species: event.target.species.value, gender: event.target.gender.value, description: event.target.description.value, id: v4() });
    }
}

NewAdoptForm.propTypes = {
    onNewAdoptCreation: PropTypes.func
};

export default NewAdoptForm;