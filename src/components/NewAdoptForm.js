import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewAdoptForm(props) {

    return (
        <React.Fragment>
            <form onSubmit={handleNewAdoptFormSubmission}>
                <input
                    type='text'
                    name='name'
                    placeholder='Animal name' />
                <input
                    type='text'
                    name='species'
                    placeholder='species' />
                <input
                    type='text'
                    name='gender'
                    placeholder='Gender' />
                <input
                    type='text'
                    name='description'
                    placeholder='Description' />

                <button type='submit'>Add!</button>
            </form>
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