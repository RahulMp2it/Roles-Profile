import React from "react";
import Card from "../../../utils/Card";

const departments = [
  {
    id: 1,
    name: "R&D Department",
    image: "image.png",
  },
  {
    id: 2,
    name: "Business Management Department",
    image: "image1.png",
  },
  {
    id: 3,
    name: "Marketing Department",
    image: "image7.png",
  },
  {
    id: 4,
    name: "Sales Department",
    image: "image3.png",
  },
  {
    id: 5,
    name: "Operation Department",
    image: "image4.png",
  },
  {
    id: 6,
    name: "Accounts Department",
    image: "image5.png",
  },
  {
    id: 7,
    name: "HR Department",
    image: "image.png",
  },
  {
    id: 8,
    name: "IT & Maintenance Department",
    image: "image8.png",
  },
];

const Department = () => {
  return (
    <div className="max-w-[1400px] mt-3 px-24 py-8 mx-auto grid lg:grid-cols-4 rounded-[20px] gap-24 bg-white">
      {departments.map((department) => (
        <Card
          key={department.id}
          image={department.image}
          title={department.name}
          buttonText="1 Member"
        />
      ))}
    </div>
  );
};

export default Department;
