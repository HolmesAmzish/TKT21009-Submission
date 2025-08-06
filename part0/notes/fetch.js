import axios from "axios";

// const promise = axios.get("http://localhost:3000/notes");
// promise.then((response) => {
//   console.log(response.data);
// });

axios
  .get("http://localhost:3000/notes")
  .then((response) => {
    console.log(response.data);
  })