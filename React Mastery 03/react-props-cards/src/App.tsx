import Card from './components/Card';
import './App.css';

const cardData = [
  {
    title: 'Web Development',
    description: 'Build stunning websites using modern tools.',
    image: '/Web_Development.jpg',
  },
  {
    title: 'Machine Learning',
    description: 'Explore AI and machine learning models.',
    image: '/Machine Learning.jpg',
  },
  {
    title: 'App Design',
    description: 'Design creative mobile and desktop apps.',
    image: '/App Design.jpg',
  },
  {
    title: 'Cyber Security',
    description: 'Protect systems from cyber threats.',
    image: '/Cyber Security.jpg',
  },
  {
    title: 'Cloud Computing',
    description: 'Leverage the power of cloud infrastructure.',
    image: '/Cloud Computing.jpg',
  },
];

function App() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        5 Props Cards Assignment
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {cardData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
      <p className='text-4xl font-bold text-center text-blue-800 mb-10 mt-10'>Created by: <a href="https://github.com/SadiqKhan-Dev" className="text-blue-500 hover:underline">Sadiq khan</a></p>
    </div>
  );
}

export default App;