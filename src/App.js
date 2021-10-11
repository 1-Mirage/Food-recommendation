import React, { useState } from "react";
import "./styles.css";
const foodDB = {
  Indian: [
    {
      name: "Matar Paneer",
      rating: "4/5",
      description:
        "Mattar paneer is a vegetarian North Indian dish and Punjabi dish consisting of peas and paneer in a tomato based sauce, spiced with garam masala. It is often served with rice and an Indian type of bread."
    },
    {
      name: "Aloo Gobi",
      rating: "3.5/5",
      description:
        "Aloo gobi is a vegetarian dish from the Indian subcontinent made with potatoes, cauliflower, and Indian spices. It is popular in Indian and Pakistani cuisines. It is yellowish in colour due to the use of turmeric, and occasionally contains kalonji and curry leaves."
    },
    {
      name: "Butter Chicken",
      rating: "4/5",
      description:
        "Butter chicken or murgh makhani is a curry of chicken in a spiced tomato, butter and cream sauce. It originated in the Indian subcontinent as a curry. It is similar to chicken tikka masala, which uses a tomato paste."
    }
  ],

  Italian: [
    {
      name: "Risotto Alla Milanese",
      rating: "5/5",
      description:
        "This risotto alla Milanese, from Lidia Bastianich, is a classic Italian recipe made with Arborio rice, beef stock, saffron, onions, shallots, butter, white wine, and Parmesan cheese."
    },
    {
      name: "Spaghetti Alla Carbonara",
      rating: "4.5/5",
      description:
        "Carbonara is an Italian pasta dish from Rome made with eggs, hard cheese, cured pork, and black pepper."
    },
    {
      name: "Panzenella",
      rating: "4.2/5",
      description:
        "Panzanella or panmolle is a Tuscan chopped salad of soaked stale bread, onions and tomatoes that is popular in the summer. It often includes cucumbers, sometimes basil and is dressed with olive oil and vinegar."
    }
  ],
  Mexican: [
    {
      name: "Chilaquiles",
      rating: "3.5/5",
      description:
        "Chilaquiles is a traditional Mexican breakfast dish consisting of corn tortillas cut into quarters and lightly fried."
    },
    {
      name: "Tacos",
      rating: "5/5",
      description:
        "A taco is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling. "
    },
    {
      name: "Machaca",
      rating: "3/5",
      description:
        "Machaca Spanish: is a traditionally dried meat, usually spiced beef or pork, that is rehydrated and then used in popular local cuisine in Northern Mexico and the Southwestern United States. "
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Indian");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 goodfood </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite food. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(foodDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedGenre].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
              <div style={{ fontSize: "smaller" }}> {food.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
