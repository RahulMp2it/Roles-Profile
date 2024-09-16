import React, { useState } from "react";
import SubDepartCard from "../../../subUtils/SubDepartCard";
import { useNavigate } from "react-router-dom";

const departments = [
  {
    id: 1,
    name: "R&D Department",
    depart: "Position",
    image: "image8.png",
  },
  {
    id: 2,
    name: "R&D Department",
    depart: "Profile  ",
    image: "image4.png",
  },
  {
    id: 3,
    name: "R&D Department",
    depart: "Employee",
    image: "image7.png",
  },
];

function SubDepartment() {
  const navigate = useNavigate();
  const [activeCardId, setActiveCardId] = useState(null);

  const handleClick = (id) => {
    setActiveCardId(id);
    navigate("/RDPosition");
  };

  return (
    <div className="max-w-[1400px] mt-3 px-24 py-8 mx-auto grid lg:grid-cols-4 rounded-[20px] gap-24 bg-white">
      {departments.map((department) => (
        <SubDepartCard
          key={department.id}
          id={department.id}
          image={department.image}
          title={department.name}
          depart={department.depart}
          buttonText="1 Member"
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default SubDepartment;
