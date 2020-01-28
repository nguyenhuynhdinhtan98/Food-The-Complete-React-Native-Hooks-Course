import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer DI_n2bvZiidzTiiwaHQnUWyPqLnFeIZD5Oi7sXF1AQcy1Xkmau9E5TnXnoBtlczU3p_lYdY6npF3rqdC9Pab3tGI08iyulL1BAOY0j9uk8oc9dJHr6yEQA2i7PUmXnYx"
  }
});
