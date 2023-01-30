import React, { useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Save the name and email to the server or local storage
    // Redirect to the desired route
    router.push('/pdf/2023-01-09_Nealle Page CV.pdf ');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-medium mb-4">Please enter your name and email</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border border-gray-400 p-2 rounded-lg"
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-400 p-2 rounded-lg"
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 py-2 px-4 rounded-lg text-white font-medium mr-2"
              type="submit"
            >
              Submit
            </button>
            <button
              className="bg-gray-300 py-2 px-4 rounded-lg text-gray-700 font-medium"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
