import { EDUCATION, WORK } from "../constans/workHistory";

export const getEducation = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(EDUCATION), 10000);
  });
};

export const getWork = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(WORK), 1000);
  });
};