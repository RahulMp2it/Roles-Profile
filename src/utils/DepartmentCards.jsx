const departments = [
  "R&D Department",
  "Business Management Department",
  "Marketing Department",
  "Sales Department",
  "Operation Department",
  "Accounts Department",
  "HR Department",
  "IT & Maintenance Department",
  "Rahul Department",
];

const Card = ({ department }) => (
  <div className="h-[240px] w-[200px] m-5 rounded-[18px] bg-[#F4F9FD]">
    <div className="flex flex-col items-center pt-[45px] pb-10">
      <img
        className="w-[63px] h-[67px] mb-3 rounded-full shadow-lg"
        src="image.png"
        alt="Department image"
      />
      <h6 className="mb-1 text-[15px] font-nunito text-[#0A1629] dark:text-white">
        {department}
      </h6>
      <div className="flex mt-4 md:mt-6">
        <a
          href="#"
          className="inline-flex items-center border border-gray-500 px-4 py-2 text-sm font-nunito text-center text-gray-500 bg-white rounded-[8px] focus:ring-4 focus:outline-none"
        >
          1 Member
        </a>
      </div>
    </div>
  </div>
);

const DepartmentCards = () => (
  <div className="fixed top-40 me-3 ms-[215px] py-[30px] w-[85%] bg-white rounded-[18px]">
    <div className="max-w-[1100px] mx-auto grid lg:grid-cols-4 lg:gap-4 bg-white">
      {departments.map((department, index) => (
        <Card key={index} department={department} />
      ))}
    </div>
  </div>
);

export default DepartmentCards;
