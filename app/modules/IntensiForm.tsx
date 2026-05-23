"use client";
import React, { useState } from "react";

export default function IntensiForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    // Replace with real submit logic (API call) as needed
    console.log("Intensi submitted:", { name, phone, text });
    setName("");
    setPhone("");
    setText("");
    alert("Intensi terkirim");
  }

  return (
    <form className="ini mt-6 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-3">
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama"
            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
        />

        <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Nomor HP"
            type="tel"
            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
        />

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tulis intensi misa..."
          className="w-full min-h-[128px] p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none bg-white text-black"
        />

        <div className="flex items-center justify-end">
          <button
            type="submit"
            disabled={!text.trim()}
            className={`flex items-center space-x-2 flex-row px-4 py-1 rounded-full text-white ${text.trim() ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-200 cursor-not-allowed"}`}
          >
            <img src="/paper-plane.png" alt="" className="max-w-5 max-h-5 mr-2"/>
            Kirim
          </button>
        </div>
      </div>
    </form>
  );
}
