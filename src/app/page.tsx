import { redirect } from "next/navigation";

export default function Page() {
  redirect("/resume");

  return <h1> Coming soon!!</h1>;
}
