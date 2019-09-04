const END_POINT = "http://localhost:3000";

export const fetchAllUsers = () => {
  const fetchAll = fetch(`${END_POINT}/get`)
    .then(response => response.json())
    .then(response => {
      return response;
    });

  return fetchAll;
};

export const fetchSingleUser = userId => {
  const fetchUser = fetch(`${END_POINT}/get/${userId}`)
    .then(response => response.json())
    .then(response => {
      return response;
    });

  return fetchUser;
};

export const deleteSingleUser = userId => {
  const deleteUser = fetch(`${END_POINT}/delete/${userId}`, {
    method: "DELETE"
  }).then(response => response);
  return deleteUser;
};

export const addUserToPhoneBook=(data)=>{
  const addUser=fetch(`${END_POINT}/post`,{
    method:"POST",
    headers: new Headers({
      
      "Content-Type": "application/json"}),
    body: JSON.stringify(data)
  }).then(response=>response.json())
  .then(response=>{
    console.log(response)
    return response})
  return addUser

}

export const editUserProfil=(data)=>{
  const edit=fetch(`${END_POINT}/put`,{
    method:"PUT",
    headers: new Headers({
      
      "Content-Type": "application/json",
      'Authorization':data.id
    }),
    body: JSON.stringify(data)

  }).then(response=>response.json()).then(response=>{
    console.log(response)
    return response
  })


return edit
}
