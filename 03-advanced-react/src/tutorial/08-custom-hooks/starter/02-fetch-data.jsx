import { useState } from "react";

const FetchData = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    async function fetchPerson() {
      try {
        const url = `https://api.github.com/users/${name}`;
        const resp = await fetch(url);
        if (resp.ok) {
          const data = await resp.json();
          console.log(data);
          setResult(data);
        } else {
          return <h2>There was an error...</h2>;
        }
      } catch (error) {
        console.error(error);
        setResult(null);
      }
    }
    fetchPerson();
    setName("");
  };

  const ResultPage = () => {
    if (result) {
      const { avatar_url, name, company, bio } = result;
      return (
        <div>
          <img
            style={{ width: "100px", borderRadius: "25px" }}
            src={avatar_url}
            alt={name}
          />
          <h2>{name}</h2>
          <h4>works at {company}</h4>
          <p>{bio}</p>
        </div>
      );
    } else {
      return <div>Form submission failed.</div>;
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Search Name</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {result && <ResultPage />}
    </div>
  );
};
export default FetchData;
