import React from "react";
import SlugTableNoElementBanner from "./SlugTableNoElementBanner";
import SellSlugButton from "../ShrtButton/SellSlug";
import CopyButton from "../ShrtButton/CopyButton";
import { SlugResponse } from "@/backend/types/api-types";

interface SlugBodyProps {
  slugs: SlugResponse[];
}

const SlugBody: React.FC<SlugBodyProps> = ({ slugs }) => {
  return (
    <tbody className="divide-y divide-gray-100">
      {slugs.length === 0 ? (
        <tr>
          <td colSpan={2} className="px-6 py-12 text-center">
            <SlugTableNoElementBanner />
          </td>
        </tr>
      ) : (
        slugs.map((slug, index) => (
          <tr key={index} className="transition-colors duration-150 ease-in-out">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="max-w-xs">
                <p className="text-sm text-white truncate" title={slug.slug}>
                  {slug.slug}
                </p>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center text-white">
              <CopyButton textToCopy={`${slug}`} optionalText="Slug copiato" />
              <SellSlugButton onSellRequest={() => console.log(`Richiesta di vendita per: ${slug}`)} />
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
};

export default SlugBody;