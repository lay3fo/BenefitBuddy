export let assistantId = "asst_X5ccNjVs3wJWN9akU53OKj4D"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
