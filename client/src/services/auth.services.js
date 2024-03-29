import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/auth`,
      withCredentials: true
    });
  }

  signup = ({ username, password }) =>
    this.service
      .post("/signup", { username, password })
      .then(response => response.data);
  login = ({ username, password }) =>
    this.service
      .post("/login", { username, password })
      .then(response => response.data);
  logout = () => this.service.post("/logout").then(response => response.data);
  loggedin = () =>
    this.service.get("/loggedin").then(response => response.data);

  buyshares = (cash, shares) =>
    this.service
      .post("/buyshares", { cash, shares })
      .then(response => response.data);
      
  sellshares = (cash, shares) =>
    this.service
      .post("/sellshares", { cash, shares })
      .then(response => response.data);
}
