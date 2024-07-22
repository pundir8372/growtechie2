import React from "react";
<<<<<<< HEAD

=======
import { NavbarDemo } from "@/components/navbar";
>>>>>>> upstream/main
import Footer from "../Footer";
import { NavbarDemo } from "../navbar";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarDemo />
      <main className="flex min-w-screen w-full flex-col pt-[12rem] items-center  justify-between">
        {/* <div className="absolute z-[-99] pointer-events-none inset-0 flex items-center justify-center "></div> */}
        {children}
      </main>
      <Footer />
    </>
  );
}