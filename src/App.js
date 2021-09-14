import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Search from "./components/Search";
import Country from "./components/Country";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((result) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        setItems(result);
      });
  }, []);

  const search = (e) => {
    const { value } = e.target;
    const countryName = document.querySelectorAll(".country-name");

    countryName.forEach((name) => {
      if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
        // .card -> .card-body -> .country-name
        name.parentElement.parentElement.style.display = "block";
      } else {
        name.parentElement.parentElement.style.display = "none";
      }
    });
  };

  const regionFilters = document.querySelectorAll("li");
  regionFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const value = filter.innerText;
      const countryRegion = document.querySelectorAll(".country-region");

      countryRegion.forEach((region) => {
        if (region.innerText.includes(value) || value === "All") {
          // .card -> .card-body -> .country-region
          region.parentElement.parentElement.style.display = "block";
        } else {
          region.parentElement.parentElement.style.display = "none";
        }
      });
    });
  });

  return (
    <Router>
      <>
        <Header />
        <Search onChange={search} />
        <Route exact path="/">
          <Countries items={items} isLoading={isloading} />
        </Route>
        <Route path="/countries/:name" children={<Country />}></Route>
      </>
    </Router>
  );
};
export default App;
