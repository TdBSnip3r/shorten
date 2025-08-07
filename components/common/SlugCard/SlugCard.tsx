import React from 'react';
import { FindSlugRequest } from '@/backend/types/api-types';
import CheckIcon from './CheckIcon';
import XMarkIcon from './XMarkIcon';
import SlugCardSkeleton from './SlugCardSkeleton';
import toast from 'react-hot-toast';

interface SlugCardProps {
  slugData: FindSlugRequest;
  isLoading: boolean;
}

const SlugCard = ({ slugData, isLoading }: SlugCardProps) => {

  if (isLoading) {
    return <SlugCardSkeleton />;
  }

  const { slug } = slugData;

  const buyRequest = async () => {
    toast.error('This feature is not available yet');
  }

  return (
    <div className="flex items-center rounded-lg border border-white bg-transparent p-4 text-white">
      <h2 className="text-xl font-bold">{slug.slug}</h2>

      <div className="ml-6 flex flex items-center space-x-6">

        <div className="flex flex-col items-start gap-2">

          <div className="flex items-center">
            {!slug.isUsed ? <CheckIcon className="h-5 w-5 text-green-400" /> : <XMarkIcon className="h-5 w-5 text-red-400" />}
            <span className="ml-2 text-sm">
              {slug.isUsed ? 'Used' : 'Available'}
            </span>
          </div>

          <div className="flex items-center">
            {slug.isYour ? <CheckIcon className="h-5 w-5 text-green-400" /> : <XMarkIcon className="h-5 w-5 text-red-400" />}
            <span className="ml-2 text-sm">
              {slug.isYour ? 'This is your slug' : 'This is not your slug'}
            </span>
          </div>

          <div className="flex items-center">
            {slug.isBuyable ? <CheckIcon className="h-5 w-5 text-green-400" /> : <XMarkIcon className="h-5 w-5 text-red-400" />}
            <span className="ml-2 text-sm">
              {slug.isBuyable ? `Buyable for $${slug.price.toFixed(2)}` : 'Not buyable'}
            </span>
          </div>
        </div>

      </div>

      <div className="ml-auto">
        {slug.isBuyable && !slug.isYour && (
          <button onClick={buyRequest} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
            Buy now
          </button>
        )}
      </div>
    </div>
  );
};

export default SlugCard;
