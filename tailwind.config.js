/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "hsl(233, 47%, 7%)",
        card: "hsl(244, 38%, 16%)",
        accent: "hsl(277, 64%, 61%)",
      },
    },
    width: {
      card: "327px",
      "card-lg": "1110px",
    },
    height: {
      card: "780px",
      "card-lg": "446px",
    },
    fontFamily: {
      lex: "'Lexend Deca', sans-serif",
      inter: " 'Inter', sans-serif",
    },
    fontSize: {
      h1: ["28px", "32px"],
      h2: ["24px", "29px"],
      p: ["15px", "25px"],
      p2: ["12px", "25px"],
      "h1-lg": ["36px", "44px"],
  
  
    },
  },
  plugins: [],
};
