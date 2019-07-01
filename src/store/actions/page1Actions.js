import { PAGE_ONE } from "./types";

export const addData = data => ({
  type: PAGE_ONE,
  payload: data
});

export default addData;
