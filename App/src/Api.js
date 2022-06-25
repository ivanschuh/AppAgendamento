const BASE_API = "http://192.168.31.50:3000";

export default {
  checkToken: async (token) => {
    const req = await fetch(`${BASE_API}/auth/refresh`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    const json = await req.json();
    return json.token;
  },

  signIn: async (email, password) => {
    const req = await fetch(`${BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await req.json();
    return json;
  },

  signUp: async (name, email, password, confirmpassword) => {
    const req = await fetch(`${BASE_API}/auth/cadastro`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name, email, password, confirmpassword }),
    });
    const json = await req.json();
    return json;
  },
};
