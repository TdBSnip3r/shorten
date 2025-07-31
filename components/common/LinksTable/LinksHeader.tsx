import React from "react";

const LinksHeader: React.FC = () => (
  <thead className="border-b border-gray-200">
    <tr>
      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider text-white">
        Original URL
      </th>
      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider text-white">
        Short URL
      </th>
      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider text-white">
        Azioni
      </th>
      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider text-white">
        Created At
      </th>
    </tr>
  </thead>
);

export default LinksHeader; 