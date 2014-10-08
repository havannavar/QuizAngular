angular.module('quiz',[])
	.controller('QuizController',['$scope',function($scope) {
		$scope.numPergunta = 0;
		$scope.pontos = 0;
		$scope.usuario = "";
		$scope.visivel = "block";
		$scope.resultado = "none";
		$scope.texto = "";
		$scope.imagem = "";
	
		$scope.perguntas = [
			{id:"01",
			 pergunta:"Em X-Men Dias de um Futuro Esquecido, quem volta no tempo?",
			 respA:"Logan",
			 respB:"Professor X",
			 respC:"Magneto",
			 respD:"Vampira",
			 correta:"respA",
			 pontos:2,
			 imagem:"xmen.jpg"
			},
			{id:"02",
			 pergunta:"Heath Ledger interpretou?",
			 respA:"Logan",
			 respB:"Jacob Grimm",
			 respC:"Neo",
			 respD:"Harvey Dent",
			 correta:"respB",
			 pontos:2,
			 imagem:"joker.jpg"
			},
			{id:"03",
			 pergunta:"Quantos cisnes há no filme Cisne Negro?",
			 respA:"4",
			 respB:"1",
			 respC:"3",
			 respD:"0",
			 correta:"respD",
			 pontos:2,
			 imagem:"http://28.media.tumblr.com/tumblr_letsvisXn01qabkrxo1_r1_500.gif"
			},
			{id:"04",
			 pergunta:"Charlie Kaufman e o diretor Michel Gondry queriam abandonar a escrita do roteiro quando ouviram falar sobre que filme?",
			 respA:"Forrest Gump",
			 respB:"Big Fish",
			 respC:"Memento",
			 respD:"The Curious Case of Benjamin Button",
			 correta:"respC",
			 pontos:2,
			 imagem:"http://2.bp.blogspot.com/-MT1TJPZc8GI/UE-kkqPiIGI/AAAAAAAAAJU/k_DSElK-pMg/s1600/Brilho+eterno+de+uma+mente+sem+lembran%C3%A7a.jpg"
			},
			{id:"05",
			 pergunta:"No filme The Matrix, qual a propaganda que aparece na cena da estação de trem?",
			 respA:"Apple",
			 respB:"Windows",
			 respC:"HP",
			 respD:"Nenhuma",
			 correta:"respC",
			 pontos:2,
			 imagem:"http://4.bp.blogspot.com/-avoot2jSrKY/UT1Hq2V5MbI/AAAAAAAAAFQ/3J1jV7xdHFA/s1600/MatrixBluePillRedPill.jpg"
			},
			{id:"06",
			 pergunta:"Qual o esporte praticado no filme Karate Kid?",
			 respA:"Karate",
			 respB:"Kung Fu",
			 respC:"Capoeira",
			 respD:"Jiujtsu",
			 correta:"respB",
			 pontos:2,
			 imagem:"http://www.thewallpapers.org/photo/24932/karate-kid-006.jpg"
			},
			{id:"07",
			 pergunta:"Qual a tematica do filme Donnie Darko?",
			 respA:"Ficção",
			 respB:"Drama",
			 respC:"Suspense",
			 respD:"Aventura",
			 correta:"respA",
			 pontos:2,
			 imagem:"http://sites.middlebury.edu/enam0323psychothrill/files/2014/04/Donnie-Darko-donnie-darko-1032758_1024_768.jpg"
			},
			{id:"08",
			 pergunta:"No filme Plano de Voo, Jodie Foster...",
			 respA:"Tinha problemas mentais",
			 respB:"Sequestrou o avião",
			 respC:"Estava a procura da filha",
			 respD:"Matou o marido",
			 correta:"respC",
			 pontos:2,
			 imagem:"https://cinemaoscareafins.files.wordpress.com/2012/11/flightplan.jpg"
			},
			{id:"09",
			 pergunta:"Quais são os anões do filme O Hobbit",
			 respA:"Thorin, Balin, Fili, Dwalin, Bombur, Oin, Dori, Gloin, Bofur, Ori",
			 respB:"Thorin, Kili, Fili, Dwalin, Bombur, Oin, Durin, Gloin, Bofur, Ori",
			 respC:"Thorin, Kili, Fili, Min, Bombur, Oin, Dori, Gloin, Bofur, Ori",
			 respD:"Thorin, Kili, Fili, Dwalin, Bombur, Oin, Dori, Gloin, Bofur, Ori",
			 correta:"respD",
			 pontos:2,
			 imagem:"http://www.wired.com/images_blogs/underwire/2012/12/The-Hobbit_01.jpg"
			},
			{id:"10",
			 pergunta:"Que filme é este?",
			 respA:"Dark City",
			 respB:"Sim City",
			 respC:"Nosferatu",
			 respD:"Metropolis",
			 correta:"respD",
			 pontos:2,
			 imagem:"http://metropolis1927.com/inc/img/5.jpg"
			}
		];
		
		$scope.perguntaAtual = $scope.perguntas[$scope.numPergunta];
		$scope.imagem = $scope.perguntas[$scope.numPergunta].imagem;
		
		$scope.responder = function() {
			if ($scope.resposta == $scope.perguntas[$scope.numPergunta].correta)
			{
				$scope.pontos += $scope.perguntas[$scope.numPergunta].pontos;
			}
			
			$scope.numPergunta += 1;
			
			if ($scope.numPergunta >= 10)
			{
				$scope.perguntaAtual ="";
				$scope.visivel = "none";
				$scope.resultado = "block";
				
				if ($scope.pontos <=6)
				{
					$scope.texto = "Você é o Homer Simpsons";
					$scope.imagem = "http://wallpaper.ultradownloads.com.br/94781_Papel-de-Parede-Homer-Simpson--94781_1680x1050.jpg";
				}
				else if ($scope.pontos > 6 && $scope.pontos <= 10)
				{
					$scope.texto = "Você é a Penny";
					$scope.imagem = "http://blogstatus.com/wp-content/uploads/2014/09/Big-Bang-Theory-Kaley-Cuoco-Penny-From-The-Hd-Free-241909.jpg";
				}
				else if ($scope.pontos > 10 && $scope.pontos <= 16)
				{
					$scope.texto = "Você é o Dexter Morgan";
					$scope.imagem = "http://1.bp.blogspot.com/-AKKSS6RnQYM/TilraskvAOI/AAAAAAAAASc/bYnfVyqvWpQ/s1600/Portrait-Dexter.jpg";
				}
				else if ($scope.pontos > 16 && $scope.pontos <= 20)
				{
					$scope.texto = "Você é o Sheldon Cooper";
					$scope.imagem = "http://bradleytroy.files.wordpress.com/2013/01/quotimsheldoncooperyourargumentisinvalid-quot_341b5f3e0aa2f30536f7fd8394f7b4e7.jpg";
				}
			}
			else {
				$scope.perguntaAtual = $scope.perguntas[$scope.numPergunta];
				$scope.imagem = $scope.perguntas[$scope.numPergunta].imagem;
			}
			
			$scope.resposta = "";
		};
	}]);