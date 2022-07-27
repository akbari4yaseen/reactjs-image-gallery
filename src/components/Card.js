import React from "react";

const Card = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <section className="rounded overflow-hidden shadow-lg sm:mx-2 xs:mx-2">
      <a href={image.largeImageURL}>
      <img
        src={image.webformatURL}
        alt={image.tags.split(",")[0]}
        className="w-full hover:opacity-80"
      />
      </a>
      <div className="px-6 py-4">
        <div className="font-bold text-teal-700 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1"
          >
            #{tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Card;
