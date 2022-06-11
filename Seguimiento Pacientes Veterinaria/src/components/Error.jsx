const Error = ({ children }) => {
    return (
        <div className="bg-red-600 rounded p-3 mb-5">
            <p className="text-white text-center uppercase font-bold">
                {children}
            </p>
        </div>
    );
};

export default Error;
