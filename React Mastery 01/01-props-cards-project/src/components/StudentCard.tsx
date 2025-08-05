import React from 'react';

type StudentCardProps = {
  name: string;
  grade: string;
  image: string;
};

const StudentCard: React.FC<StudentCardProps> = ({ name, grade, image }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-72 m-4 transition-transform hover:scale-105 flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-1">Grade: {grade}</p>
      </div>
    </div>
  );
};

export default StudentCard;
