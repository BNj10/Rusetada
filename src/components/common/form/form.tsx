import React from 'react';

export const Form = () => {
    return (
        <div className="flex flex-col bg-gray-100 shadow-md rounded-lg p-15">
            <h2 className="text-3xl font-bold">Join Us</h2>
            <input type="text" placeholder="Enter your name" className="mt-2 p-2 border rounded"/>
            <button className="mt-4 bg-blue-800 text-white p-2 rounded">Submit</button>
        </div>
    );
};