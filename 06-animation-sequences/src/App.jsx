import React from 'react';
import AnimatedText from './components/common/AnimatedText';
import AnimationSequcence from './components/common/AnimationSequcence';

const App = () => {
  return (
    <div className="flex flex-col gap-16 min-h-screen items-center justify-center bg-neutral-900">
      <AnimatedText/>
      <AnimationSequcence/>
    </div>
  );
};

export default App;
App;
