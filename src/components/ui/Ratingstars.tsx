import React from "react";

interface RatingStarsProps {
  rating: number; // A number between 0 and 5, including decimals
  color?: string; // Custom color for the filled stars
}

const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  color = "text-yellow-500",
}) => {
  // Helper function to render stars
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // Full star
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="none"
            className={`w-6 h-6 ${color}`}
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else if (i - rating < 1 && i - rating > 0) {
        // Half star
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="none"
            className={`w-6 h-6 ${color}`}
          >
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="gray" />
              </linearGradient>
            </defs>
            <path
              fill="url(#half)"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        );
      } else {
        // Empty star
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill="gray"
            viewBox="0 0 24 24"
            stroke="none"
            className="w-6 h-6"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default RatingStars;
