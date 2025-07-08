import React from "react";
import { Link } from "@/types/Links";


const LinksBody: React.FC<{ links: Link[] }> = ({ links }) => (
    <tbody>
        {links.length === 0 ? (
            <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-gray-400">Nessun link trovato.</td>
            </tr>
        ) : (
            links.map((link) => (
                <tr key={link.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3 break-all max-w-xs">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
                    </td>
                    <td className="px-4 py-3 text-blue-600 underline break-all max-w-xs">
                        <a href={link.shortUrl} target="_blank" rel="noopener noreferrer">{link.shortUrl}</a>
                    </td>
                    <td className="px-4 py-3">{/* Qui puoi aggiungere pulsanti per copia, elimina, ecc. */}</td>
                </tr>
            ))
        )}
    </tbody>
);

export default LinksBody; 