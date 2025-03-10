"use client";

import React, { useState } from 'react';

export const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', query);
    };

    return (
        <div className="flex items-center border border-gray-300 rounded-md">
            <input
                type="text"
                className="px-4 py-2 w-full"
                placeholder="Search for randomS"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                className="bg-blue-800 text-white px-4 py-2 rounded-r-md"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};