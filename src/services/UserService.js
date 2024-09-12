import axios from "axios";

export const loginUser = async (data) => {
  const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/login-user`, data);
  return res.data;
};
export const signUpUser = async (data) => {
  const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/create-user`, data);
  return res.data;
};
export const getDetailUser = async (id, access_token) => {
  const res = await axios.get(`${process.env.REACT_APP_API_KEY}/user/get-details/${id}`, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};
