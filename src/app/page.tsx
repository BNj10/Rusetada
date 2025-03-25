"use client";

import { Navigation } from "@/components/common/nav-bar/page";
import { Toast } from "@/components/common/toast/page";
import List from "@/components/features/user-table/user-list";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Footer  from "@/components/common/footer/footer";
import { db } from "@/firebase-config";
import { useState } from "react";

async function addUsers(name: string) {
  try {
    await addDoc(collection(db, "random"), {
      name: name,
    });
  } catch {
    console.log("Failed to add name");
  }
}

async function fetchUsers() {
  try {
    const querySnapshot = await getDocs(collection(db, "random"));
    const users = querySnapshot.docs.map((doc) => ({
      name: doc.data().name,
    }));
    return users;
  } catch {
    console.log("Failed to fetch users");
    return [];
  }
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Home() {
  const [showToast, setShowToast] = useState(false);
  const [showList, setShowList] = useState(false);
  const [msg, setMsg] = useState('');
  const [users, setUsers] = useState<{ name: string }[]>([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState('See list');

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const fetchRandom = async () => {     
  try {
    const users = await fetchUsers();
    setUsers(users);
    setLoading(false);
  } catch {
    setMsg('Failed to fetch users');
    handleShowToast();
    setLoading(false);
    }
  };

  const addUser = async () => {
    if (name) {
      try {

        setLoading(true);
        const newName = capitalizeFirstLetter(name);
        await fetchUsers();
        await handleRedundance(name);
        await addUsers(newName);
        setMsg(`${name} added successfully`);
        setName('');
        setUsers((prevUsers) => [...prevUsers, { name: newName }]);
        handleShowToast();
        setLoading(false);

      } 
      catch 
      {
        handleShowToast();
        setLoading(false);
      }
    } 
    else 
    {
      setShowToast(false);
    }
  };

  const handleShowList = async() => {
    try {
      if (showList) 
      {
        setShowList(false);
        setButtonText('See list');
      } 
      else 
      {
        setLoading(true);
        setButtonText('Hide list');
        await fetchRandom();
        setMsg('Names retrieved successfully!');
        handleShowToast();
        setShowList(true);
      }
    } 
    catch 
    {
      setMsg('Failed to fetch users');
      handleShowToast();
    }
  };

  const handleRedundance = async(name : string) =>
  {
    const user = users.find((user) => user.name === name);
    if(user)
    {
      setMsg('Name already exists');
      handleShowToast();
      throw new Error('Name already exists.');
    }
  }

  return (
    <div
      style={{
        backgroundImage: "url('/people.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navigation />
      <div>
        <section className="h-screen w-screen flex flex-row justify-center items-center">
          <div className="flex flex-col bg-gray-100 shadow-md rounded-lg p-15 text-black">
            <h1 className="text-3xl font-bold">Join Us!</h1>
            <p>Share your name and be random.</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-2 p-2 border rounded text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-900"
              onClick={addUser}
            >
              Submit
            </button>
            <button
              className="mt-4 bg-gray-600 text-white p-2 rounded hover:bg-gray-900"
              onClick={handleShowList}
            >
              {buttonText}
            </button>
          </div>
        </section>
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="loader">Loading...</div>
          </div>
        )}
        {showList && !loading && <List users={users} />}
      </div>
      {showToast && (
        <Toast
          message={msg}
          onClose={() => setShowToast(false)}
        />
      )}
      <Footer />
    </div>
  );
}