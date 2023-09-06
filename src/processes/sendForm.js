import axios from "axios";

export const sendForm = async (data) => {
  try {
    await axios.post("http://localhost:3002/api/send-email", data);
    console.log("Успешной отправка с клиента");
  } catch (error) {
    console.log("ошибка при отправке с клиента: ", error);
  }
};

export const sendHookForm = async (data) => {
  const { name, email, subject } = data;

  try {
    await axios.post("http://localhost:3002/api/send-email", {
      name: { value: name },
      email: { value: email },
      subject: { value: subject },
    });
    console.log("Успешной отправка с клиента");
  } catch (error) {
    console.log("ошибка при отправке с клиента: ", error);
  }
};