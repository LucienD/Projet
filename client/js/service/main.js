//-----------------------------------Service Menu Bar

Portfolio.factory('menuContent', function() {
  var menuBar = {
    contents: [{
      url: 'element_menu/button-menu-home.svg',
      link: '#/',
      titlepage: 'Bienvenue'
    }, {
      url: 'element_menu/button-menu-game.svg',
      link: '#/game',
      titlepage: 'Game'
    }, {
      url: 'element_menu/button-menu-presentation.svg',
      link: '#/presentation',
      titlepage: 'Presentation'
    }, {
      url: 'element_menu/button-menu-projet.svg',
      link: '#/village',
      titlepage: 'Village'
    }, {
      url: 'element_menu/button-menu-contact.svg',
      link: '#/contact',
      titlepage: 'Contact'
    }],
    getMenuContents: function() {
      return menuBar.contents;
    }
  };
  return menuBar;

});


Portfolio.factory('projetType', function() {

});

//--------------------------------------------------------------------------------------------
//--------------------------------------------------PAGE PRESENTATION

//--------------------------------------------Service Bloc Quetza
Portfolio.factory('blocQuetza', function() {
  var blocQuetza = {
    contents: [{
      id: 'bloc1',
      link: '#bloc1',
      begin: '0.9s'
    }, {
      id: 'bloc2',
      link: '#bloc2',
      begin: '1.8s'
    }, {
      id: 'bloc3',
      link: '#bloc3',
      begin: '2.7s'
    }, {
      id: 'bloc4',
      link: '#bloc4',
      begin: '3.6s'
    }, {
      id: 'bloc5',
      link: '#bloc5',
      begin: '4.5s'
    }, {
      id: 'bloc6',
      link: '#bloc6',
      begin: '5.4s'
    }, {
      id: 'bloc7',
      link: '#bloc7',
      begin: '6.3s'
    }, {
      id: 'bloc8',
      link: '#bloc8',
      begin: '7.2s'
    }, {
      id: 'bloc9',
      link: '#bloc9',
      begin: '8.1s'
    }, {
      id: 'bloc10',
      link: '#bloc10',
      begin: '9.0s'
    }],
    getBlocs: function() {
      return blocQuetza.contents;
    }
  };
  return blocQuetza;
});



//---------------------------------------------Service L'entourage
Portfolio.factory('Entourage', function() {
  var icoEntourage = {
    contents: [{
      url: 'templates/presentation/icon-pote/max.svg',
      link: 'http://maxime.fr'
    }, {
      url: 'templates/presentation/icon-pote/nono.svg',
      link: 'http://www.alakazam.site'
    }, {
      url: 'templates/presentation/icon-pote/jacker.svg',
      link: 'http://jackermag.com'
    }],
    getIconEntourage: function() {
      return icoEntourage.contents;
    }
  };
  return icoEntourage;

});

//Service Outils developpement
Portfolio.factory('PostTool', function() {
  var dataTool = {
    tools: [{
      data: ["65", "35"],
      labels: ["javascript", "En cours.."],
      colours: ["#F0DB4F", "#f7f7f7"]
    }, {
      data: ["80", "20"],
      labels: ["html", "En cours.."],
      colours: ["#F16529", "#f7f7f7"]
    }, {
      data: ["80", "20"],
      labels: ["css", "En cours.."],
      colours: ["#27AAE2", "#f7f7f7"]
    }, {
      data: ["50", "50"],
      labels: ["php", "En cours.."],
      colours: ["#5C67A5", "#f7f7f7"]
    }],
    getPosts: function() {
      return dataTool.tools;
    },
    getPost: function(id) {
      return dataTool.tools[0];
    }
  };
  return dataTool;

});


//--------------------------------------------------------------------------------------------
//----------------------------------------PAGE VIILAGE

Portfolio.factory('postCardWordpress', function() {
  var postCard = {
    cards: [{
      img: "templates/product/img/bergebio.jpg",
      title: "Bergé Bio",
      resume: "Réalisation faite pour l'entreprise Bergé Bio, spécialisé dans le chauffage\n\
                        propre et écologique. Le Thème et les plugins associés ont été créés et customisés via\n\
                        le codex wordpress. Il est Responsive grace au media-queries et animé au scroll avec Skrollr.",
      link: "http://bergebiogranules.fr",
      tools: [{
        url: 'templates/product/ico/css.svg'
      }, {
        url: 'templates/product/ico/js.svg'
      }, {
        url: 'templates/product/ico/html5.svg'
      }, {
        url: 'templates/product/ico/wordpress.svg'
      }]
    }, {
      img: "templates/product/img/bergepro.jpg",
      title: "Bergé Pro",
      resume: "Site vitrine Berge Pro, pour les professionnels, il se concentre principalement\n\
                         sur une gamme de produits qui leur est réservée. C'est une reprise du Thème Bergé Bio\n\
                         avec une refont de sa charte graphique, des couleurs aux icons.",
      state: "En cours...",
      link: "http://bergepro.fr",
      tools: [{
        url: 'templates/product/ico/css.svg'
      }, {
        url: 'templates/product/ico/js.svg'
      }]
    }, {
      img: "templates/product/img/jacker.jpg",
      title: "Jacker",
      resume: "J'ai effectué un stage de 5 mois chez Jacker Magazine, pendant ce stage j'ai pu participer\n\
                         activement au développement du site internet; De la crétaion de plugins à l'intégration\n\
                         de la maquette graphique.",
      link: "https://www.jackermag.com",
      tools: [{
        url: 'templates/product/ico/css.svg'
      }, {
        url: 'templates/product/ico/js.svg'
      }]
    }, {
      img: "templates/product/img/colline.jpg",
      title: "Les Gîtes de la Colline",
      resume: "Présentation de Gîtes en Ardèche et dans le Gard. Des Illustration sont présentent pour\n\
                         présenter la région de l'ardèche. Ces dernières sont en SVG et animé avec CSS3. Le Thème\n\
                         est personnalisé avec des plugins rendant le site modulable.",
      state: "En cours...",
      link: "http://lesgitesdelacolline.com",
      tools: [{
        url: 'templates/product/ico/css.svg'
      }, {
        url: 'templates/product/ico/js.svg'
      }, {
        url: 'templates/product/ico/js.svg'
      }]
    }],
    getCards: function() {
      return postCard.cards;
    }
  };
  return postCard;

});
