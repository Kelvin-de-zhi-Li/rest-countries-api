import React from "react";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const Countries = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <section>
        <div className="container countries">
          {items.map((item) => {
            const { flag, name, population, capital, region, numericCode } =
              item;
            return (
              <div className="card">
                <div>
                  <img src={flag} alt={name} />
                </div>
                <div className="card-body">
                  <h3 className="country-name">{name}</h3>
                  <p>
                    <strong>Population:</strong>
                    {population}
                  </p>
                  <p className="country-region">
                    <strong>Region:</strong>
                    {region}
                  </p>
                  <p>
                    <strong>Capital:</strong>
                    {capital}
                  </p>
                  <Link
                    style={{ textDecoration: "none", color: "red" }}
                    to={`/countries/${name}`}
                    key={numericCode}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Countries;
