interface TestButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    urlToTest: string;
}

const TestButton = ({ urlToTest, ...props }: TestButtonProps) => {
    const handleTestLink = () => {
        window.open(urlToTest, '_blank');
    };

    return (
        <button
            {...props}
            onClick={handleTestLink}
            className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-all duration-150 cursor-pointer"
            title="Testa il link"
        >
            <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
            </svg>
        </button>
    )
}

export default TestButton; 