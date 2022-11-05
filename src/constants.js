import axios from "axios";

export const url = "https://api.imgflip.com/get_memes";
export const fetchMemes = async () => {
  const res = await axios.get(url);
  console.log(res);

  return res?.data?.data;
};
