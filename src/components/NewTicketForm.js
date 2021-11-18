import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewTicketForm(props){
  
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
    props.onNewTicketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
  }

    return (
      <React.Fragment>
        <ReusableForm 
          formSubmissionHandler={handleNewTicketFormSubmission}
          buttonText="Help!" />
      </React.Fragment>
    );
  }
// Add PropTypes for the new prop
NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};


export default NewTicketForm;