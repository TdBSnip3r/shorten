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
    <div className="overflow-x-auto rounded-xl shadow border border-gray-100">
      <table className="min-w-full w-full bg-white text-left">
        <LinksHeader />
        <LinksBody links={links} />
      </table>
      <LinksPagination />
    </div>
  );
};

export default LinksTable; 