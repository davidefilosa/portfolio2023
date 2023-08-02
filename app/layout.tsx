import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/nextjs";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }
  return (
    <div>
      <ClerkProvider>{children}</ClerkProvider>
    </div>
  );
};

export default AdminLayout;
