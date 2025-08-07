'use client';
import React, { useCallback, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EditPriceFormSchema, FORM_FIELDS } from '@/forms/EditPriceFormSchema';
import * as z from 'zod/v4';
import { SetPriceResponse, SlugResponse } from '@/backend/types/api-types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setPrice } from '@/backend/api/slugs';

type EditPriceForm = z.infer<typeof EditPriceFormSchema>;

interface EditPricePopupRequestProps {
  slug: SlugResponse;
  currentPrice?: number;
  isOpen: boolean;
  onClose: () => void;
  onEditPriceDone?: (slug: string, price: number) => void;
  onEditPriceFailed?: (slug: string, error: string) => void;
}

const EditPricePopupRequest = ({ slug,isOpen,onClose,onEditPriceDone,onEditPriceFailed}: EditPricePopupRequestProps) => {
  
  const { register, handleSubmit, formState: { errors, isValid }, reset, setValue } = useForm<EditPriceForm>({
    resolver: zodResolver(EditPriceFormSchema),
    mode: 'onChange'
  });

  const queryClient = useQueryClient()
  const { mutate: setEditPrice, isPending } = useMutation({
    mutationFn: (value: EditPriceForm) => setPrice(slug.slug, value.price),
    onSuccess: (data: SetPriceResponse) => {
      onEditPriceDone?.(slug.slug, data.price);
      queryClient.invalidateQueries({ queryKey: ['mySlugs'] });
      queryClient.invalidateQueries({ queryKey: ['findSlug'] });
    },
    onError: (error) => {
      onEditPriceFailed?.(slug.slug, error.message);
    }
  });

  // Imposta il prezzo corrente quando il popup si apre
  useEffect(() => {
    if (isOpen && slug.sellPrice !== undefined) {
      setValue('price', slug.sellPrice >= 0 ? slug.sellPrice : 0);
    }
  }, [isOpen, slug.sellPrice, setValue]);

  const onSubmit: SubmitHandler<EditPriceForm> = async (value: EditPriceForm) => setEditPrice(value);
  const handleRemoveFromSale = async () => setEditPrice({ price: -1 });

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Edit Price: {slug.slug}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {FORM_FIELDS.map((field) => (
            <div key={field.name} className="mb-4">
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                {...register(field.name as keyof EditPriceForm, { valueAsNumber: true })}
                placeholder={field.placeholder}
                step="0.01"
                min="0"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              />
              {errors[field.name as keyof EditPriceForm] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name as keyof EditPriceForm]?.message}
                </p>
              )}
            </div>
          ))}

          <div className="flex justify-between space-x-3">
            <button
              type="button"
              onClick={handleRemoveFromSale}
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer"
            >
              Remove from Sale
            </button>

            <div className="flex space-x-3">
              <button
                type="button"
                onClick={handleClose}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!isValid}
                className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 cursor-pointer"
              >
                Update Price
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditPricePopupRequest;
