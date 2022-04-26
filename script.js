function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "PRINCIPAL")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "SOBRE")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTATO"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};

/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Hendreu", /*#__PURE__*/

    React.createElement("strong", null, "Zero")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className:
      props.showMenu === "active" ? "menu-button active" : "menu-button" }, /*#__PURE__*/


    React.createElement("span", null))))));





};

/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Sou criador"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "de conte\xFAdo"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "&"), " editor de videos.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "meu portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "se liga")))));






};

/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Quem \xE9 esse mano?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Meu nome \xE9 Hendreu."), /*#__PURE__*/
    React.createElement("p", null, "Eu sou um criador de conte\xFAdo da plataforma TikTok, recentemente estou crescendo para uso multiplataformas."), /*#__PURE__*/



    React.createElement("p", null, "Eu ensino as pessoas em meu perfil a jogarem um jogo chamado Valorant, mas isso n\xE3o vem ao caso. O que realmente importa agora \xE9 que eu produzo e edito meus pr\xF3prios v\xEDdeos e sempre busco o maximo engajamento.")), /*#__PURE__*/






    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "T\xE1 mas eai?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Zeritho."), /*#__PURE__*/
    React.createElement("p", null, "Zeritho \xE9 como sou conhecido nas redes sociais, este persona \xE9 literalmente a defini\xE7\xE3o de NERD, sempre buscando os minimos detalhes e aperfei\xE7oando seu conhecimento ao maximo. Busco hoje passar minha experiencia em jogos do estilo \"FPS\" a frente para novos jogadores do g\xEAnero, por isso busco o estere\xF3tipo do tipico NERD."), /*#__PURE__*/







    React.createElement("p", null, "A cria\xE7\xE3o de conte\xFAdo me ajudou muito em minha vida pessoal, antes do tiktok eu n\xE3o conseguia falar em publico, e se n\xE3o fosse ele eu n\xE3o conheceria muita gente a qual me ajudou a expandir meu Portf\xF3lio.")), /*#__PURE__*/






    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Hendreu."), /*#__PURE__*/
    React.createElement("p", null, "Eu me sinto confortavel trabalhando com o pacote Adobe: Premiere, After Effects, Photoshop, Illustrator, Media encoder... Tamb\xE9m fa\xE7o uso da ferramenta lightroom, porem n\xE3o possuo muito conhecimento com ela. Edito v\xEDdeos desde meus 10 anos de idade, e neste meio tempo trabalhei com varias pessoas de grande peso no mercado. Eu trabalhei para:"), /*#__PURE__*/







    React.createElement("p", null, "Paschoal Dantas, PedroCaxa, LuhSetra, SayCat, Olkabone, Bonnershow e Aiye."))))));








};

/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: "fab fa-sass",
    css: "fab fa-css3-alt",
    js: "fab fa-js-square",
    react: "fab fa-react",
    vue: "fab fa-vuejs",
    d3: "far fa-chart-bar",
    node: "fab fa-node" };


  const link = props.link || "http://";
  const repo = props.repo || "http://";

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", {
      className: "project-link",
      href: link,
      target: "_blank",
      rel: "noopener noreferrer" }, /*#__PURE__*/

    React.createElement("img", {
      className: "project-image",
      src: props.img,
      alt: "Screenshot of " + props.title })), /*#__PURE__*/


    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(" ").map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, " "),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "A imagem ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Vai l\xE1 v\xEA! ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};

/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "Meu Trabalho"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Aqui est\xE1 ", /*#__PURE__*/
    React.createElement("u", null, "alguns"), " de meus trabalhos os quais acho mais importantes a ressaltar, Tanto por meu envolvimento com o projeto, quanto a tamanho.")), /*#__PURE__*/




    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "PedroCaxa junto a NVIDIA e ITA\xDA.",
      img:
      "https://github.com/Hendreu/portifolio/blob/main/Imagens/1img1.png?raw=true",

      tech: "",
      link: "https://youtu.be/C_B63nHYF-M?t=370",
      repo: "https://github.com/Hendreu/portifolio/blob/main/Imagens/1img1.png?raw=true" }, /*#__PURE__*/

    React.createElement("small", null, "Praticamente todo o Design feito para a live de lan\xE7amento do PedroCaxa foi feito por mim, trabalhando junto com os designers da ITA\xDA e NVIDIA"), /*#__PURE__*/




    React.createElement("p", null, "Tanto as transi\xE7\xF5es quanto o Countdown e o v\xEDdeo apresentado, foram 100% feitos por mim sem auxilio.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "LuhSetra.",
      img:
      "https://github.com/Hendreu/portifolio/blob/main/Imagens/2img2.png?raw=true",

      tech: "",
      link: "https://www.youtube.com/c/luhsetra/videos",
      repo: "https://github.com/Hendreu/portifolio/blob/main/Imagens/2img2.png?raw=true" }, /*#__PURE__*/

    React.createElement("small", null, "Por um per\xEDodo de tempo acabei editando videos para LuhSetra."), /*#__PURE__*/


    React.createElement("p", null, "Tamb\xE9m sou respons\xE1vel por algumas thumbnails de seu canal no youtube.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "SayCat.",
      img:
      "https://github.com/Hendreu/portifolio/blob/main/Imagens/3img3.png?raw=true",

      tech: "",
      link: "https://www.youtube.com/watch?v=5eZKwvo47Vw&t",
      repo: "https://github.com/Hendreu/portifolio/blob/main/Imagens/3img3.png?raw=true" }, /*#__PURE__*/

    React.createElement("small", null, "Mesmo que tenha sido por 2 v\xEDdeos, acho legal mostrar."), /*#__PURE__*/


    React.createElement("p", null, "Criei tudo que foi utilizado no v\xEDdeo, desde a thumbnail at\xE9 a introdu\xE7\xE3o.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Olkabone.",
      img:
      "https://github.com/Hendreu/portifolio/blob/main/Imagens/4img4.png?raw=true",

      tech: "",
      link: "https://www.youtube.com/user/Olkabone/videos",
      repo: "https://github.com/Hendreu/portifolio/blob/main/Imagens/4img4.png?raw=true" }, /*#__PURE__*/

    React.createElement("small", null, "Administrei por um periodo de 4 meses o canal do Olkabone."), /*#__PURE__*/


    React.createElement("p", null, "Um streamer mediano/pequeno, onde obtive nesses 4 meses um crescimento de 76% em publico comparado com os outros 9 meses do canal."))))));









};

/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Quer me ", /*#__PURE__*/
    React.createElement("br", null), "contatar?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Manda um email para ",
    "", /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "contatohendreu", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-at at" }), "gmail", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), "(a caixa daqui de baixo nem sempre funciona :c).")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Nome", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Mensagem", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};

/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "OBRIGADO POR LER TUDO"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Hendreu Zero."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};

/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://twitter.com/HendreuZ",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Perfil do Twitter do Autor" },

    " ", /*#__PURE__*/
    React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/Hendreu",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Perfil do GitHub do Autor" },

    " ", /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" }))));



};

/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        "active" :
        state.menuState === "deactive" ?
        "active" :
        "deactive" }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility =
      header.style.visibility === "hidden" && "visible";else
      header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
      navbar.classList.add("bg-active");else
      navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth" });

          });
        }
      }
    })();
  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));