import * as React from "react";
import { User } from "../types";
export function Rest() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "error" | "resolved"
  >("idle");

  React.useLayoutEffect(() => {
    document
      ?.querySelector("ol")
      ?.scrollBy(0, document?.querySelector("ol")?.scrollHeight ?? 0);
  });

  React.useEffect(() => {
    setStatus("loading");
    try {
      fetch(`${process.env.REACT_APP_BACKEND_HOST}/user`, {
        method: "POST",
      });
    } catch {
      setStatus("error");
    }
    setStatus("resolved");
  }, []);

  React.useEffect(() => {
    const getUsers = async () => {
      const usersResponse = await fetch(
        `${process.env.REACT_APP_BACKEND_HOST}/user`,
        {
          method: "GET",
        }
      );
      const users = await usersResponse.json();
      setUsers(users);
    };
    setStatus("loading");
    try {
      getUsers();
    } catch {
      setStatus("error");
    }
    setStatus("resolved");
  }, []);

  if (status === "idle" || status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error!</div>;

  return (
    <ol style={{ listStyle: "none", height: "250px", overflowY: "scroll" }}>
      {users.map((user) => (
        <li key={user.id}>
          {user.id}. <b>{user.username}</b> is user with email:{" "}
          <a href={`mailto${user.email}`}>{user.email}</a>
        </li>
      ))}
    </ol>
  );
}
