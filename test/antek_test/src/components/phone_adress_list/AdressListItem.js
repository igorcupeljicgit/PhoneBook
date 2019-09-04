import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";


export const AdressListItem = props => {
  const userList = props.users;


  const saveId = e => {
    const userId = e.target.id;
    localStorage.setItem("id", userId);
    return userId;
  };

  return (
    <>
      {userList.map(user => {
        return (
         
            <Link to={`/user`} onClick={saveId} key={user.id}>
              <div
                key={user.id}
                className="card col-9 col-sm-10 col-md-5  ml-auto mr-auto mb-3 "
              >
                <div className="card-header" id={user.id}>
                  {user.name}
                </div>
              </div>
            </Link>
        
        );
      })}
    </>
  );
};

export default withRouter(AdressListItem);
