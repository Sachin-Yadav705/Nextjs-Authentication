"use client";
import axios from "axios";

import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";
export default function ProfilePage() {
  const router = useRouter();

  const logout = async () => {
    try {
      console.log("logout begins");
      await axios.get("/api/users/logout");

      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div
      className="flex flex-col items-center
        justify-center min-h-screen py-2"
    >
      <h3>Profile</h3>
      <hr />
      <p>Profile Page</p>
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}
