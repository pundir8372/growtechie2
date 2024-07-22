// components/coursedetails/coursedetailslayout.tsx

"use client";

import { useRouter } from "next/router";
import { courses } from "@/data";
import { useEffect, useState } from "react";
import { Course } from "@/types";
import OnlineLearningSteps from "@/components/coursedeatils/onlinelearningsteps";
import DiscountForm from "@/components/coursedeatils/discountform";

const CourseDetail = () => {
  const router = useRouter();
  const { courseId } = router.query;

  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (courseId) {
      const courseData = courses.find((course) => course.id === Number(courseId));
setCourse(courseData || null);
    }
  }, [courseId]);

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <div className="py-20">
      <h1 className="text-center text-4xl font-bold mb-8">
        COURSE
      </h1>
      <h2 className="text-center text-6xl font-bold text-purple mb-16">
        {course.title}
      </h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-16 md:mb-0">
          <h3 className="text-3xl font-bold mb-4">About the course</h3>
          <p className="text-lg text-gray-300 mb-8">
            {course.description}
          </p>
          <ul className="list-disc list-inside text-lg text-gray-300 mb-8">
            {course.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/3 bg-gray-800 p-8 rounded-md shadow-md">
          <h3 className="text-2xl font-bold mb-4">Dates</h3>
          <p className="text-lg mb-8">{course.dates}</p>
          <h3 className="text-2xl font-bold mb-4">Duration</h3>
          <p className="text-lg mb-8">{course.duration}</p>
          <h3 className="text-2xl font-bold mb-4">Price</h3>
          <p className="text-lg mb-8">{course.price}</p>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
            Join the course
          </button>
        </div>
      </div>
      <OnlineLearningSteps />
      <DiscountForm />
    </div>
  );
};

export default CourseDetail;