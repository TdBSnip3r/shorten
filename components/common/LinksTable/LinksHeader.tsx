import React from "react";

const LinksHeader: React.FC = () => (
  <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
    <tr>
      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
        Original URL
      </th>
      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
        Short URL
      </th>
      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
        Azioni
      </th>
    </tr>
  </thead>
);

export default LinksHeader; 