import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(url);
      const person = await response.json();
      console.log(person);
      setPerson(person);
    }
    fetchUser();
  }, []);

  if (person === null) {
    return <div>Loading...</div>;
  }
  // must take care of the phase waiting for the fetch result,
  // otherwise, person will still be null during data fetching
  const { avatar_url, name, company, bio } = person;

  return (
    <div>
      <h2>Fetch Data</h2>
      <img src={avatar_url} alt={name}></img>
      <div>{name}</div>
      <div>Works {company}</div>
      <div>{bio}</div>
    </div>
  );
};

export default MultipleReturnsFetchData;

// import { useEffect, useState } from "react";
// const url = "https://api.github.com/users/QuincyLarson";

// const MultipleReturnsFetchData = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
//     async function fetchUser() {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           setIsError(true);
//           setIsLoading(false);
//           return;
//         }
//         const person = await response.json();
//         setPerson(person);
//       } catch (error) {
//         setIsError(true);
//       }
//       setIsLoading(false);
//     }
//     fetchUser();
//   }, []);

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }
//   if (isError) {
//     return <h2>There was an error...</h2>;
//   }

//   const { avatar_url, name, company, bio } = person;
//   return (
//     <div>
//       <h2>Fetch Data</h2>
//       <img src={avatar_url} alt={name}></img>
//       <div>{name}</div>
//       <div>Works {company}</div>
//       <div>{bio}</div>
//     </div>
//   );
// };
// export default MultipleReturnsFetchData;
