var Portfolio = angular.module('Portfolio', ['ngRoute', 'ngAnimate', 'ngMaterial', 'chart.js', 'ngResource', 'lbServices']);
Portfolio.config(function ($routeProvider) {
    $routeProvider
            .when('/', {templateUrl: 'templates/home-page.html', controller: 'mainController'})
            .when('/game', {templateUrl: 'templates/page-game.html', controller: 'ElementsGameCtrl'})
            .when('/presentation', {templateUrl: 'templates/page-presentation.html', controller: 'ElementsPresentationCtrl'})
            .when('/village', {templateUrl: 'templates/page-village.html', controller: 'ElementsVillageCtrl'})
            .when('/contact', {templateUrl: 'templates/page-contact.html', controller: 'ElementsContactCtrl'})
            //Pages Développements
            .when('/projets-wordpress', {templateUrl: 'templates/page-projet.html', controller: 'PageProductWordpressCtrl'})
            .when('/experiences', {templateUrl: 'templates/page-projet.html', controller: 'PageExperiencesCtrl'})
            //Pages Content Project
            .when('/paper', {templateUrl: 'templates/product/index.html', controller: 'ElementsPaperCtrl'})
            .when('/data-visualisation', {templateUrl: 'templates/product/index.html', controller: 'ElementsDataCtrl'})
            //Pages Presentation
            .when('/me', {templateUrl: 'templates/presentation/moi.html', controller: 'ElementsMeCtrl'})


            .otherwise({redirectTo: "/"});
});
Portfolio.service('Title', function () {
});
//------------------------------------------------------------Sound effects

ion.sound({
    sounds: [
        {name: "water_droplet_3", volume: .1, multiplay: true},
        {name: "magic", multiplay: true, preload: false, loop: 2}
    ],
    path: "sounds/",
    multiplay: false,
    preload: true,
    volume: 0.3
});
ion.sound.play("magic");

//----------------------------------------------------Controller Menu page
Portfolio.controller('menuNavCtrl', function ($scope, $rootScope, menuContent) {
    $rootScope.contents = menuContent.getMenuContents();
    $rootScope.isActive = false;
    $rootScope.Active = false;

    $rootScope.showMenu = function () {
        $rootScope.isActive = !$rootScope.isActive;
        ion.sound.play("water_droplet_3");
    };

    $rootScope.muteSound = function () {
        $rootScope.Active = !$rootScope.Active;
        $rootScope.isSound = !$rootScope.isSound;
        if ($rootScope.isSound === true) {
            ion.sound.pause();
        } else {
            ion.sound.play("magic");
        }
    };
});

//---------------------------------------------------------Controller Homepage
Portfolio.controller('mainController', function ($scope, $rootScope) {
    $rootScope.isActive = false;
    $scope.pageClass = 'page-principal content-home';
    $scope.title = 'Bienvenue';
    $rootScope.page = 'home';

    $scope.contents = [
        {name: 'game', titleOver: "title = 'Game'", link: '#/game', url: 'templates/content/homepage/elmtGame.svg'},
        {name: 'presentation', titleOver: "title = 'Presentation'", link: '#/presentation', url: 'templates/content/homepage/elmtPresentation.svg'},
        {name: 'village', titleOver: "title = 'Village'", link: '#/village', url: 'templates/content/homepage/elmtVillage.svg'},
        {name: 'contact', titleOver: "title = 'Contact'", link: '#/contact', url: 'templates/content/homepage/elmtContact.svg'}
    ];
    $scope.titleOver = function (content, title) {
        if (content.name === 'game') {
            $scope.title = 'Game';
        }
        if (content.name === 'presentation') {
            $scope.title = 'Presentation';
        }
        if (content.name === 'village') {
            $scope.title = 'Projets';
        }
        if (content.name === 'contact') {
            $scope.title = 'Contact';
        }
    };
    $scope.titleLeave = function (title) {
        $scope.title = 'Bienvenue';
    };
});
//------------------------------------------Controleur Principales Pages
//--------------------------Game
Portfolio.controller('ElementsGameCtrl', function ($scope, $rootScope) {
    $rootScope.isActive = false;
    $scope.pageClass = 'page-principal content-game';
    $rootScope.page = 'game';
    $scope.title = 'Game';
});
//--------------------------Presentation
Portfolio.controller('ElementsPresentationCtrl', function ($scope, $rootScope, blocQuetza) {
    $rootScope.isActive = false;
    $scope.pageClass = 'page-principal content-presentation';
    $rootScope.page = 'presentation';
    $scope.title = 'Presentation';
    $scope.contents = [
        {url: 'templates/content/presentation/quetza.svg', name: 'quetzacoatl'}
    ];
    $scope.blocs = blocQuetza.getBlocs();
    $scope.mois = [
        {link: '#/me', name: 'moi'}
    ];

    $scope.titleOverMoi = function (title, moi) {
        $scope.title = 'Huahuazoa';
    };
    $scope.titleLeave = function (title) {
        $scope.title = 'Presentation';
    };

});
//--------------------------Village
Portfolio.controller('ElementsVillageCtrl', function ($scope, $rootScope) {
    $rootScope.isActive = false;
    $scope.pageClass = 'page-principal content-village';
    $rootScope.page = 'village';
    $scope.contents = [
        {name: "wordpress", url: 'templates/content/village/element_travaux.svg', duration: '35s', link: '#/projets-wordpress', delay: '0s', color: "#04375F", text: "WP"},
        {name: "experiences", url: 'templates/content/village/element_travaux.svg', duration: '55s', link: '#/experiences', delay: '2s', color: "#FF3B3B", text: "</>"}
    ];
    $scope.title = 'Projets';
    $scope.titleOver = function (content, title) {
        if (content.name === 'wordpress') {
            $scope.title = 'Projets Wordpress';
        }
        if (content.name === 'experiences') {
            $scope.title = 'Expériences';
        }
    };
    $scope.titleLeave = function (title) {
        $scope.title = 'Projets';
    };
});
//--------------------------Contact
Portfolio.controller('ElementsContactCtrl', function ($scope, $rootScope, Title) {
    $rootScope.isActive = false;
    $scope.pageClass = 'page-principal content-contact';
    $rootScope.page = 'contact';
    $scope.title = Title;
    $scope.title = 'Contact';
});
//--------------------------------------------------------------------- Village des Controller Page Product
//------------------------------------------------------------------


//Portfolio.controller('ElementsPaperCtrl', function ($scope, $rootScope) {
//    $rootScope.isActive = false;
//    $scope.pageClass = 'page-product content-paper';
//    $rootScope.page = 'product paper';
//    $scope.imgHeaders = [
//        {url: 'templates/product/img/headpaper.png', name: 'paper'}
//    ];
//    $scope.titleProject = "Projet Paper";
//    $scope.resume = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
//    $scope.icos = [
//        {url: 'templates/product/ico/css3-ico.svg'},
//        {url: 'templates/product/ico/ai-ico.svg'},
//        {url: 'templates/product/ico/html-ico.svg'}
//    ];
//    $scope.describes = [
//        {name: 'step1', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
//        {name: 'step2', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
//        {name: 'step3', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
//    ];
//    $scope.imgContents = [
//        {url: 'templates/product/img/paper-swift.png', name: 'paper-exemple'}
//    ];
//});
//
//
//
//Portfolio.controller('ElementsDataCtrl', function ($scope, $rootScope) {
//    $rootScope.isActive = false;
//    $scope.pageClass = 'page-product content-data';
//    $rootScope.page = 'product data';
//    $scope.imgHeaders = [
//        {url: 'templates/product/img/headdata.png', name: 'data-visualisation'}
//    ];
//    $scope.titleProject = "Projet Data Visualisation";
//    $scope.resume = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
//    $scope.icos = [
//        {url: 'templates/product/ico/css3-ico.svg'},
//        {url: 'templates/product/ico/js-ico.svg'},
//        {url: 'templates/product/ico/html-ico.svg'}
//    ];
//    $scope.describes = [
//        {name: 'step1', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
//        {name: 'step2', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
//        {name: 'step3', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
//    ];
//    $scope.imgContents = [
//        {url: 'templates/product/img/data.jpg', name: 'data-exemple'}
//    ];
//});


//-------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------- ELEMENTS PAGE PRESENTATION

Portfolio.controller('ElementsMeCtrl', function ($scope, $rootScope, Entourage, PostTool) {
    $rootScope.isActive = false;
    $scope.pageClass = 'page-presentation content-me';
    $rootScope.page = 'elm-presentation me';

    $scope.resumes = [
        {text: "Je me présente, Lucien Deleu, développeur web. Licencié en Communication en 2014, J'ai ensuite suivis un Master en Création numérique pour me spécialiser dans le développement Web, particulièrement l'aspect graphique tout en restant polyvalent avec un intérêt fort pour le développement en back end. Je crée principalement des sites via Wordpress,"},
        {text: "création de thèmes personnalisables grâce à des plugins customisés.Je travail également sur Angularjs, un Framework permettant de faire des application web. Concernant la continuité de mon apprentissage, la prochaine étape est NodeJs en complément d'Angularjs... "}
    ];

    $scope.json = {
        devs: PostTool.getPosts()
    };

    $scope.legend = true;
    $scope.options = {
        segmentShowStroke: false,
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
        animationEasing: "ease",
        animateScale: true,
        animationSteps: 60
    };

    $scope.labelsGraph = ['Illustrator', 'Photoshop', 'After Effect', 'InDesign'];
    $scope.coloursGraph = ["#D97827", "#0E498F", "#312965", "#A13067"];
    $scope.dataGraph = [55, 50, 20, 35];


    $scope.legendGraph = false;
    $scope.optionsGraph = {
        segmentShowStroke: false,
        scaleShowLabelBackdrop: true,
        scaleShowLine: false
    };

    $scope.copains = Entourage.getIconEntourage();
});

//-------------------------------------------------------------------------
//--------------------------------------------------Page Gallery Projets

Portfolio.controller('PageProductWordpressCtrl', function ($scope, $routeParams, $rootScope, postCardWordpress,Projet) {
    $scope.pageClass = 'page-projets';
    $scope.title = 'Projets Wordpress';

    $scope.cards = postCardWordpress.getCards();

    function test(){
      Projet.find(function(result){
        console.log(result);
      }, function(error){
        console.log(error);
      });
    }
    test();

});

Portfolio.controller('PageExperiencesCtrl', function ($scope, $rootScope) {
    $scope.title = 'Expériences';

});
