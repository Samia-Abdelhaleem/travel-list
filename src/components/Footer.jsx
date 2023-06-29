import React from "react";

const Footer = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <div className="footer">
      <em>
        {isNaN(percentage)
          ? `Start adding some items to your packing list 🚀`
          : percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You
        have ${numItems} items on your list, and you already packed ${numPacked}
        (${percentage}%)`}
      </em>
    </div>
  );
};

export default Footer;
