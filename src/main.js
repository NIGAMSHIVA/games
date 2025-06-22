const app = document.getElementById("app");

const story = [
  

];

function renderScene(index) {
  if (index === "end") return showEnding();

  const scene = story[index];
  app.innerHTML = `
    <h2>${scene.text}</h2>
    ${scene.choices
      .map((choice) => {
        const nextVal =
          typeof choice.next === "number"
            ? choice.next
            : `'${choice.next}'`;
        return `<button onclick="renderScene(${nextVal})">${choice.text}</button>`;
      })
      .join("")}
  `;
}

function showEnding() {
  
}


window.renderScene = renderScene;
renderScene(0);
