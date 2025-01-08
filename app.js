document.querySelector("button").addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.activity);
      document.querySelector("h4").textContent = data.activity;
    });
});
