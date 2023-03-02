import axios from "axios";

const serverBaseUrl = "http://localhost:5010";
// function to send post request to server:
export const sendClick = async ({ id }) => {
  try {
    const { data } = await axios.post(
      `${serverBaseUrl}/api/pre`,
      { id },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    // console.log(data);
    return data;

    // dispatch({ type: PRE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    // dispatch({ type: PRE_ORDER_FAIL, payload: error.message });
  }
};

// function to send get request to server:
// const sendClick_get = async () => {
//   try {
//     const { data } = await axios.get("/api/pre");
//     // dispatch({ type: PRE_ORDER_LIST_SUCCESS, payload: data });
//     // console.log(data);
//     return data;
//   } catch (error) {
//     // dispatch({ type: PRE_ORDER_LIST_FAIL, payload: error.message });
//     console.log(error);
//   }
// };
