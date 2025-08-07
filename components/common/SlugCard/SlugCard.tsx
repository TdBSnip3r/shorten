import React from 'react';
import { FindSlugRequest } from '@/backend/types/api-types';
import CheckIcon from './CheckIcon';
import XMarkIcon from './XMarkIcon';
import SlugCardSkeleton from './SlugCardSkeleton';

interface SlugCardProps {
  slugData: FindSlugRequest;
  isLoading: boolean;
}

const SlugCard = ({ slugData, isLoading }: SlugCardProps) => {
  
    if (isLoading) {
    return <SlugCardSkeleton />;
  }

  const { slug } = slugData;

  return (
    <div className="flex items-center rounded-lg border border-white bg-transparent p-4 text-white">
      <h2 className="text-xl font-bold">{slug.slug}</h2>
      
      <div className="ml-6 flex items-center space-x-6">
        <div className="flex items-center">
          {slug.isAvailable ? (
            <CheckIcon className="h-5 w-5 text-green-400" />
          ) : (
            <XMarkIcon className="h-5 w-5 text-red-400" />
          )}
          <span className="ml-2 text-sm">
            {slug.isAvailable ? 'Disponibile' : 'Non disponibile'}
          </span>
        </div>

        {slug.isBuyable && (
          <>
            <div className="flex items-center">
              <CheckIcon className="h-5 w-5 text-green-400" />
              <span className="ml-2 text-sm">Acquistabile</span>
            </div>
            <div>
              <span className="text-sm font-semibold">
                ${slug.price.toFixed(2)}
              </span>
            </div>
          </>
        )}
      </div>

      <div className="ml-auto">
        {slug.isBuyable && (
          <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
            Buy now
          </button>
        )}
      </div>
    </div>
  );
};

export default SlugCard;
