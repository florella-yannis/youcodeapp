import { auth } from "@/lib/auth";
import { LoginButton, LogoutButton } from "./AuthButtons";

export default async function Home() {
  const session = await auth();
  return (
    <div className="mx-auto max-w-lg py-4">
      <h1>
        {session?.user 
        ? "authentificated" + session?.user.email
      :"Not Authentificated"}
      </h1>
      <div>
        {!session?.user ? (
          <LoginButton />
        ) : <LogoutButton />}
      </div>
    </div>
  );
}
