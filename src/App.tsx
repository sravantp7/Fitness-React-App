import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';

function App() {
  const [selectedPage, setSelectedPage] = useState<string>('home');
  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;