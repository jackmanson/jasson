
const app = Vue.createApp({
  // template: `
  // `
  watch: {},
  setup() {}, // COMPOSITION API
  data(){
    return {
        title_lista: '',
        Home: '1',
        AboutMe: '0',
        Skills: '0',
        Projects: '0',
        Contact: '0',
        botonCrear: '',
        lateralClose: '1',
        lateralOpen: '0',
        menuLateralSwitch: '0',
        tituloSeccion: '0'
      }
    },
    methods: {
      OcultaMenuSwitch(){
        this.MenuAcction();
        this.lateralClose = '1'
      },
      MenuClose(){
        this.MenuAcction();
        this.lateralClose = '1'
        this.menuLateralSwitch = '0'
      },
      MenuOpen(){
        this.MenuAcction();
        this.lateralOpen = '1'
        this.menuLateralSwitch = '1'
      },
      seccionHome(){
        this.title_lista = 'Desarrollador de Software'
        this.botonCrear = 'WhatsApp'
        this.listasMenuApagadas();
        this.Home = '1'
        document.getElementById('itemHome').style.backgroundColor='#1A50D7';
        this.OcultaMenuSwitch();
      },
      seccionAboutMe(){
        this.title_lista = 'About Me'
        this.botonCrear = 'WhatsApp'
        this.listasMenuApagadas();
        this.tituloSeccion = '1'
        this.AboutMe = '1'
        document.getElementById('itemAbout').style.backgroundColor='#1A50D7';
        this.OcultaMenuSwitch();
      },
      ButtonAboutMe(){
        this.title_lista = 'About Me'
        this.botonCrear = 'WhatsApp'
        this.ButtonAboutApagadas();
        this.tituloSeccion = '1'
        this.AboutMe = '1'
        // this.OcultaMenuSwitch();
      },
      seccionSkills(){
        this.title_lista = 'Acerca de mi trabajo'
        this.botonCrear = 'WhatsApp'
        this.listasMenuApagadas();
        this.tituloSeccion = '1'
        this.Skills = '1'
        document.getElementById('itemSkills').style.backgroundColor='#1A50D7';
        this.OcultaMenuSwitch();
      },
      seccionProjects(){
        this.title_lista = 'Algunos Trabajos Concretados'
        this.botonCrear = 'WhatsApp'
        this.listasMenuApagadas();
        this.tituloSeccion = '1'
        this.Projects = '1'
        document.getElementById('itemProjects').style.backgroundColor='#1A50D7';
        this.OcultaMenuSwitch();
      },
      seccionContact(){
        this.title_lista = 'Contactar'
        this.botonCrear = 'WhatsApp'
        this.listasMenuApagadas();
        this.tituloSeccion = '1'
        this.Contact = '1'
        document.getElementById('itemContact').style.backgroundColor='#1A50D7';
        this.OcultaMenuSwitch();
      },
      listasMenuApagadas(){
        this.Home = '0'
        this.AboutMe = '0'
        this.Skills = '0'
        this.Projects = '0'
        this.Contact = '0'
        this.tituloSeccion = '0'
        document.getElementById('itemHome').style.backgroundColor=null;
        document.getElementById('itemAbout').style.backgroundColor=null;
        document.getElementById('itemSkills').style.backgroundColor=null;
        document.getElementById('itemProjects').style.backgroundColor=null;
        document.getElementById('itemContact').style.backgroundColor=null;
      },
      ButtonAboutApagadas(){
        this.Home = '0'
        this.AboutMe = '0'
        this.Skills = '0'
        this.Projects = '0'
        this.Contact = '0'
        this.tituloSeccion = '0'
      },
      MenuAcction(){
      this.lateralOpen = 0
      this.lateralClose = 0
      this.menuLateralSwitch = 0
      }
  } // OPTION API
})

app.mount("#containerFull")


