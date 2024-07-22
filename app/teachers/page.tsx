// pages/teachers.tsx
import { AiOutlineSearch } from "react-icons/ai";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import PageWrapper from "@/components/wrapper/page-wrapper";
import { navItems } from "@/data";
import PopularTutors from "@/components/PopularTutor";

const Teachers = () => {
  return (
    <div style={{ background: "#000319" }}>
      <PageWrapper>
        <div className="container mx-auto mt-2">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-3xl">
              <AiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
              <input
                type="text"
                placeholder="Search for tutors..."
                className="pl-12 pr-4 py-3 w-full border border-gray-300 rounded-full bg-gray-900 text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <PopularTutors />
        </div>
      </PageWrapper>
    </div>
  );
};

export default Teachers;
