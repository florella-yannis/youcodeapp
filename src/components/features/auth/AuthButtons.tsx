
import { auth } from "@/lib/auth";
import { Login } from "../auth/Login";
import { Logout } from "../auth/Logout";

const AuthButtons = async () => {
  const session = await auth();
  return (
    <div className="mx-auto max-w-lg py-4">
        {!session?.user ? (
          <Login />
        ) : <Logout user = {session.user}/>}
    </div>
  );
}
export default AuthButtons;