import StudentCard from './components/StudentCard.tsx';

const students = [
  {
    name: 'Ayesha Khan',
    grade: 'A+',
    image: './public/Ayesha khan.jpg',
  },
  {
    name: 'Ahmed Ali',
    grade: 'A',
    image: './public/Ahmed Ali.png',
  },
  {
    name: 'Fatima Noor',
    grade: 'B+',
    image: './public/Fatima Noor.png',
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-500 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Cards</h1>
      <div className="flex flex-wrap justify-center">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            grade={student.grade}
            image={student.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
