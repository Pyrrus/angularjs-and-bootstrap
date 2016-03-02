var mainApp = angular.module("mainApp", ["ngSanitize"]);

        mainApp.controller('proController', function($scope, $http, $sce) {
          // Json object hold the product list
          $scope.pro = [
              {
                    "id": 1,
                    "order": 1,
                    'title' : 'Arkham Horror',
                    'price' : '59.95',
                    'desc' : 'The end is coming! You are only one that can stop it or the world as we know will end. The game uses Lovecraftian Lore like Cthulhu and King in Yellow',
                    'src': 'images/arkhamHorror.jpg',
                    'info': 'Save the world from Lovecraftian Monsters and Gods.',
                    'cssImage': ''
                }, {
                    "id": 2,
                    "order": 2,
                    'title' : 'Wiz-War',
                    'price' : '49.95',
                    'desc' : 'Play as a Wizard to kill other Wizards or steal their treasure. ',
                    'src': 'images/wizwar.jpg',
                    'info': 'Rise to the top as the Ultimate Wizard.',
                    'cssImage': ''
                }, {
                    "id": 3,
                    "order": 3,
                    'title' : 'D&D Starter Set 5E',
                    'price' : '19.95',
                    'desc' : 'Start in the 5E of Dungeon & Dragon. Teachs the newcomer the basics in both: DM (Dungeon Master) and player(s) in start up stories.',
                    'src': 'images/dnd5Start.jpg',
                    'info': 'The D&D Starter Set is your gateway to action-packed stories.',
                    'cssImage': '' 
                }, {
                    "id": 4,
                    "order": 4,
                    'title' : 'Shadowrun 5E',
                    'price' : '59.95',
                    'desc' : 'Magic is back in the human world. Every one has secrets that will change multibillion companies and the world.',
                    'src': 'images/shadowrun.jpg',
                    'info': 'Master the power of both magic and Tech to steal people secrets.' ,
                    'cssImage': ''
                }
              ];



          $scope.boxInfo = [];


          // for the form validation to disabled "View products list" button
          $scope.off = false;


          $scope.priceRangeFilter = function (product) {
                var type = $("#show option:selected" ).val();

                if (type == 0) {

                   return product.price; 
                } else if (type == 1) {
                    return product.price <= 25;
                } else if (type == 2) {
    
                    if (25 <= product.price) {
                        if (product.price <= 49.99)
                            return true;
                        else
                           return false;
                    } else {
                        return false;
                    }

                } else if (type == 3) {

                    if (50 <= product.price) {
                        if (product.price <= 74.99)
                            return true;
                        else
                           return false;
                    } else {
                        return false;
                    }

                } else {
                    return product.price >= 75;
                }
            };

            $scope.show = false;

            $scope.text = "";

            $scope.cssImage = "";

            $scope.showINFO = function(taskId) {

                $scope.boxInfo = $scope.pro[taskId];

                 $scope.text = $scope.boxInfo.desc;

                 $scope.cssImage = $scope.boxInfo.cssImage;

                $scope.off = true;
            };

            $scope.remove = function() {
                $scope.off = false;
            }


            $scope.trustAsHtml = function(string) {
                return $sce.trustAsHtml(string);
            };
            
        });

mainApp.controller('quickController', function($scope) {
          // Json object hold the product list
          $scope.quick = [
              {
                    "header": "Tournaments",
                    "link": "#",
                    "info": "Play E-Sports including Hearthstone, card games including Magic the Gathering in the Tournament format."
                }, {
                    "header": "Roleplaying Game Skills",
                    "link": "#",
                    "info": "First time or Experienced Game Master? This will help develop a new way to do storytelling and an easier way to help players enter your world."
                }, {
                    "header": "Board Games",
                    "link": "#",
                    "info": "This is for anyone who enjoys complex games including Arkham Horror. Makes the group playing experince so much more!"
                }, {
                    "header": "Game Tutorial",
                    "link": "#",
                    "info": "When stuck and no place to go, this is for you.  Hints that get you back in the game fast."
                   }
              ];

              
            
        });