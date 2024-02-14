import { useAuth0 } from "@auth0/auth0-react";
import { useForm, Controller } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BASE_URL } from "./Constants";

export default function ProfileLogin({ userId, setUserId }) {
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();
  const { logout, user, isAuthenticated } = useAuth0();
  const { control, handleSubmit } = useForm();

  const fetcher = async (url) => (await axios.get(url)).data;
  const { data: userData } = useQuery({
    queryKey: ["user", `${BASE_URL}/users/${user?.email}`],
    queryFn: () => fetcher(`${BASE_URL}/users/${user?.email}`),
    enabled: isAuthenticated,
  });

  useEffect(() => {
    setUserId(userData?.id);
    console.log(userData);
  }, [setUserId, userData]);

  const putRequest = async (url, data) => await axios.put(url, data);
  const { mutate } = useMutation({
    mutationFn: (formData) =>
      putRequest(`${BASE_URL}/users/${userId}`, formData),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["user", `${BASE_URL}/users/${user?.email}`],
      }),
  });

  const onSubmit = (formData) => {
    mutate(formData);
    setIsEditing(false);
  };

  const LogoutButton = () => (
    <Button
      variant="contained"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }>
      Log Out
    </Button>
  );

  return (
    <>
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            defaultValue={userData?.username ?? ""}
            render={({ field }) => (
              <TextField
                {...field}
                id="username"
                label="Username"
                variant="filled"
              />
            )}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      ) : (
        <>
          <div>Username: {userData?.username || "Please enter username"} </div>
          <Button variant="contained" onClick={() => setIsEditing(true)}>
            Edit Profile
          </Button>
        </>
      )}
      <br />
      <br />
      <div>
        <LogoutButton />
      </div>
    </>
  );
}
