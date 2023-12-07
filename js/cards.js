const container = document.querySelector(".card-block");

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=16"
    );
    const data = await response.json();
    data.forEach((x) => {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "card-item");
      container.append(newDiv);
      newDiv.innerHTML = `<h1>${x.id}</h1>
      <p>${x.title}</p>
        `;
    });
  } catch (e) {
    console.log(e);
  }
};

fetchData();
