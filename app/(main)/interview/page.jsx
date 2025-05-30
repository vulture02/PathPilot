import { getAssessments } from '@/actions/interview';
import React from 'react'


import QuizList from './_components/quiz-list';
import Statscards from './_components/stats-cards';
import PerformanceChart from './_components/performance-chart';



const InterviewPage = async () => {
  const assessments = await getAssessments();

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">
          Interview Preparation
        </h1>
      </div>
      <div className="space-y-6">
        <Statscards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
}

export default InterviewPage