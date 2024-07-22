// pages/teachers.tsx
"use client"
import { AiOutlineSearch } from "react-icons/ai";
import { FloatingNav } from "@/components/ui/FloatingNavbar"; // Assuming this is your existing component
import PageWrapper from "@/components/wrapper/page-wrapper"; // Assuming this is your existing component
import { navItems } from "@/data"; // Assuming this is your existing data import
import PopularTutors from "@/components/PopularTutor";
import { useState } from "react";


const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
  return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <PageWrapper>
        <div className="container mx-auto mt-2">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-3xl">
              {" "}
              {/* Increased max-width for better visibility */}
              <AiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500  text-2xl" />{" "}
              {/* Positioned icon correctly */}
              <input
                                type="text"
                                placeholder="Search for tutors..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="pl-12 pr-4 py-3 w-full border border-gray-300 rounded-full bg-gray-900 text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
            </div>
          </div>
          <PopularTutors searchTerm={searchTerm} />
        </div>
      </PageWrapper>
    </main>
  );
};

export default Teachers;