import React from 'react';

const SlugCardSkeleton = () => {
  return (
    <div className="flex animate-pulse items-center rounded-lg border border-gray-700 bg-transparent p-4">
      {/* Slug Name Skeleton */}
      <div className="h-6 w-28 rounded bg-gray-700"></div>

      <div className="ml-6 flex items-center space-x-6">
        {/* Availability Skeleton */}
        <div className="flex items-center">
          <div className="h-5 w-5 rounded-full bg-gray-700"></div>
          <div className="ml-2 h-4 w-24 rounded bg-gray-700"></div>
        </div>

        {/* Buyable Skeleton */}
        <div className="flex items-center">
          <div className="h-5 w-5 rounded-full bg-gray-700"></div>
          <div className="ml-2 h-4 w-20 rounded bg-gray-700"></div>
        </div>

        {/* Price Skeleton */}
        <div>
          <div className="h-4 w-12 rounded bg-gray-700"></div>
        </div>
      </div>

      {/* Button Skeleton */}
      <div className="ml-auto">
        <div className="h-10 w-24 rounded-md bg-gray-700"></div>
      </div>
    </div>
  );
};

export default SlugCardSkeleton;
