import React from "react";

const LinksHeader: React.FC = () => (
  <thead>
    <tr className="bg-gray-50">
      <th className="px-4 py-3 font-semibold text-gray-700">Original URL</th>
      <th className="px-4 py-3 font-semibold text-gray-700">Short URL</th>
      <th className="px-4 py-3 font-semibold text-gray-700">Azioni</th>
    </tr>
  </thead>
);

export default LinksHeader; 