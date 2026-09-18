const WHATSAPP_NUMBER = "5491132595957";

const surveyForm = document.querySelector("#survey-form");

const clean = (value) => value.trim().replace(/\n{3,}/g, "\n\n");

surveyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!surveyForm.reportValidity()) return;

  const data = new FormData(surveyForm);
  const message = [
    "*Encuesta inicial - Página web*",
    "",
    `*1. ¿Cómo se llama tu negocio o marca?*\n${clean(data.get("businessName"))}`,
    "",
    `*2. ¿A qué se dedica?*\n${clean(data.get("businessActivity"))}`,
    "",
    `*3. ¿Quiénes son sus principales clientes?*\n${clean(data.get("customers"))}`,
    "",
    `*4. ¿En qué zona trabajan?*\n${clean(data.get("workArea"))}`,
    "",
    `*5. ¿Tienen redes sociales o página web?*\n${clean(data.get("onlinePresence"))}`,
    "",
    `*6. ¿Qué diferencia a su negocio de la competencia?*\n${clean(data.get("difference"))}`,
  ].join("\n");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
