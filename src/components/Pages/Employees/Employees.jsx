import React from "react";
import EmployeesCard from "../../../utils/EmployeesCard";

const employees = [
  {
    id: 1,
    name: "UI/UX Designer",
    image: "image.png",
    depart: "Marketing Department",
    position: "Executive",
  },
  {
    id: 2,
    name: "UI/UX Designer",
    image: "image1.png",
    depart: "Marketing Department",
    position: "Executive",
  },
  {
    id: 3,
    name: "UI/UX Designer",
    image: "image7.png",
    depart: "Marketing Department",
    position: "Executive",
  },
  {
    id: 4,
    name: "UI/UX Designer",
    image: "image3.png",
    depart: "Marketing Department",
    position: "Executive",
  },
  {
    id: 5,
    name: "UI/UX Designer",
    image: "image4.png",
    depart: "Marketing Department",
    position: "Executive",
  },
  {
    id: 6,
    name: "UI/UX Designer",
    image: "image5.png",
    depart: "Marketing Department",
    position: "Executive",
  },
  {
    id: 7,
    name: "UI/UX Designer",
    image: "image.png",
    depart: "Marketing Department",
    position: "Executive",
  },
  {
    id: 8,
    name: "UI/UX Designer",
    image: "image8.png",
    depart: "Marketing Department",
    position: "Executive",
  },
  {
    id: 9,
    name: "UI/UX Designer",
    image: "image1.png",
    depart: "Marketing Department",
    position: "Executive",
  },
  {
    id: 10,
    name: "UI/UX Designer",
    image: "image4.png",
    depart: "Marketing Department",
    position: "Executive",
  },
];

function Employees() {
  return (
    <div className="max-w-[1400px] mt-3 px-24 py-8 mx-auto grid lg:grid-cols-4 rounded-[20px] gap-24 bg-white">
      {employees.map((employee) => (
        <EmployeesCard
          key={employee.id}
          image={employee.image}
          title={employee.name}
          depart={employee.depart}
          position={employee.position}
        />
      ))}
    </div>
  );
}

export default Employees;
