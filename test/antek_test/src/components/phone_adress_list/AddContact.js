import React from "react";

import {addUserToPhoneBook} from "../../services/FetchUsers"

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        inputEror:"",
        
    };
  }
  
  backTo = () => {
    this.props.history.push("/phonebook");
  };
  componentDidMount = () => {
    this.setState({
      name: "",
      email: "",
      number: "",
      tags: []
    });

  };

  
  makeNewContact = e => {
    let targetValue = e.target.value;
    if (e.target.name === "name") {
      this.setState({
        name: targetValue
      });
    }
    if (e.target.name === "email") {
      this.setState({
        email: targetValue
      });
    }
    if (e.target.name === "number") {
      this.setState({
        number: targetValue
      });
    } else {
      this.setState({
        tags:targetValue
      });
    }
  };


  addContactHandler = () => {
     const data={
        name:this.state.name,
        number:this.state.number,
      email:this.state.email,
        tags:this.state.tags
    }
  
    addUserToPhoneBook(data)
    .then(response=>{
        return  response})
    this.props.history.push("/phonebook")
  
}

  render() {
    return (
      <div className=" col-md-8 ml-auto mr-auto mt-5">
        <h3 className="col-9 col-md-8 col-lg-8 col-md-6 m-auto">Please fill all inputs.</h3>
        <form className="col-9 col-md-8 col-lg-8 col-md-6 ml-auto mr-auto mt-5">
          <div className="column">
            <div className="col">
              <input
                onInput={this.makeNewContact}
                type="text"
                className="form-control mb-2"
                placeholder="First name"
                name="name"
              />
            </div>
            <div className="col">
              <input
                onChange={this.makeNewContact}
                type="email"
                className="form-control mb-2"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="col">
              <input
                onChange={this.makeNewContact}
                type="number"
                className="form-control mb-2"
                placeholder="Number"
                name="number"
              />
            </div>
            <div className="col">
              <input
                onChange={this.makeNewContact}
                type="email"
                className="form-control mb-2"
                placeholder="Tags"
                name="tags"
              />
            </div>
          </div>
        </form>
        <button
          onClick={this.addContactHandler}
          className=" addbtn rounded col-3 col-lg-3 col-md-3  ml-auto mr-auto mb-3"
        >
          ADD
        </button>
        <button
          className="rounded col-3 col-lg-3  col-md-3 ml-auto mr-auto mb-3"
          onClick={this.backTo}
        >
          BACK
        </button>
      </div>
    );
  }
}

export default AddContact;
