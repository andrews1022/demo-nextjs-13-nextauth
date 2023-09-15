import Image from "next/image";

type User = {
  email?: string | null | undefined;
  image?: string | null | undefined;
  name?: string | null | undefined;
};

type UserCardProps = {
  pagetype: string;
  user: User | undefined;
};

const UserCard = ({ pagetype, user }: UserCardProps) => {
  // console.log("user: ", user);

  return (
    <section className="flex flex-col gap-4">
      {user?.name ? (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
          Hello {user?.name}!
        </div>
      ) : null}

      {user?.image ? (
        <Image
          className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
          src={user?.image}
          width={200}
          height={200}
          alt={user?.name ?? "Profile Pic"}
          priority={true}
        />
      ) : null}
      <p className="text-2xl text-center">{pagetype} Page!</p>
    </section>
  );
};

export default UserCard;
