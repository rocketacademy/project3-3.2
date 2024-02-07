import { useAuth0 } from "@auth0/auth0-react";
import { useForm, Controller } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { BASE_URL } from "./Constants";

export default function ProfileLogin() {
  const [userID, setUserID] = useState("");
  const queryClient = useQueryClient();

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fetcher = async (url) => (await axios.get(url)).data;
  const { data: usersData } = useQuery({
    queryKey: ["users", `${BASE_URL}/users`],
    queryFn: () => fetcher(`${BASE_URL}/users`),
  });
  const putRequest = async (url, data) => await axios.put(url, data);
  const { mutate } = useMutation({
    mutationFn: (formData) =>
      putRequest(`${BASE_URL}/users/${userID}`, formData),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["users", `${BASE_URL}/users`],
      }),
  });

  const onSubmit = (formData) => mutate(formData);

  const LoginButton = () => (
    <button onClick={() => loginWithRedirect()}>Log In</button>
  );

  const LogoutButton = () => (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }>
      Log Out
    </button>
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              id="filled-basic"
              label="Username"
              variant="filled"
            />
          )}
        />
        <button>Submit</button>
      </form>

      {isAuthenticated ? (
        <>
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </>
  );
}
