import React from "react";

const Card = ({ user }) => {
  return (
    <div className="bg-white m-2 px-4 py-4 rounded-2xl w-80 h-80 flex flex-col items-center">
      
      <img
        src={user.profile}
        alt={user.name}
        className="w-24 h-24 rounded-full object-cover mb-3"
      />

      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-gray-500 text-sm">{user.title}</p>

      <div className="flex gap-4 mt-4 text-sm">
        <span>❤️ {user.likeCount}</span>
        <span>📝 {user.postCount}</span>
        <span>👁 {user.viewCount}</span>
      </div>

      <button
        className={`mt-4 px-4 py-2 rounded-xl cursor-pointer text-white ${
          user.followed ? "bg-gray-500" : "bg-blue-600"
        }`}
      >
        {user.followed ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default Card;
