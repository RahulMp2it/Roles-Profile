import React from "react";
import Card from "../../utils/Card";

const departments = [
  {
    id: 1,
    name: "R&D Department",
    progress: 75,
    image: "image.png",
  },
  {
    id: 2,
    name: "Business Management Department",
    progress: 50,
    image: "image1.png",
  },
  {
    id: 3,
    name: "Marketing Department",
    progress: 90,
    image: "image7.png",
  },
  {
    id: 4,
    name: "Sales Department",
    progress: 40,
    image: "image3.png",
  },
  {
    id: 5,
    name: "Operation Department",
    progress: 70,
    image: "image4.png",
  },
  {
    id: 6,
    name: "Accounts Department",
    progress: 70,
    image: "image5.png",
  },
  {
    id: 7,
    name: "HR Department",
    progress: 70,
    image: "image.png",
  },
  {
    id: 8,
    name: "IT & Maintenance Department",
    progress: 70,
    image: "image8.png",
  },
];

const Department = () => {
  return (
    <div className="max-w-[1400px] mt-3 mx-auto grid lg:grid-cols-4 rounded-[20px] gap-2  bg-white">
      {departments.map((department) => (
        <Card
          key={department.id}
          image={department.image}
          title={department.name}
          progress={department.progress}
          buttonText="1 Member"
        />
      ))}
    </div>
  );
};

export default Department;
