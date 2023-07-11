import React from 'react';
import NewAdoptForm from './NewAdoptForm';
import AdoptList from './AdoptList';
import AdoptDetail from './AdoptDetail';
import EditAdoptForm from './EditAdoptForm';
class AdoptControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainAdoptList: [],
            selectedAdopt: null,
            editing: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        if (this.state.selectedAdopt != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedAdopt: null,
                editing: false
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage
            }));
        }
    }

    handleEditClick = () => {
        console.log("handleEditClick reached!");
        this.setState({ editing: true });
    }

    handleDeletingTicket = (id) => {
        const newMainAdoptList = this.state.mainAdoptList.filter(ticket => ticket.id !== id);
        this.setState({
            mainAdoptList: newMainAdoptList,
            selectedAdopt: null
        });
    }

    handleAddingNewAdoptToList = (newAdopt) => {
        const newMainAdoptList = this.state.mainAdoptList.concat(newAdopt);
        this.setState({
            mainAdoptList: newMainAdoptList,
            formVisibleOnPage: false
        });
    }

    handleChangingSelectedAdopt = (id) => {
        const selectedAdopt = this.state.mainAdoptList.filter(ticket => ticket.id === id)[0];
        this.setState({ selectedAdopt: selectedAdopt });
    }

    handleEditingAdoptInList = (adoptToEdit) => {
        const editedMainAdoptList = this.state.mainAdoptList
            .filter(ticket => ticket.id !== this.state.selectedAdopt.id)
            .concat(adoptToEdit);
        this.setState({
            mainAdoptList: editedMainAdoptList,
            editing: false,
            selectedAdopt: null
        });
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.editing) {
            currentlyVisibleState = <EditAdoptForm ticket={this.state.selectedAdopt} onEditAdopt={this.handleEditingAdoptInList} />
            buttonText = "Return to adopt List";
        } else if (this.state.selectedAdopt != null) {
            currentlyVisibleState = <AdoptDetail
                ticket={this.state.selectedAdopt}
                onClickingDelete={this.handleDeletingAdopt}
                onClickingEdit={this.handleEditClick} />;
            buttonText = "Return to Animal List";
        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewAdoptForm onNewAdoptCreation={this.handleAddingNewAdoptToList} onClickingDelete={this.handleDeletingTicket} />;
            buttonText = "Return to Animal List";
        } else {
            currentlyVisibleState = <AdoptList adoptListArray={this.state.mainAdoptList} onAdoptSelection={this.handleChangingSelectedAdopt} />;
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