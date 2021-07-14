import axios from "axios";

export default axios.create({
  baseURL: 'https://quiz-game-8dd99-default-rtdb.europe-west1.firebasedatabase.app/',
})