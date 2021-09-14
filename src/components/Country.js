import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      const data = await response.json();
      console.log(data);
      setCountry(data);
    };

    fetchCountryData();
  }, [name]);
  return (
    <section>
      {country.map((c) => {
        return (
          <div className="modal" id="modal">
            <div className="container">
              <Link to="/">
                <button class="btn-close" id="close">
                  <i class="fas fa-times"></i>
                </button>
              </Link>
              <img src={c.flag} alt="" />
              <div className="modal-body">
                <h2>{c.name}</h2>
                <p>
                  <strong>Native Name:</strong>
                  {c.nativeName}
                </p>
                <p>
                  <strong>Population:</strong>
                  {c.population}
                </p>
                <p>
                  <strong>Region:</strong>
                  {c.region}
                </p>
                <p>
                  <strong>Sub Region:</strong>
                  {c.subregion}
                </p>
                <p>
                  <strong>Capital:</strong>
                  {c.capital}
                </p>
                <p>
                  <strong>Top Level Domain:</strong>
                  {c.topLevelDomain[0]}
                </p>
                <p>
                  <strong>Currencies:</strong>
                  {c.currencies.map((currency) => {
                    return currency.code;
                  })}
                </p>
                <p>
                  <strong>Languages:</strong>
                  {c.languages.map((language) => {
                    return language.name;
                  })}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      ; )
    </section>
  );
};

export default Country;
