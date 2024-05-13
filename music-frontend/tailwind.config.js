// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.js"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-gradient":
          "linear-gradient(to bottom right, #eb4559, #f78259)",
      },
    },
  },
  plugins: [require("tailwindcss-gradients")],
};
