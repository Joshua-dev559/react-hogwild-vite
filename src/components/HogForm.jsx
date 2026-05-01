import { useState } from "react";

function HogForm({ addHog }) {
  const [form, setForm] = useState({
    name: "",
    weight: "",
    specialty: "",
    greased: false,
    "highest medal achieved": ""
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addHog({ ...form, weight: Number(form.weight) });
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="name">Name:</label>
      <input id="name" name="name" onChange={handleChange} />

      <label htmlFor="weight">Weight:</label>
      <input id="weight" name="weight" onChange={handleChange} />

      <label htmlFor="specialty">Specialty:</label>
      <input id="specialty" name="specialty" onChange={handleChange} />

      {/* ✅ REQUIRED BY TEST */}
      <label htmlFor="greased">Greased?</label>
      <input
        id="greased"
        name="greased"
        type="checkbox"
        onChange={handleChange}
      />

      <label htmlFor="medal">Highest Medal:</label>
      <input
        id="medal"
        name="highest medal achieved"
        onChange={handleChange}
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;