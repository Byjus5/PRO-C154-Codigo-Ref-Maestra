// Registrar componente en Collider.js
AFRAME.registerComponent("flying-birds", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `hurdle${i}`;

      //variables de posición
      var posX = Math.floor(Math.random() * 3000 + -1000);
      var posY = Math.floor(Math.random() * 2 + -1);
      var posZ = Math.floor(Math.random() * 3000 + -1000);

      var position = { x: posX, y: posY, z: posZ };

      //llamar a la función
      this.flyingBirds(id, position);
    }
  },
  flyingBirds: (id, position) => {
    //Obtener el elemento de terreno
    var terrainEl = document.querySelector("#terrain");

    //Crear la entidad del modelo de ave
    var birdEl = document.createElement("a-entity");

    //Establecer múltiples atributos
    birdEl.setAttribute("id", id);

    birdEl.setAttribute("position", position);
    birdEl.setAttribute("scale", { x: 500, y: 500, z: 500 });

    birdEl.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf");

    //modelos animados
    birdEl.setAttribute("animation-mixer", {});

    //adjuntar la entidad del ave como hija de la entidad de terreno
    terrainEl.appendChild(birdEl);
  }
});


