import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Prototyping() {
  return (
<div></div>
  );
}

                    try {
                      const dbUpdateUserData = await axios.put(
                        `${BACKEND_URL}/users/${currentUser.id}`,
                        {
                          firstName: firstNameValue,
                          lastName: lastNameValue,
                          username: usernameValue,
                          bio: bioValue,
                          style: stylesValue,
                          address: addressValue,
                          profilePicture: currentUser.profilePicture
                            ? currentUser.profilePicture
                            : DEFAULT_PFP,
                        }
                      );
                      console.log(dbUpdateUserData.data);
                      // if (dbUpdateUserData) {
                      //   navigate(-1);
                      // }
                    } catch (err) {
                      console.log(err);
                    }