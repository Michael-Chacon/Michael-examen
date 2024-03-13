import "../../js/app.js";

export class MainComponent extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.llamarSiguiente();
  }
  render() {
    this.innerHTML = `
        <section class="main--main">
        <img class="img--main" src="storage/img/answer-1-1.png" alt="" />
        <h1 class="titulo-main">Cuanto cuesta desarrollar mi app GBP</h1>
        <p>
          Calcula de forma rápida el costo para crear tu app, contestando estas
          sencillas preguntas
        </p>
        <button class="btnEmpezar">Empezar</button>
      </section>
        `;
  }

  llamarSiguiente() {
    const main = document.querySelector("main");
    const boton = document.querySelector(".btnEmpezar");
    boton.addEventListener("click", (e) => {
      main.innerHTML = "<nivel-calidad></nivel-calidad>";
    });
  }
}

export class NivelCalidad extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.detectarClick();
    console.log("tipo app");
  }

  render() {
    this.innerHTML = `
    <section class="main--section">
    <h2 class="titulo">¿Qué nivel de calidad buscas?</h2>
    <article class="seccion">
      <div class="seccion__card">
        <img src="storage/img/answer-1-1.png" class="card__img" alt="" />
        <p class="opcion">Calidad optima</p>
      </div>
      <div class="seccion__card">
        <img src="storage/img/answer-1-2.png" class="card__img" alt="" />
        <p class="opcion">Buena relación calidad/precio</p>
      </div>
      <div class="seccion__card">
        <img src="storage/img/answer-1-3.png" class="card__img" alt="" />
        <p class="opcion">No me importa tanto la calidad</p>
      </div>
    </article>
  </section> 
        `;
  }

  detectarClick() {
    const main = document.querySelector("main");
    const area = document.querySelector(".main--section");
    area.addEventListener("click", (e) => {
      main.innerHTML = "<tipo-app></tipo-app>";
    });
  }
}

export class TipoApp extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.detectarClick();
    console.log("tipo");
  }

  render() {
    this.innerHTML = `
      <section class="main--section">
      <h2 class="titulo">¿Qué tipo de App necesitas?</h2>
      <article class="seccion">
        <div class="seccion__card">
          <img src="storage/img/answer-2-1.png" class="card__img" alt="" />
          <p class="opcion">Aplicación Android</p>
        </div>
        <div class="seccion__card">
          <img src="storage/img/answer-2-2.png" class="card__img" alt="" />
          <p class="opcion">Aplicación iOS</p>
        </div>
        <div class="seccion__card">
          <img src="storage/img/answer-2-3.png" class="card__img" alt="" />
          <p class="opcion">Aplicación Windows Phone</p>
        </div>
        <div class="seccion__card">
        <img src="storage/img/answer-2-4.png" class="card__img" alt="" />
        <p class="opcion">Aplicación Android + iOS </p>
      </div>
      </article>
    </section> 
          `;
  }
  detectarClick() {
    const main = document.querySelector("main");
    const area = document.querySelector(".main--section");
    area.addEventListener("click", (e) => {
      main.innerHTML = "<diseño-app></diseño-app>";
    });
  }
}

export class DisenoApp extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.detectarClick();
    console.log("diseño");
  }

  render() {
    this.innerHTML = `
        <section class="main--section">
        <h2 class="titulo">¿Qué  diseño quieres que tenga tu App?</h2>
        <article class="seccion">
          <div class="seccion__card">
            <img src="storage/img/answer-3-1.png" class="card__img" alt="" />
            <p class="opcion">Interfaz sencilla</p>
          </div>
          <div class="seccion__card">
            <img src="storage/img/answer-3-2.png" class="card__img" alt="" />
            <p class="opcion">Interfaz personalizada</p>
          </div>
          <div class="seccion__card">
            <img src="storage/img/answer-3-3.png" class="card__img" alt="" />
            <p class="opcion">Interfaz replicada de la web</p>
          </div>
          <div class="seccion__card">
          <img src="storage/img/answer-3-4.png" class="card__img" alt="" />
          <p class="opcion">No necesito diseño</p>
        </div>
        </article>
      </section> 
            `;
  }
  detectarClick() {
    const main = document.querySelector("main");
    const area = document.querySelector(".main--section");
    area.addEventListener("click", (e) => {
      main.innerHTML = "<monetizar-app></monetizar-app>";
    });
  }
}

export class MonetizarApp extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.detectarClick();
    console.log("plata");
  }

  render() {
    this.innerHTML = `
          <section class="main--section">
          <h2 class="titulo">¿Comó monetizar tu App?</h2>
          <article class="seccion">
            <div class="seccion__card">
              <img src="storage/img/answer-4-1.png" class="card__img" alt="" />
              <p class="opcion">Aplicación gratuita con publicidad</p>
            </div>
            <div class="seccion__card">
              <img src="storage/img/answer-4-2.png" class="card__img" alt="" />
              <p class="opcion">Aplicación de pago</p>
            </div>
            <div class="seccion__card">
              <img src="storage/img/answer-4-3.png" class="card__img" alt="" />
              <p class="opcion">Compras dentro de la app</p>
            </div>
            <div class="seccion__card">
            <img src="storage/img/answer-4-4.png" class="card__img" alt="" />
            <p class="opcion">Otros / No lo sé todavía</p>
          </div>
          </article>
        </section> 
              `;
  }
  detectarClick() {
    const main = document.querySelector("main");
    const area = document.querySelector(".main--section");
    area.addEventListener("click", (e) => {
      main.innerHTML = "<autenticacion-app></autenticacion-app>";
    });
  }
}

export class SistemaAutenticacion extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.detectarClick();
    console.log("calidad");
  }

  render() {
    this.innerHTML = `
            <section class="main--section">
            <h2 class="titulo">¿Comó monetizar tu App?</h2>
            <article class="seccion">
              <div class="seccion__card">
                <img src="storage/img/answer-5-1.png" class="card__img" alt="" />
                <p class="opcion">Sí, con redes sociales y email</p>
              </div>
              <div class="seccion__card">
                <img src="storage/img/answer-5-2.png" class="card__img" alt="" />
                <p class="opcion">Sí, con email</p>
              </div>
              <div class="seccion__card">
                <img src="storage/img/answer-5-3.png" class="card__img" alt="" />
                <p class="opcion">No</p>
              </div>
              <div class="seccion__card">
              <img src="storage/img/answer-5-4.png" class="card__img" alt="" />
              <p class="opcion">No lo sé todavía</p>
            </div>
            </article>
          </section> 
                `;
  }
  detectarClick() {
    const main = document.querySelector("main");
    const area = document.querySelector(".main--section");
    area.addEventListener("click", (e) => {
      main.innerHTML = "<final-app></final-app>";
    });
  }
}

export class End extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.detectarClick();
    console.log("end");
  }

  render() {
    this.innerHTML = `
    <section class="main--end">
    <p class="nivel--uno">!Bien¡ Hemos terminado</p>
    <h4 class="nivel--dos">!Compárte si te a gustado¡</h4>
    <article class="redes">
      <button class="red-social face">
        <i class="bx bxl-facebook icono"></i>Share
      </button>
      <button class="red-social">
        <i class="bx bxl-linkedin-square"></i>Share
      </button>
      <button class="red-social">
        <i class="bx bxl-google-plus-circle"></i>Google +
      </button>
      <button class="red-social">
        <i class="bx bxl-twitter"></i>Tweet
      </button>
    </article>
    <h2 class="nivel--tres">El consto estimado de tu app es</h2>
    <h1 class="titulo-main">55.500.000 COP</h1>
    <a href="#" class="editar">Edita tu respuesta</a>
    <p>
      En GBP contamos con los mejores
      <strong>desarrolladores de apps y webd</strong> para tu proyecto.
      Publica tu proyecto en GBP
    </p>
    <button class="btnEmpezar">Terminar</button>
  </section>
                  `;
  }
  detectarClick() {
    const main = document.querySelector("main");
    const area = document.querySelector(".main--section");
    area.addEventListener("click", (e) => {
      main.innerHTML = "<final-app></final-app>";
    });
  }
}

customElements.define("main-component", MainComponent);
customElements.define("nivel-calidad", NivelCalidad);
customElements.define("tipo-app", TipoApp);
customElements.define("diseño-app", DisenoApp);
customElements.define("monetizar-app", MonetizarApp);
customElements.define("autenticacion-app", SistemaAutenticacion);
customElements.define("final-app", End);
