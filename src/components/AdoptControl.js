import React from 'react';
import NewAdoptForm from './NewAdoptForm';
import AdoptList from './AdoptList';

class AdoptControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainAdoptList: [{
                name: 'Jerry',
                species: 'Grey Mouse',
                gender: 'male',
                picture: "/img/Mouse.jpg",
                description: "Lorem ipsum"
            }]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }));
    };

    handleAddingNewAdoptToList = (newAdopt) => {
        const newMainAdoptList = this.state.mainAdoptList.concat(newAdopt);
        this.setState({
            mainAdoptList: newMainAdoptList,
            formVisibleOnPage: false
        });
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewAdoptForm onNewAdoptCreation={this.handleAddingNewAdoptToList} />;
            buttonText = "Return to Adopt List";
        } else {
            currentlyVisibleState = <AdoptList adoptListArray={this.state.mainAdoptList} />;
            buttonText = "Add Animal";
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }

}

export default AdoptControl;