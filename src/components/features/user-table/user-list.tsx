import React, { useState } from 'react';

interface UserProp {
    users: { name: string }[];
}

const UserList = ({ users }: UserProp) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentBatch, setCurrentBatch] = useState(0);
    const itemsPerPage = 5;
    const buttonsPerBatch = 5;

    const currentItems = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const totalPages = Math.ceil(users.length / itemsPerPage);
    const totalBatches = Math.ceil(totalPages / buttonsPerBatch);

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages)
        {
            setCurrentPage(pageNumber);
        }
    };

    const handleNextBatch = () => {
        if (currentBatch < totalBatches - 1) {
            setCurrentBatch(currentBatch + 1);
        }
    };

    const handlePrevBatch = () => {
        if (currentBatch > 0) {
            setCurrentBatch(currentBatch - 1);
        }
    };

    const startPage = currentBatch * buttonsPerBatch + 1;
    const endPage = Math.min(startPage + buttonsPerBatch - 1, totalPages);

    return (
        <div className="flex flex-col items-center py-4">
            <div className="overflow-x-auto z-50 relative justify-center">
                <table className="min-w-100 bg-white border border-black text-black">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Name(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((user, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{user.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex flex-row items-center">
                {currentBatch > 0 && (
                    <button
                        className="px-4 py-2 mx-1 border rounded bg-blue-500 text-white hover:bg-blue-700"
                        onClick={handlePrevBatch}
                    >
                        &lt;
                    </button>
                )}
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                    <button
                        key={startPage + index}
                        className={`px-4 py-2 mx-1 border rounded ${currentPage === startPage + index ? 'bg-blue-500 text-white' : 'bg-black text-white hover:bg-gray-700'}`}
                        onClick={() => handlePageChange(startPage + index)}
                    >
                        {startPage + index}
                    </button>
                ))}
                {currentBatch < totalBatches - 1 && (
                    <button
                        className="px-4 py-2 mx-1 border rounded bg-blue-500 text-white hover:bg-blue-700"
                        onClick={handleNextBatch}
                    >
                        &gt;
                    </button>
                )}
            </div>
        </div>
    );
};

export default UserList;