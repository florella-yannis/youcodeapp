import { auth } from "@/lib/auth";
import { LoginButton, LogoutButton } from "./AuthButtons";

export default async function Home() {
  const session = await auth();
  return (
    <div className="mx-auto py-4 max-w-lg">
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
