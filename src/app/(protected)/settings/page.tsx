import { auth, signOut } from "@/auth";
import React from "react";

type Props = {};

const Page = async (props: Props) => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">sign out</button>
      </form>
    </div>
  );
};

export default Page;
