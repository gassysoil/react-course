import { useState } from "react";
import useFetchData from "./useFetchData";

const FetchDataAlt = () => {
  const [name, setName] = useState("");
  const { isError, isLoading, result, fetchData } = useFetchData();

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchData(name);
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
      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <h2>There was an error...</h2>
      ) : result ? (
        <ResultPage />
      ) : null}
    </div>
  );
};
export default FetchDataAlt;
