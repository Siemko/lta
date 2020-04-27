import * as React from "react";
import { User } from "../types";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";

const GET_USERS = gql`
  {
    getUsers {
      id
      email
      username
    }
  }
`;

const GENERATE_USER = gql`
  mutation GenerateUser {
    generateUser {
      id
      email
      username
    }
  }
`;

export function GQL() {
  const { loading, error, data, refetch } = useQuery(GET_USERS);
  const [addUser] = useMutation(GENERATE_USER);

  React.useLayoutEffect(() => {
    document
      ?.querySelector("ol")
      ?.scrollBy(0, document?.querySelector("ol")?.scrollHeight ?? 0);
  });

  React.useEffect(() => {
    addUser();
  }, [addUser]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return (
    <ol style={{ listStyle: "none", height: "250px", overflowY: "scroll" }}>
      {data.getUsers.map((user: User) => (
        <li key={user.id}>
          {user.id}. <b>{user.username}</b> is user with email:{" "}
          <a href={`mailto${user.email}`}>{user.email}</a>
        </li>
      ))}
    </ol>
  );
}
