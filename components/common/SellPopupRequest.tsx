'use client';
import React, { useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SellFormSchema, FORM_FIELDS } from '@/forms/SellFormSchema';
import * as z from 'zod/v4';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SetPriceResponse, SlugResponse } from '@/backend/types/api-types';
import { setPrice } from '@/backend/api/slugs';

type SellForm = z.infer<typeof SellFormSchema>;

interface SellPopupRequestProps {
  slug: SlugResponse;
  isOpen: boolean;
  onClose: () => void;
  onSellRequestDone?: (slug: SlugResponse, price: number) => void;
  onSellRequestFailed?: (slug: SlugResponse, error: string) => void;
}

const SellPopupRequest = ({
  slug,
  isOpen,
  onClose,
  onSellRequestDone,
  onSellRequestFailed
}: SellPopupRequestProps) => {

  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<SellForm>({
    resolver: zodResolver(SellFormSchema),
    mode: 'onChange'
  });

  const queryClient = useQueryClient()
  const { mutate: sellSlug, isPending } = useMutation({
    mutationFn: (value: SellForm) => setPrice(slug.slug, value.price),
    onSuccess: (data: SetPriceResponse) => {
      onSellRequestDone?.(slug, data.price);
      queryClient.invalidateQueries({ queryKey: ['mySlugs'] });
      queryClient.invalidateQueries({ queryKey: ['findSlug'] });
    },
    onError: (error) => {
      onSellRequestFailed?.(slug, error.message);
    }
  });

  const onSubmit: SubmitHandler<SellForm> = async (value: SellForm) => sellSlug(value);

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Sell Slug: {slug.slug}
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
                {...register(field.name as keyof SellForm, { valueAsNumber: true })}
                placeholder={field.placeholder}
                step="0.01"
                min="0"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              />
              {errors[field.name as keyof SellForm] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name as keyof SellForm]?.message}
                </p>
              )}
            </div>
          ))}

          <div className="flex justify-end space-x-3">
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
              Confirm Sale
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellPopupRequest;
