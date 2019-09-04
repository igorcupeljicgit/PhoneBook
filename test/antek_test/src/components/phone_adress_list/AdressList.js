import React from "react";

import { fetchAllUsers, fetchSingleUser } from "../../services/FetchUsers";
import { AdressListItem } from "./AdressListItem";
import User from "../../entities/User";
import { EmptyBook } from "./EmptyBook";

class AdressList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      oneUser: null
    };
  }

  componentDidMount = () => {
    fetchAllUsers().then(response => {
      const userArray = response.map(user => {
        const { name, number, id, tags, email } = user;
        return new User(name, number, email, id, tags);
      });
      this.setState({ users: userArray });
      return userArray;
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.users.length !== this.state.users.length) {
      fetchAllUsers().then(response => {
        const userArray = response.map(user => {
          const { name, number, id, tags, email } = user;
          return new User(name, number, email, id, tags);
        });
        this.setState({ users: userArray });
        return userArray;
      });
    }
  };

  backTo=()=>{
    this.props.history.push("/");
  }
  addContact=()=>{
      this.props.history.push("/addcontact");
  }

  render() {
    return (
      <div className="m-auto">
        {this.state.users.length !== 0 ? (
          <React.Fragment>
            <h1>Contact List</h1>
            <AdressListItem users={this.state.users} />
            
          </React.Fragment>
        ) : (
          <EmptyBook />
        )}
        <button onClick={this.addContact} className="rounded col-4  col-md-2 col-lg-2 ml-auto mr-auto mb-3">Add Contact</button><button  onClick={this.backTo} className=" rounded col-4 col-md-2   col-lg-2  ml-auto mr-auto mb-3">BACK</button>
      </div>
    );
  }
}

export default AdressList;
