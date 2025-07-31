interface LinksTableShortUrlProps {
    shortUrl : string;
}

const LinksTableShortUrl = ({ shortUrl }: LinksTableShortUrlProps) => {
    return (
        <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold hover:text-blue-800 font-medium transition-colors duration-150 ease-in-out"
        >
            {shortUrl}
        </a>
    )
}

export default LinksTableShortUrl;