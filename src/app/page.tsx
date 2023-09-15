import { getServerSession } from "next-auth/next";
import UserCard from "@/components/UserCard";
import { options } from "./api/auth/[...nextauth]/options";

const HomePage = async () => {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </>
  );
};

export default HomePage;
