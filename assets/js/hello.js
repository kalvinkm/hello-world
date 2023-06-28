const name = document.getElementById("hello-name");
const button = document.getElementById("hello-btn");
const result = document.getElementById("hello-result");

button.addEventListener("click", () => {
  const nameValue = name.value;

  !nameValue
    ? alert("Digite um nome")
    : (result.textContent = `Olá Mundo ${nameValue}`);
});
