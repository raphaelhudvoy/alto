"use strict";angular.module("altoApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/menu/salads",{templateUrl:"views/menu/salads.html",controller:"MenuCtrl"}).when("/menu/burgers",{templateUrl:"views/menu/burger.html",controller:"MenuCtrl"}).when("/menu/gratine",{templateUrl:"views/menu/gratine.html",controller:"MenuCtrl"}).when("/menu/poutines",{templateUrl:"views/menu/poutines.html",controller:"MenuCtrl"}).when("/menu/omelettes",{templateUrl:"views/menu/omelettes.html",controller:"MenuCtrl"}).when("/menu/chickenAndFish",{templateUrl:"views/menu/chickenAndFish.html",controller:"MenuCtrl"}).when("/menu/subs",{templateUrl:"views/menu/subs.html",controller:"MenuCtrl"}).when("/menu/dessertsBeverages",{templateUrl:"views/menu/dessertsBeverages.html",controller:"MenuCtrl"}).when("/menu/fromTheGrill",{templateUrl:"views/menu/fromTheGrill.html",controller:"MenuCtrl"}).when("/menu/italianSpecialties",{templateUrl:"views/menu/italianSpecialties.html",controller:"MenuCtrl"}).when("/menu/pita",{templateUrl:"views/menu/pita.html",controller:"MenuCtrl"}).when("/menu/sandwich",{templateUrl:"views/menu/sandwich.html",controller:"MenuCtrl"}).when("/menu/sideOrders",{templateUrl:"views/menu/sideOrders.html",controller:"MenuCtrl"}).when("/menu/spaghettiAndRigatoni",{templateUrl:"views/menu/spaghettiAndRigatoni.html",controller:"MenuCtrl"}).when("/menu/wings",{templateUrl:"views/menu/wings.html",controller:"MenuCtrl"}).when("/menu/pizza",{templateUrl:"views/menu/pizza.html",controller:"MenuCtrl"}).when("/menu",{templateUrl:"views/menu/burger.html",controller:"MenuCtrl"}).when("/location",{templateUrl:"views/location.html",controller:"HomeCtrl"}).otherwise({redirectTo:"/",templateUrl:"views/main.html",controller:"HomeCtrl"})}]).run(["$rootScope",function(a){a.alto={},a.alto.lang=1}]),angular.module("altoApp").controller("MainCtrl",["$scope",function(){}]),angular.module("altoApp").factory("Menu",function(){return{salads:{name:["salads","salades"],items:[{name:["chef","du chef"],mini_price:4.95,small_price:7.95,large_price:10.95},{name:["greek","grecque"],mini_price:6.5,small_price:9.95,large_price:12.95},{name:["caesar","césar"],mini_price:4.95,small_price:7.95,large_price:10.95},{name:["cold sliced boiled chicken","poulet froid bouilli tranché"],small_price:10.95,large_price:12.95},{name:["caesar with grilled chicken","césar avec poulet grillé"],small_price:10.95,large_price:14.95,style:"important"},{name:["chef with grilled chicken","du chef avec poulet grillé"],small_price:10.95,large_price:14.95,style:"important"},{name:["greek with grilled chicken","grecque avec poulet grillé"],small_price:11.95,large_price:15.95,style:"important"},{name:["salmon","saumon"],large_price:11.95},{name:["tuna","thon"],large_price:11.95},{name:["shrimp","crevette"],large_price:15.95},{name:["coleslaw","salade de chou"],small_price:1.25,large_price:2.95}],extras:[]},burgers:{name:["burgers","hamburger"],description:["Trio is served with french fries, coleslaw and soft drink (Juice +50c)","Le trio est servi avec frites, salade de chou et boisson gazeuse (Jus +50c)"],items:[{name:["hamburger","hamburger"],unit_price:4.95,trio_price:8.5},{name:["cheeseburger","hamburger avec fromage"],unit_price:5.45,trio_price:8.95},{name:["fish","poisson"],unit_price:5.45,trio_price:8.95},{name:["fried chicken","poulet frit"],unit_price:5.45,trio_price:8.95,style:"white"},{name:["grilled chicken","poulet grillé"],unit_price:7.5,trio_price:10.95},{name:["alto burger","alto burger"],description:["2 paties, bacon, and cheese","2 Viandes, bacon et fromage"],unit_price:8.95,trio_price:11.5,style:"important"},{name:["roma burger","roma burger"],description:["italian sausage and mozzarella cheese","saucisse italienne et fromage mozzarella"],unit_price:5.45,trio_price:8.95,style:"important"},{name:["bull's eye burger","bull's eye burger"],description:["2 paties, sauteed mushrooms & onions, Bull's EYE BBQ sauce and swiss cheese","2 viandes, champignons et oignons sautés, sauce BBQ Bull's EYE et fromage suisse"],unit_price:8.95,trio_price:11.5,style:"important"},{name:["spicy european sausage","saucisse européenne piquante"],description:["On kaiser bun","sur pain kaiser"],unit_price:5.45,trio_price:8.95}],extras:[{name:["bacon or cheese","bacon ou fromage"],unit_price:1.25},{name:["poutine instead of fries","changer la frite pour une poutine"],unit_price:3.5},{name:["onion rings instead of fries","changer la frite pour des rondelles d'oignon"],unit_price:1.5},{name:["mini salad (chef or caesar) instead of fries","changer la frite par une mini salade (du chef ou césar)"],unit_price:2},{name:["mini greek salad instead of fries","changer la frite par une salade grecque"],unit_price:3.5}]},gratine:{name:["gratiné","gratiné"],description:["With  choice of meat or tomato sauce","Choix de sauce à la viande ou tomate"],items:[{name:["lasagne","lasagne"],unit_price:10.95},{name:["spaghetti","spaghetti"],unit_price:10.95},{name:["rigatoni","rigatoni"],unit_price:10.95},{name:["spaghetti with meatballs","spaghetti avec boulettes de viande"],unit_price:13.95,style:"important"},{name:["ravioli","ravioli"],description:["With meat","à la viande"],unit_price:12.95},{name:["tortellini","tortellini"],description:["Spinach, cheese, or meat","épinards, fromage ou viande"],unit_price:12.95},{name:["cannelloni","cannelloni"],description:["Spinach and cheese or meat","fromages épinards ou à la viande"],unit_price:12.95},{name:["lasagne special","lasagne spéciale"],description:["Pepperoni, mushrooms, and green peppers","Pepperoni, champignons et piments verts"],unit_price:12.95,style:"important"},{name:["spaghetti special","spaghetti spéciale"],description:["Pepperoni, mushrooms, and green peppers","Pepperoni, champignons et piments verts"],unit_price:12.95,style:"important"},{name:["rotolo milanaise","rotolo milanaise"],description:["Spinach, cheese and proscuitto","épinards, fromage et proscuitto"],unit_price:12.95}],extras:[{name:["meat or cheese","viande ou fromage"],unit_price:1.95},{name:["vegetables","légumes"],unit_price:1}]},poutines:{name:["poutines","poutines"],items:[{name:["REGULAR","régulier"],small_price:6.95,large_price:8.95},{name:["BACON","bacon"],small_price:7.95,large_price:9.95},{name:["CHICKEN","poulet"],small_price:8.95,large_price:10.95},{name:["SMOKED MEAT","smoked meat"],small_price:7.95,large_price:9.95},{name:["MUSHROOMS","champignons"],small_price:7.95,large_price:9.95},{name:["HOT DOG","hot dog"],small_price:7.95,large_price:9.95},{name:["PEPPERONI","pepperoni"],small_price:7.95,large_price:9.95},{name:["ALTO poutine","poutine ALTO"],small_price:9.95,large_price:11.95,description:["bacon, pepperoni, green peppers, mushrooms","Bacon, pepperoni, piments verts, champignons"],style:"important"},{name:["3 MEAT","3 viandes"],small_price:9.95,large_price:11.95,description:["bacon, smoked meat, and italian sausage","Bacon, viande fumée saucisse Italienne"],style:"important"},{name:["ITALIAN","italienne"],small_price:8.95,large_price:10.95},{name:["ITALIAN SAUSAGES","saucisse italienne"],small_price:9.95,large_price:11.95},{name:["GALVAUDE","GALVAUDE"],small_price:9.5,large_price:11.5,description:["chicken and peas","poulet et pois"]},{name:["UPTOWN","UPTOWN"],small_price:9.95,large_price:11.95,description:["chicken and bacon","poulet et bacon"],style:"important"},{name:["MEXICAN","mexican"],small_price:9.5,large_price:11.5,description:["meat, onions, and hot peppers","viande, oignons, piments forts"],style:"important"},{name:["SALISBURY","SALISBURY"],small_price:9.75,large_price:11.75,description:["meat, onions, mushrooms, green peppers","Viande, oignons, champigons, piments verts"]},{name:["VEGETARIAN","végétarienne"],small_price:9.5,large_price:11.5,description:["tomato sauce, onions, mushrooms, and green peppers","Sauce tomate, oignons, champigons, piments verts"],style:"important"}],extras:[{name:["meat or cheese","viande ou fromage"],small_price:1.25,large_price:1.75}]},omelettes:{name:["omelettes","omelettes"],description:["Served with home potatoes, fresh vegetables and toast","Servies avec patates maison, légumes frais et roties"],items:[{name:["plain","nature"],price:9.75},{name:["one item","un item"],price:10.75},{name:["two items","deux items"],price:11.75,style:"important"}],extras:[{name:["meat or cheese","viande ou fromage"],price:2},{name:["vegetable","légume"],price:1},{name:["bacon - six slices","ordre de bacon (6 tranches)"],price:3.95}]},subs:{name:["submarines","sous-marins"],description:["Hot items are garnished with lettuce, tomatoes, onions, mushrooms, green peppers and melted cheese (Except meatballs, grilled chicken, gyro, veal cutlet and chicken parmigiana)","Les items chauds sont garnis de laitue, tomates, oignons, champignons, piments verts et fromage fondu (Sauf boulettes de viande, poulet grillé, gyro, escalope de veau et poulet parmigiana)"],hotitems:[{name:["steak","steak"],small_price:9.95,large_price:11.95},{name:["steak and pepperoni","steak et pepperoni"],small_price:9.95,large_price:11.95},{name:["smoked meat","smoked meat"],small_price:9.95,large_price:11.95},{name:["pepperoni","pepperoni"],small_price:9.95,large_price:11.95},{name:["capicollo","capicollo"],small_price:9.95,large_price:11.95},{name:["vegetarian","végé"],small_price:9.95,large_price:11.95},{name:["meatballs","boulettes de viande"],small_price:9.95,large_price:11.95},{name:["SPECIAL","spécial"],small_price:10.95,large_price:12.95,description:["steak, pepperoni and capicollo","steak, pepperoni, capicollo"],style:"important"},{name:["gyro","gyro"],small_price:9.95,large_price:11.95},{name:["veal cutlet parmigiana","escalope de veau permigiana"],small_price:10.95,large_price:12.95},{name:["grilled chicken","poulet grillé"],small_price:10.95,large_price:12.95,style:"important"},{name:["chicken parmigiana","poulet parmigiana"],small_price:10.95,large_price:12.95}],colditems:[{name:["chicken","poulet"],small_price:9.95,large_price:11.95},{name:["capicollo and ham","capicollo et jambon"],small_price:9.95,large_price:11.95,style:"important"},{name:["tuna","thon"],small_price:9.95,large_price:11.95},{name:["salmon","saumon"],small_price:9.95,large_price:11.95}],extras:[{name:["meat or cheese","viande ou fromage"],small_price:1.25,large_price:1.5},{name:["vegetables","légumes"],small_price:.75,large_price:1}]},wings:{name:["wings and fingers","ailes et doigts de poulet"],description:["Served with french fries and choice of gravy, hot sauce, ranch, BBQ, honey mustard, honey garlic OR plum","Servis avec frites et choix de sauce brune, sauce piquante, ranch, BBQ, moutarde miel, miel et ail OU sauce aux prunes"],wings:[{name:["6 pieces","6 mrcx"],price:9.5},{name:["12 pieces","12 mrcx"],price:15.95},{name:["24 pieces","24 mrcx"],price:29.95}],fingers:[{name:["4 pieces","4 mrcx"],price:9.5},{name:["6 pieces","6 mrcx"],price:13.5},{name:["8 pieces","8 mrcx"],price:15.95}],extras:[]},sideOrders:{name:["side orders","divers"],items:[{name:["french fries","frites"],small_price:2.95,large_price:5.75},{name:["french fries with sauce","frites avec sauce"],small_price:4.25,large_price:6.95},{name:["feta cheese","fromage feta"],small_price:4.95,large_price:6.95},{name:["tzatziki","tzatziki"],small_price:3.95,large_price:5.95},{name:["onion rings","rondelles d'oignons"],small_price:3.95,large_price:6.95},{name:["cheese sticks - 7 pcs with salsa","bâtons de fromage 7 mrcx avec salsa"],large_price:6.95,style:"important"},{name:["hot dog","hot dog"],large_price:1.75},{name:["garlic bread","pain à l'ail"],large_price:2.95,style:"important"},{name:["garlic bread with cheese","pain à l'ail avec fromage"],large_price:3.95,style:"important"},{name:["home made soup","soupe maison"],large_price:2.95},{name:["meatballs (2)","2 boulettes de viande"],large_price:5.95},{name:["meat sauce (10 oz)","sauce à la viande 10oz"],large_price:4.5},{name:["pita bread","pain pita"],large_price:.75},{name:["dill pickle","cornichon"],large_price:2.95}],extras:[]},pita:{name:["pita","pita"],description:["Trio is served with french fries and soft drink (Juice +50c)","Le trio est servi avec frites et boisson gazeuse (Jus +50c)"],items:[{name:["souvlaki pork","souvlaki au porc"],price:5.25,trio_price:8.95},{name:["chicken","poulet"],price:5.75,trio_price:8.95,style:"important"},{name:["gyro","gyro"],price:5.25,trio_price:8.95,style:"important"},{name:["vegetarian","végé"],price:5.25,trio_price:8.95},{name:["souvlaki pork stick","bâton de souvlaki au porc"],price:4.5},{name:["chicken stick","bâton de poulet"],price:4.95}],extras:[]},pizza:{name:["pizza","pizza"],description:["Choice of hot or mild sauce","Choix de sauce piquante ou douce"],items:[{name:["cheese","fromage"],small_price:10.5,medium_price:14.5,large_price:17.5,exlarge_price:20.5},{name:["mushrooms","champignons"],small_price:11.95,medium_price:15.95,large_price:19.95,exlarge_price:23.95},{name:["mexican","mexicane"],description:["minced meat, onions, and hot peppers","Viande haché, oignons et piments forts"],small_price:12.95,medium_price:16.95,large_price:20.95,exlarge_price:24.95},{name:["chicken and mushrooms","poulet et champignons"],small_price:14.95,medium_price:18.95,large_price:23.95,exlarge_price:29.95,style:"important"},{name:["fresh tomatoes","tomate fraîches"],small_price:11.95,medium_price:15.95,large_price:19.95,exlarge_price:23.95},{name:["artichokes","artichauts"],small_price:11.95,medium_price:15.95,large_price:19.95,exlarge_price:23.95},{name:["asparagus","asperges"],small_price:11.95,medium_price:15.95,large_price:19.95,exlarge_price:23.95},{name:["capicollo","capicollo"],small_price:11.95,medium_price:15.95,large_price:19.95,exlarge_price:23.95},{name:["pepperoni","pepperoni"],small_price:11.95,medium_price:15.95,large_price:19.95,exlarge_price:23.95},{name:["anchovies","anchois"],small_price:11.95,medium_price:15.95,large_price:19.95,exlarge_price:23.95},{name:["all dressed","toute garnie"],description:["mushrooms, green peppers, and pepperoni","Champignons, piments verts et pepperoni"],small_price:12.95,medium_price:16.95,large_price:20.95,exlarge_price:24.95,style:"important"},{name:["bacon","bacon"],small_price:11.95,medium_price:15.95,large_price:19.95,exlarge_price:23.95},{name:["smoked meat","smoked meat"],small_price:11.95,medium_price:15.95,large_price:19.95,exlarge_price:23.95},{name:["minced meat","viande haché"],small_price:11.95,medium_price:15.95,large_price:19.95,exlarge_price:23.95},{name:["italian sausages","saucisse italiennes"],small_price:11.95,medium_price:15.95,large_price:19.95,exlarge_price:23.95},{name:["meat lovers","Amoureux de viande"],description:["pepperoni, capicollo, smoked meat, bacon, hamburger, ham, and italian sausages","Pepperoni, capicollo, viande fumée, bacon, viande hachée, jambon et saucisses italiennes"],small_price:14.95,medium_price:18.95,large_price:23.95,exlarge_price:29.95,style:"important"},{name:["seafood","fruits de mer"],description:["shrimps, crab, and scallops","Crevettes, crabe et pétoncles"],small_price:14.95,medium_price:18.95,large_price:23.95,exlarge_price:29.95},{name:["vegetarian","végétarienne"],description:["mushrooms, green peppers, artichoke hearts, onions, and olives","Champignons, piments verts, coeurs d'artichauts, oignons et olives"],small_price:13.95,medium_price:17.95,large_price:22.95,exlarge_price:27.95,style:"important"},{name:["greek style","à la grecque"],description:["feta cheese, tomatoes, olives, and onions","Fromage feta, tomates, olives et oignons"],small_price:13.95,medium_price:17.95,large_price:22.95,exlarge_price:27.95},{name:["hawaiian","hawaïenne"],description:["ham and pineapple","jambon et ananas"],small_price:12.95,medium_price:16.95,large_price:20.95,exlarge_price:24.95},{name:["house special","spéciale de la maison"],description:["all dressed, bacon, onions and olives","Toute garnie, bacon, oignons et olives"],small_price:13.95,medium_price:17.95,large_price:22.95,exlarge_price:27.95,style:"important"}],extras:[{name:["meat or cheese","viande ou fromage"],small_price:2.5,medium_price:3,large_price:3.5,exlarge_price:4},{name:["vegetable","légumes"],small_price:1.25,medium_price:1.5,large_price:1.75,exlarge_price:2},{name:["Ranch or honey mustard","Ranch ou moutarde au miel"],small_price:1.75}]},sandwich:{name:["sandwiches","sandwichs"],clubsandwich:{name:["club sandwiches","sandwiches 3 étages"],description:["Served with french fries, coleslaw and pickles","Servis avec frites, salade de chou et cornichon"],items:[{name:["club sandwich","club sandwich"],description:["with bacon","avec bacon"],price:11.5},{name:["friday club","club du vendredi"],description:["egg, cheese, lettuce, and tomato","Oeuf, fromage, laitue et tomate"],price:10.95},{name:["Alto club special","club Alto spéciale"],description:["ham, capicollo, cheese, and smoked meat","Jambon, capicollo, fromage et viande fumée"],price:11.5,style:"important"},{name:["tuna club","club au thon"],description:["tuna, cheese, lettuce, and tomato","Thon, fromage, laitue et tomate"],price:11.5},{name:["grilled chicken club","club avec poulet grillé"],description:["with bacon","avec bacon"],price:12.95,style:"important"}]},hotSandwiches:{name:["hot sandwiches","sandwiches chauds"],description:["Served with french fries and fresh vegetables","Servis avec frites et l'égumes frais"],items:[{name:["hot chicken","hot chicken"],price:11.95},{name:["hot hamburger","hamburger chaud"],description:["with gravy","avec sauce brune"],price:10.95},{name:["Michigan hamburger","hamburger Michigan"],description:["with meat sauce","avec sauce à la viande"],price:11.95,style:"important"}]},sandwiches:{name:["sandwiches","sandwiches"],items:[{name:["grilled cheese","fromage grillé"],price:3.5},{name:["fried egg","oeuf frit"],price:3.95},{name:["lettuce and tomato","laitue et tomate"],price:3.5},{name:["BLT","BLT"],description:["bacon, lettuce, and tomato","bacon, laitue et tomate"],price:5.95,style:"important"},{name:["western","western"],description:["ham, onion, and green pepper","jambon, oignons et piments verts"],price:5.95},{name:["chicken","poulet"],price:5.95,style:"important"},{name:["ham and cheese","jambon et fromage"],price:5.95},{name:["salmon","saumon"],price:6.5},{name:["tuna fish","thon"],price:6.5}]},extras:[{name:["bacon or cheese","bacon ou fromage"],price:1.25},{name:["poutine instead of fries","changer la frite pour une poutine"],price:3.5},{name:["onion rings instead of fries","changer la frite pour des rondelles d'oignon"],price:1.5},{name:["mini salad (chef or caesar) instead of french fries","mini salade (chef ou césar) au lieu des frites"],price:2},{name:["mini greek salad instead of french fries","mini salade grecque au lieu des frites"],price:3.5}]},chickenAndFish:{name:["chicken and fish","Poulet et Poisson"],description:["Served with rice, salad and french fries","Servie avec riz, salade et frites"],items:[{name:["chicken wings plate (7)","assiette d'ailes de poulet (7)"],price:16.95},{name:["chicken fingers plate (4)","assiette doigts de poulet (4)"],price:16.95},{name:["B.B.Q. chicken leg","cuisse de poulet B.B.Q"],price:10.95},{name:["2 B.B.Q. chicken legs","2 cuisse de poulet B.B.Q"],price:14.95},{name:["B.B.Q. chicken breast","poitrines de poulet B.B.Q"],price:11.95},{name:["half B.B.Q. chicken","demi poulet B.B.Q"],price:15.95},{name:["whole B.B.Q. chicken","poulet B.B.Q entier"],price:25.95,style:"white"},{name:["fish and chips","poisson et frite"],price:11.5,style:"important"},{name:["fried fillet of sole","fillet de sole frit"],price:12.95,style:"important"}],extras:[{name:["gravy","sauce brune"],small_price:1.25,large_price:1.75}]},fromTheGrill:{name:["from the grill","Sur le grill"],description:["Served with rice, salad and french fries","Servie avec riz, salade et frites"],items:[{name:["souvlaki plate 1 stick","assiette de souvlaki 1 bâton"],description:["pork",""],price:12.95},{name:["souvlaki plate 2 sticks","assiette de souvlaki 2 bâtons"],description:["pork",""],price:14.95},{name:["chicken plate 1 stick","assiette de poulet 1 bâton"],price:13.95},{name:["chicken plate 2 sticks","assiette de poulet 2 bâton"],price:15.5},{name:["3 sticks plate","assiette de 3 bâtons"],description:["pork or chicken","porc ou poulet"],price:16.95,style:"important"},{name:["1 pita plate","assiette 1 pita"],description:["pork or chicken","porc ou poulet"],price:14.95},{name:["2 pita plate","assiette 2 pita"],description:["pork or chicken","porc ou poulet"],price:16.95},{name:["rib steak 12 oz","steak d'entrecôte 12 oz"],price:18.95},{name:["lamb chops (4)","côtelettes d'agneau (4)"],price:16.95},{name:["london steak","steak de londres"],price:14.95},{name:["gyro plate","assiette de gyro"],price:13.95},{name:["pork chops (2)","côtelettes d'agneau (2)"],price:13.95},{name:["grilled chicken fillet (2 pieces)","FILET DE POULET GRILLÉ (2 MORCEAUX)"],price:15.95},{name:["hamburger steak","bifteck haché"],description:["with onions or mushrooms; served with fries and vegetables","Avec oignons ou champignons. Servi avec frites et légumes"],price:11.5,style:"important"}],extras:[]},italianSpecialties:{name:["italian specialties","spécilalité italiennes"],items:[{name:["ravioli or tortellini","ravioli or tortellini"],description:["meat or tomato sauce","sauce a la viande ou tomate"],price:10.5},{name:["fettuccine alfredo","fettuccine alfredo"],price:11.95},{name:["fettuccine carbonara","fettuccine carbonara"],price:13.95},{name:["fettuccine seafood alfredo","fettuccine alfredo aux fruits de mer"],description:["shrimp, crab, and scallops","Crevettes, crabe, pétoncles"],price:16.95},{name:["tortellini seafood alfredo","tortellini alfredo aux fruits de mer"],description:["shrimp, crab, and scallops","Crevettes, crabe, pétoncles"],price:16.95},{name:["fettuccine chicken alfredo","fettuccine alfredo au poulet"],price:14.95,style:"important"},{name:["tortellini chicken alfredo","tortellini alfredo au poulet"],price:14.95,style:"important"},{name:["tortellini alfredo","tortellini alfredo"],description:["spinach, cheese or meat","Épinards, fromage ou viande"],price:12.95},{name:["tortellini rosé","tortellini rosé"],description:["spinach, cheese or meat","Épinards, fromage ou viande"],price:11.95,style:"important"},{name:["veal cutlet parmigiana","escalope de veau parmigiana"],price:14.95},{name:["veal cutlet milanese","escalope de veau milanaise"],price:13.95},{name:["chicken parmigiana","poulet parmigiana"],price:14.95},{name:["eggplant parmigiana","aubergine parmigiana"],price:13.95},{name:["pizza-ghetti","pizza-ghetti"],price:12.95,style:"important"}],extras:[]},spaghettiAndRigatoni:{name:["spaghetti or rigatoni","spaghetti ou rigatoni"],description:["With choice of meat or tomato sauce","choix de sauce à la viande ou tomate"],items:[{name:["tomato sauce","sauce aux tomates"],price:9.95},{name:["meat sauce","sauce à la viande"],price:9.95,style:"important"},{name:["pepperoni","pepperoni"],price:10.95},{name:["mushrooms","champignons"],price:10.95},{name:["meatballs","boulettes de viande"],price:11.95},{name:["italian sausages","saucisses italiennes"],price:11.95,style:"important"}],extras:[]},dessertsBeverages:{name:["desserts and beverages","desserts et breuvages"],deserts:[{name:["assorted pies","tartes assorties"],price:3.95},{name:["assorted pies with ice cream","tartes assorties avec crème glacée"],price:6.95,style:"important"},{name:["ice cream","crème glacée"],price:3.95},{name:["baklava","baklava"],price:3.75},{name:["jello","jello"],price:2.5},{name:["rice pudding","pouding au riz"],price:2.75},{name:["daily cake","gâteau du jour"],price:3.75},{name:["cheese cake","gâteau au fromage"],price:5.75,style:"important"}],beverages:[{name:["soft drinks","boisson gazeuse"],price:1.5},{name:["juice - orange, apple, or tomato","jus d'orange, pomme ou tomate"],price:2.25},{name:["brio","brio"],price:2.25},{name:["water 500ml","eau 500ml"],price:1.5},{name:["perrier 330ml","perrier 330ml"],price:2.25},{name:["milkshake 480ml","lait frappé 480ml"],price:5.25},{name:["milk 480ml","lait 480ml"],price:3.25},{name:["iced tea","thé glacé"],price:1.95},{name:["beer (10oz)","bière (10oz)"],price:3.95},{name:["beer (pitcher 1.8L)","bière (picher 1.8L)"],price:16.95,style:"important"},{name:["beer (bottle)","bière (bouteille)"],price:5.25},{name:["Corona (bottle)","Corona (bouteille)"],price:5.5},{name:["Heineken (bottle)","Heineken (bouteille)"],price:5.75}],extras:[]}}}),angular.module("altoApp").directive("arTrigger",function(){return{restrict:"A",link:function(a,b){b.on("click",function(){b.siblings().toggleClass("show")})}}}).directive("arLangWitch",["$rootScope",function(a){return{restrict:"A",link:function(b,c){c.on("click",function(){b.$apply(function(){a.alto.lang=0===a.alto.lang?1:0})})}}}]),angular.module("altoApp").controller("MenuCtrl",["$scope","$rootScope","Menu",function(a,b,c){a.menu=c,a.label={small:["small","petit"],medium:["medium","moyen"],large:["large","large"],cat:["Select a type of food","Selectionez un type de nourriture"],hot:["hot items","items chauds"],cold:["cold items","items froids"]}}]),angular.module("altoApp").filter("lang",["$rootScope",function(a){return function(b){return angular.isArray(b)?b[a.alto.lang]:b}}]),angular.module("altoApp").controller("HomeCtrl",["$scope","Home",function(a,b){a.years_open=b.years,a.open=b.open,a.mainTitle=["Welcometo Alto Restaurant","Bienvenue Alto restaurant"],a.welcome1=["Alto Restaurant has proudly served the residents of Montréal for over "+b.years+" years with good food, great prices and fast service.","Alto Restaurant a fièrement servi Montréal pendant plus de "+b.years+" ans avec la bonne nourriture, de bons prix et un service de livraison rapide."],a.welcome2=["We are proud to offer a diverse selection of Italian, Greek and Canadian classics ranging from pizza, pasta, souvlaki, poutine and gratiné.","On vous offre un bon choix de repas italiens, grecs et canadiens, allant de la pizza, des pâtes, souvlaki, poutine et des gratinée."],a.welcome3=["Alto Restaurant offers a casual and friendly atmosphere to dine in. If you prefer your meal at your home, office or place of work, Alto Restaurant's delivery is always fast and free, for lunch, dinner or late night - early morning supper!","Soit pour diner, souper ou pour de la fin de soirée, Alto vous offre une ambiance amicale et chaleureuse; mais si vous préférez votre repas à votre domicile ou au lieu de travail, la livraison est toujours rapide et gratuit!"],a.welcome4=["Eat in, take out, get a square meal at a great deal!",""],a.opening=["Opening Times","Heures d'ouverture"],a.contact=["Contact Us","Nous contacter"],a.payment=["We Accept Cards","Nous acceptons les cartes"],a.phone=["Phone","Téléphone"],a.locations=["Our Location","Notre emplacement"]}]),angular.module("altoApp").service("Home",function(){var a=new Date;return{years:a.getFullYear()-1987,open:a.getHours()<4||a.getHours()>=11||a.getDay()>=5&&a.getHours()<5?"We're Open!":"Open Tomorrow!"}});