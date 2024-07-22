// data.ts

import { Course } from "@/types";

export const courses: Course[] = [
  {
    id: 1,
    title: "Course 1",
    description: "Description of Course 1", // Ensure this matches the type definition
    img: "image-url",
    className: "some-class", // Optional
    iconLists: ["icon1", "icon2"],
    dates: "2024-07-20 to 2024-08-20",
    duration: "1 month",
    price: "$100",
    benefits: ["Benefit 1", "Benefit 2"]
  },
  // Add more courses as needed
];
