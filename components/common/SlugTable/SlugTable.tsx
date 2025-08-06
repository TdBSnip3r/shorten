import React from "react";
import SlugTableNoElementBanner from "./SlugTableNoElementBanner";
import SlugHeader from "./SlugHeader";
import SlugBody from "./SlugBody";
import { SlugResponse } from "@/backend/types/api-types";
import SlugPagination from "./SlugPagination";

interface SlugTableProps {
  slugs: SlugResponse[];
}

const SlugTable: React.FC<SlugTableProps> = ({ slugs }) => {

  if (!slugs || slugs.length === 0) {
    return <SlugTableNoElementBanner />;
  }

  return (
    <div className="rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <SlugHeader />
          <SlugBody slugs={slugs} />
        </table>
      </div>
      <SlugPagination />
    </div>
  );
};

export default SlugTable;