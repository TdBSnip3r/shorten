import React from "react";
import LinksHeader from "./LinksHeader";
import LinksBody from "./LinksBody";
import LinksPagination from "./LinksPagination";
import { Link } from "@/types/Links";

interface LinksTableProps {
  links: Link[];
}

const LinksTable: React.FC<LinksTableProps> = ({ links }) => {
  return (
    <div className="rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <LinksHeader />
          <LinksBody links={links} />
        </table>
      </div>
      <LinksPagination />
    </div>
  );
};

export default LinksTable; 