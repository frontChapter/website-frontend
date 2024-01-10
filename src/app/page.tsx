"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function ReactQueryExample() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return response.data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {data.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <ReactQueryExample />
    </main>
  );
}
