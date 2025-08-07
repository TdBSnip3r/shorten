import React from "react";

const SlugHeader: React.FC = () => {
  return (
    <thead className="border-b border-gray-200">
      <tr>
        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider text-white">
          Nome Slug
        </th>
        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider text-white">
          Prezzo di vendita
        </th>
        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider text-white">
          Azioni
        </th>
      </tr>
    </thead>
  );
};

export default SlugHeader;