import React from "react";
import { useLinksTableStore } from "@/stores/LinksTableStore";

const pageSizeOptions = [5, 10, 25, 50, 100];

const LinksPagination: React.FC = () => {
    const { page, limit, setPage, setLimit, totalPage } = useLinksTableStore();

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4">
            <div className="flex items-center gap-2">
                <span className="text-gray-700">Mostra</span>
                <select
                    className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={limit}
                    onChange={e => setLimit(Number(e.target.value))}
                >
                    {pageSizeOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
                <span className="text-gray-700">per pagina</span>
            </div>
            <div className="flex items-center gap-4">
                <button
                    className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                    onClick={() => setPage(page - 1)}
                    disabled={page <= 1}
                >
                    &lt; Prev
                </button>
                <span className="font-semibold text-gray-700">
                    Pagina {page} di {totalPage}
                </span>
                <button
                    className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                    onClick={() => setPage(page + 1)}
                    disabled={page >= totalPage}
                >
                    Next &gt;
                </button>
            </div>
        </div>
    );
};

export default LinksPagination; 