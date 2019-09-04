import React from "react";
import { withRouter } from "react-router-dom";
import { fetchSingleUser } from "../../services/FetchUsers";

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      name: "",
      number: "",
      email: "",
      tags: "",
      
    };
  }
  backTo = () => {
    this.props.history.push("/user");
    const id = this.props;
    console.log(id);
  };
  componentDidMount = () => {
    const id = localStorage.getItem("id");
    fetchSingleUser(id).then(user => {
      console.log(user);
      this.setState({ user });
    });
  };



  editUserHandler = (e) => {
     
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
    return (
      <>
        {this.state.user.map(user => {
        return ( <div  key={user.id}className=" col-md-8 ml-auto mr-auto mt-5">
            <h3 className="col-9 col-md-8 col-lg-8 col-md-6 m-auto">
              Edit User
            </h3>
            <form className="col-9 col-md-8 col-lg-8 col-md-6 ml-auto mr-auto mt-5">
              <div className="column">
                <div className="col">
                  <input
                    onChange={this.editUserHandler}
                    type="text"
                    className="form-control mb-2"
                    placeholder="First name"
                    name="name"
                    value={`${user.name}`}
                  />
                </div>
                <div className="col">
                  <input
                    onChange={this.editUserHandler}
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    name="email"
                    value={`${user.email}`}

                  />
                </div>
                <div className="col">
                  <input
                    onChange={this.editUserHandler}
                    type="number"
                    className="form-control mb-2"
                    placeholder="Number"
                    name="number"
                    value={`${user.number}`}

                  />
                </div>
                <div className="col">
                  <input
                    onChange={this.editUserHandler}
                    type="email"
                    className="form-control mb-2"
                    placeholder="Tags"
                    name="tags"
                    value={`${user.tags}`}

                  />
                </div>
              </div>
            </form>
            <button
              onClick={this.addContactHandler}
              className=" rounded col-3 col-lg-3 col-md-3  ml-auto mr-auto mb-3"
            >
              ADD
            </button>
            <button
              className=" rounded col-3 col-lg-3  col-md-3 ml-auto mr-auto mb-3"
              onClick={this.backTo}
            >
              BACK
            </button>
        </div>);
        })}
      </>
    );
  }
}
export default withRouter(EditUser);
