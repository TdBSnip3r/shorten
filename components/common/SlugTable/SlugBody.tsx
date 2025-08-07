import React, { useCallback, useState } from "react";
import SlugTableNoElementBanner from "./SlugTableNoElementBanner";
import SellSlugButton, { SellSlugButtonMode } from "../ShrtButton/SellSlug";
import CopyButton from "../ShrtButton/CopyButton";
import SellPopupRequest from "../SellPopupRequest";
import EditPricePopupRequest from "../EditPricePopupRequest";
import { SlugResponse } from "@/backend/types/api-types";
import toast from "react-hot-toast";

interface SlugBodyProps {
  slugs: SlugResponse[];
}

const SlugBody: React.FC<SlugBodyProps> = ({ slugs }) => {
  const [isSellPopupOpen, setIsSellPopupOpen] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<SlugResponse | null>(null);

  const slugAdditionalInfo = useCallback((slug: SlugResponse) => {
    const priceLabel = slug.sellPrice == -1 ? 'Not for sale' : slug.sellPrice == 0 ? 'Free ($0)' : `$${slug.sellPrice.toFixed(2)}`;
    const isSellActionAvailable = slug.sellPrice == -1;
    return { priceLabel, isSellActionAvailable };
  }, []);

  // SELL POPUP
  const handleSellRequest = useCallback((slug: SlugResponse) => {
    setSelectedSlug(slug);
    setIsSellPopupOpen(true);
  }, []);

  const handleCloseSellPopup = useCallback(() => {
    setIsSellPopupOpen(false);
    setSelectedSlug(null);
  }, []);

  // EDIT PRICE POPUP
  const [isEditPricePopupOpen, setIsEditPricePopupOpen] = useState(false);

  const handleEditPriceRequest = useCallback((slug: SlugResponse) => {
    setSelectedSlug(slug);
    setIsEditPricePopupOpen(true);
  }, []);

  const handleCloseEditPricePopup = useCallback(() => {
    setIsEditPricePopupOpen(false);
    setSelectedSlug(null);
  }, []);


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
              {slugAdditionalInfo(slug).priceLabel}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center text-white">
              <CopyButton textToCopy={`${slug}`} optionalText="Slug copiato" />
              <SellSlugButton
                mode={slugAdditionalInfo(slug).isSellActionAvailable ? SellSlugButtonMode.SELL : SellSlugButtonMode.EDIT}
                onSellRequest={() => handleSellRequest(slug)}
                onEditSellPrice={() => handleEditPriceRequest(slug)}
              />
            </td>
          </tr>
        ))
      )}
      {selectedSlug && <SellPopupRequest
        slug={selectedSlug}
        isOpen={isSellPopupOpen}
        onClose={handleCloseSellPopup}
        onSellRequestDone={() => {
          toast.success("Slug solded successfully");
          setIsSellPopupOpen(false);
          setSelectedSlug(null);
        }}
      />}
      {selectedSlug && <EditPricePopupRequest
        slug={selectedSlug}
        isOpen={isEditPricePopupOpen}
        onClose={handleCloseEditPricePopup}
        onEditPriceDone={() => {
          toast.success("Price updated successfully");
          setIsEditPricePopupOpen(false);
          setSelectedSlug(null);
        }}
      />}
    </tbody>
  );
};

export default SlugBody;