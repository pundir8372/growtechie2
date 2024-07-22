// components/OnlineLearningSteps.tsx

const OnlineLearningSteps = () => {
  return (
    <div className="py-20">
      <h2 className="text-center text-4xl font-bold mb-16">
        MAIN STEPS
      </h2>
      <h3 className="text-center text-6xl font-bold text-purple mb-16">
        Online learning process
      </h3>
      <div className="flex flex-col md:flex-row justify-around items-start">
        <div className="mb-10 md:mb-0">
          <h4 className="text-2xl font-bold mb-2">01</h4>
          <h5 className="text-xl font-bold mb-2">Online Live Sessions</h5>
          <p>Industries Experts will take all these live sessions every week. Instructor will be same for the whole course.</p>
        </div>
        <div className="mb-10 md:mb-0">
          <h4 className="text-2xl font-bold mb-2">02</h4>
          <h5 className="text-xl font-bold mb-2">Projects Building</h5>
          <p>Live project building as well as the course is designed in such a way, You will learn theory in building projects. Isn’t it great?</p>
        </div>
        <div className="mb-10 md:mb-0">
          <h4 className="text-2xl font-bold mb-2">03</h4>
          <h5 className="text-xl font-bold mb-2">Interview & Coding Prep</h5>
          <p>There will be 1 or 2 sessions dedicated to your coding prep and Interviews preparations.</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-2">04</h4>
          <h5 className="text-xl font-bold mb-2">Passing Test</h5>
          <p>Final test for 2 hours. Each student needs to complete the exam and pass the test. We will give you a passing certification.</p>
        </div>
      </div>
    </div>
  );
};

export default OnlineLearningSteps;
