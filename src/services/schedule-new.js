import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name, when }),
    });

    alert("Horário agendado realizado com sucesso!");
  } catch (error) {
    alert("Não foi possível agendar, tente novamente mais tarde.");
  }
}
