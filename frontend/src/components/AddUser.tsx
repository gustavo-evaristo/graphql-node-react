import { gql, useMutation, useQuery } from "@apollo/client";
import React, { FormEvent, useState } from "react";
import { GET_USERS } from "../App";
import { client } from "../lib/apollo";

const CREATE_USER = gql`
  mutation ($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;

export function AddUserComponent() {
  const [name, setName] = useState("");
  const [createUser, { loading }] = useMutation(CREATE_USER);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await createUser({
      variables: {
        name,
      },
      update(cache, { data: { createUser } }) {
        cache.updateQuery({ query: GET_USERS }, (data) => ({
          users: [...data.users, createUser],
        }));
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Adicionar usuário</button>

      {loading && <p>Carregando.....</p>}
    </form>
  );
}
