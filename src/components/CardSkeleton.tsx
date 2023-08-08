import React from 'react';

interface CardSkeletonProps {
  count: number;
}

const CardSkeleton: React.FC<CardSkeletonProps> = ({ count }) => {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div key={index} className="w-1/4 p-4">
      <div className="animate-pulse bg-gray-300 h-32 rounded-lg"></div>
      <div className="mt-2 animate-pulse bg-gray-200 h-4 w-1/2"></div>
    </div>
  ));

  return <div className="flex flex-wrap">{skeletons}</div>;
};

export default CardSkeleton;
