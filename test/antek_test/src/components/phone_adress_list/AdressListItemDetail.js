import React from "react";

import { fetchSingleUser, deleteSingleUser } from "../../services/FetchUsers";

class AdressListItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      id: localStorage.getItem("id")
    };
  }

  componentDidMount = () => {
    fetchSingleUser(this.state.id).then(response => {
      this.setState({ user: response });
    });
  };
  backTo = () => {
    this.props.history.push("/phonebook");
  };

  deleteUser = () => {
    deleteSingleUser(this.state.id);
    this.props.history.push("/phonebook");
  };

  editUserProfil = () => {
    this.props.history.push("/edituser");
  };
  render() {
    if (!this.state.user) {
      return (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    const user = this.state.user[0];
    console.log(user);
    return (
      <>
        <h1>{user.name}</h1>
        <div className="d-flex  flex-column justify-content-center">
          <div className="card col-10 col-sm-6 col-lg-5 mb-5 m-auto ">
            <div className="card-header">{user.name}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{user.number}</li>
              <li className="list-group-item">{user.email}</li>
              <li className="list-group-item">{user.tags}</li>
              <li className="list-group-item">
                <button onClick={this.deleteUser} className="col-6 rounded">
                  delete
                </button>
                <button onClick={this.editUserProfil} className="col-6 rounded">
                  edit
                </button>
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={this.backTo}
          className=" rounded col-9 col-md-6 col-lg-5 mt-3 ml-auto mr-auto "
        >
          BACK
        </button>
      </>
    );
  }
}

export default AdressListItemDetail;
