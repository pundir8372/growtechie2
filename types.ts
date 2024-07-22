// types.ts

export interface Course {
  id: number;
  title: string;
  description: string;
  img: string;
  className?: string;
  iconLists: string[];
  dates: string;
  duration: string;
  price: string;
  benefits: string[];
}
