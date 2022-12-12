import axios from "axios";

function postCreateUser(body) {
  try {
    axios
      .post("https://almiapi.herokuapp.com/api/register", body)
      .then((res) => console.log(res.json));
  } catch (error) {
    console.log(error);
    res.json({
      message: error,
    });
  }
}

export { postCreateUser };
