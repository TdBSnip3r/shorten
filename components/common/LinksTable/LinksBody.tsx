import { deleteShortlink } from "@/backend/api/shortlinks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import LinksTableNoElementBanner from "./LinksTableNoElementBanner";
import LinksTableShortUrl from "./LinksTableShortUrl";
import CopyButton from "../ShrtButton/CopyButton";
import DeleteButton from "../ShrtButton/DeleteButton";

interface Link {
    id: string;
    url: string;
    shortUrl: string;
    createdAt?: string;
}

const LinksBody: React.FC<{ links: Link[] }> = ({ links }) => {
    
    const queryClient = useQueryClient()
    const { mutate: deleteShortlinkMutation, isPending, data } = useMutation({
        mutationFn: (shortlink: string) => deleteShortlink({ shortlink }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['shortlinks'] })
            toast.success("Link eliminato con successo")
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    return (
        <tbody className="bg-white divide-y divide-gray-100">
            {links.length === 0 ? (
                <tr>
                    <td colSpan={3} className="px-6 py-12 text-center">
                        <LinksTableNoElementBanner />
                    </td>
                </tr>
            ) : (
                links.map((link, index) => (
                    <tr key={link.id} className="hover:bg-gray-50 transition-colors duration-150 ease-in-out">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="max-w-xs">
                                <p className="text-sm text-gray-900 truncate" title={link.url}>
                                    {link.url}
                                </p>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <LinksTableShortUrl shortUrl={link.shortUrl} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex space-x-3">
                                <CopyButton textToCopy={link.shortUrl} />
                                <DeleteButton onDeleteRequest={() => deleteShortlinkMutation(link.shortUrl)} />
                            </div>
                        </td>
                    </tr>
                ))
            )}
        </tbody>
    )
}
export default LinksBody; 