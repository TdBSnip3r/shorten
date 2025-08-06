import React from "react";
import { useSlugTableStore } from "@/stores/SlugTableStore";

const pageSizeOptions = [ 5, 10, 25, 50, 100];

const SlugPagination: React.FC = () => {
    const { page, limit, setPage, setLimit, totalPage } = useSlugTableStore();

    return (
        <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <span className="text-sm text-white">Mostra</span>
                    <select
                        className="border border-gray-300 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150 cursor-pointer"
                        value={limit}
                        onChange={e => setLimit(Number(e.target.value))}
                    >
                        {pageSizeOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                    <span className="text-sm text-white">per pagina</span>
                </div>
                
                <div className="flex items-center gap-2">
                    <button
                        className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed enabled:cursor-pointer transition-colors duration-150"
                        onClick={() => setPage(page - 1)}
                        disabled={page <= 1}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <span className="px-3 py-1.5 text-sm font-medium text-white rounded-md border border-gray-300">
                        Pagina {page} di {totalPage}
                    </span>
                    
                    <button
                        className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed enabled:cursor-pointer transition-colors duration-150"
                        onClick={() => setPage(page + 1)}
                        disabled={page >= totalPage}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SlugPagination; 