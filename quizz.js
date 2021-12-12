/* Explication du fonctionnement :
Il y a 20 questions de type Vrai ou Faux et 20 questions à choix multiples.
Je choisis de façon aléatoire 5 questions de chaque catégorie (évidamment différentes les une des autres) -> De façon à avoir 10 questions.
Je compte les points et l'affiche à la fin.

Le code peut paraitre très long ou complexe, mais la plupart de celui ci est tout simplement du texte tel que les questions / réponses.*/

let wallpaper = document.getElementById('wallpaper');
let vraifaux = Math.floor(Math.random() * 20 + 1);
let dejavraifaux = [];
let choixmultiple = Math.floor(Math.random() * 20 + 1);;
let dejachoixmultiple = [];
let tour = 0;
let point = 0;
let reponse = "";
let explication = "";
let titre = document.getElementById('deroule');
let question = document.getElementById('laquestion');
let solution = document.getElementById('lasolution');
let secsolution = document.getElementById('solution');
let btnvrai = document.getElementById('vrai');
let btnfaux = document.getElementById('faux');
let btnc1 = document.getElementById('choix1');
let c1 = document.getElementById('c1');
let btnc2 = document.getElementById('choix2');
let btnc3 = document.getElementById('choix3');
let btnc4 = document.getElementById('choix4');
let resultat = document.getElementById('resultat');
let restexte = document.getElementById('restexte');
let secquestion = document.getElementById('question');
let prequizz = document.getElementById('prequizz');
let commentairefin = document.getElementById('commentaire');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    wallpaper.style.top = value * 0.5 + 'px';
})

affichequestion();
secsolution.style.display = "none";
secquestion.style.display = "none";

function commencequizz() {
    secquestion.style.display = "block";
    prequizz.style.display = "none";
}

function recommencequizz() {
    resultat.style.display = "none";
    tour = 0;
    point = 0;
    affichequestion();
    titre.innerHTML = "<span>Quizz</span> - Paladins <i>(" + tour + "/10)</i>";
    secsolution.style.display = "none";
    secquestion.style.display = "block";
    dejavraifaux = [];
    dejachoixmultiple = [];
}

function prochaine() {
    vraifaux = Math.floor(Math.random() * 20 + 1);
    choixmultiple = Math.floor(Math.random() * 20 + 1);;
    tour = tour + 1;
    secsolution.style.display = "none";
    titre.innerHTML = "<span>Quizz</span> - Paladins <i>(" + tour + "/10)</i>";
    while (dejavraifaux.includes(vraifaux)) {
        vraifaux = Math.floor(Math.random() * 20 + 1);
    }
    while (dejachoixmultiple.includes(choixmultiple)) {
        choixmultiple = Math.floor(Math.random() * 20 + 1);
    }
    if (tour >= 10) {
        affichefin();
    } else {
        affichequestion();
    }
}

function affichequestion() {
    if (tour % 2 == 0) {
        btnvrai.style.display = "inline-block";
        btnfaux.style.display = "inline-block";
        btnc1.style.display = "none";
        btnc2.style.display = "none";
        btnc3.style.display = "none";
        btnc4.style.display = "none";
        switch (vraifaux) {
            case 1: question.innerHTML = "Seris est une ville ET un personnage dans le lore du jeu.";
                reponse = "vrai";
                explication = "Seris est à la fois un nom de ville et l'entité ayant pris le corp de la soeurs de Sarah <i>(furia)</i>, soit le personnage jouable en jeu.";
                dejavraifaux.push(1);
                /* A COMPLETER */
                break;
            case 2: question.innerHTML = "On peut voir les ancêtres de pip dans l'une des map du jeu.";
                reponse = "vrai";
                explication = "On peut retrouver des portraits des ancêtres de pip dans les spawns de la map Mangrove.";
                dejavraifaux.push(2);
                break;
            case 3: question.innerHTML = "Seulement 2 personnages viennent des ténèbres <i>(depuis le patch Absolution)</i>.";
                reponse = "vrai";
                explication = "A ne pas confondre avec les abysses, seulement Vora et Yagorath font partis des ténèbres.";
                dejavraifaux.push(3);
                break;
            case 4: question.innerHTML = "Il existe 5 factions dans paladins.";
                reponse = "vrai";
                explication = "On retouves les Magistrats, les Paladins, les Abysses, les Ténèbres, et les personnages Neutres.";
                dejavraifaux.push(4);
                break;
            case 5: question.innerHTML = "L'engin de Ruckus s'appelle Bolt est à sa propre conscience.";
                reponse = "vrai";
                explication = "Son engin a pris vie suite au contact avec une pierre magique. On entand d'ailleurs dans plusieurs voiceline du personnage Bolt intervenir.";
                dejavraifaux.push(5);
                break;
            case 6: question.innerHTML = "Lex est le père d'Atlas.";
                reponse = "vrai";
                explication = "Si la différence d'âge parait pourtant si grande, c'est car Atlas a voyager dans le temps pour revenir dans le passé et sauver le monde des envahisseurs.";
                dejavraifaux.push(6);
                break;
            case 7: question.innerHTML = "Strix est le mentor de Kinessa.";
                reponse = "vrai";
                explication = "Ainsi, Strix a tout appris à Kinessa jusqu'a lui donner l'arme qu'elle possède encore aujourd'hui.";
                dejavraifaux.push(7);
                break;
            case 8: question.innerHTML = "Koga est l'élève de Zhin.";
                reponse = "vrai";
                explication = "";
                dejavraifaux.push(8);
                /* A COMPLETER */
                break;
            case 9: question.innerHTML = "Corvus est le fils de Karne.";
                reponse = "vrai";
                explication = "Corvus est bien le fils de Karne <i>(qui est le chef des Magistrats)</i>.";
                dejavraifaux.push(9);
                break;
            case 10: question.innerHTML = "Jenos est Io sont des dieux.";
                reponse = "vrai";
                explication = "Ils sont chacun descandus sur Terre pour sauver le monde.";
                dejavraifaux.push(10);
                /* A COMPLETER */
                break;
            case 11: question.innerHTML = "Torvald est la créature la plus puissante de l'univers.";
                reponse = "faux";
                explication = "Selon le lore lui même, se serait Seris.";
                dejavraifaux.push(11);
                break;
            case 12: question.innerHTML = "Inara et Terminus sont mariés.";
                reponse = "faux";
                explication = "Ils ne sont qu'amants.";
                dejavraifaux.push(12);
                break;
            case 13: question.innerHTML = "Cassie a toujours été accompagné de son arbalète.";
                reponse = "faux";
                explication = "Dans les premières version du jeu, Cassie était équipé d'un arc et non d'un arbalète.";
                dejavraifaux.push(13);
                break;
            case 14: question.innerHTML = "Raum est venu des abysses par lui-même.";
                reponse = "faux";
                explication = "C'est corvus qui, manipulé, à ouvert un portail entre les abysses et le monde des humains, qui a permis à Raum de s'introduire sur Terre.";
                dejavraifaux.push(14);
                break;
            case 15: question.innerHTML = "Buck est un disciple de Zhin.";
                reponse = "faux";
                explication = "Buck est un moine, et un disciple de Jenos.";
                dejavraifaux.push(15);
                break;
            case 16: question.innerHTML = "Furia et Seris sont soeurs.";
                reponse = "faux";
                explication = "Furia et Seris sont le noms des entités ayant pris possessions des deux corps des soeurs.";
                dejavraifaux.push(16);
                break;
            case 17: question.innerHTML = "La capacité ultime de Moji le rend immunisé au dégâts.";
                reponse = "faux";
                explication = "La plupart des bon joueurs de Moji utilise seulement son bouclier pendant l'ultime pour ainsi être immunisé aux dégâts.";
                dejavraifaux.push(17);
                break;
            case 18: question.innerHTML = "Lian est immunisé aux dégâts pendant sa capacité ultime.";
                reponse = "faux";
                explication = "Elle subit seulement une reduction de dégâts.";
                dejavraifaux.push(18);
                break;
            case 19: question.innerHTML = "Talus est un nain (comme Barik).";
                reponse = "faux";
                explication = "C'est un ska'drin.";
                dejavraifaux.push(19);
                break;
            case 20: question.innerHTML = "Imani peut se transformer en dragon.";
                reponse = "faux";
                explication = "Elle peut seulement appeler son dragon.";
                dejavraifaux.push(20);
                break;
            default:
                question.innerHTML = "Une erreur c'est produite ...";
        }
    } else {
        btnvrai.style.display = "none";
        btnfaux.style.display = "none";
        btnc1.style.display = "inline-block";
        btnc2.style.display = "inline-block";
        btnc3.style.display = "inline-block";
        btnc4.style.display = "inline-block";
        switch (choixmultiple) {
            case 1: question.innerHTML = "Combien y a t-il de champion <i>(en considerant Azaan comme le dernier)</i> ?";
                btnc1.innerHTML = "52";
                btnc2.innerHTML = "55";
                btnc3.innerHTML = "48";
                btnc4.innerHTML = "Il n'y en a pas";
                reponse = "c1";
                explication = "Il y a en effet 52 champions.";
                dejachoixmultiple.push(1);
                break;
            case 2: question.innerHTML = "D'où vient Makoa ?";
                btnc1.innerHTML = "L'île des Serpents";
                btnc2.innerHTML = "L'île de la Grenouille";
                btnc3.innerHTML = "L'île du Juaguar";
                btnc4.innerHTML = "Paris";
                reponse = "c2";
                explication = "Makoa était le protecteur de L'île de la Grenouille, où habite les ska'drins.";
                dejachoixmultiple.push(2);
                break;
            case 3: question.innerHTML = "Quelle est le nom du chef des Magistrats ?";
                btnc1.innerHTML = "Khan";
                btnc2.innerHTML = "Augustin";
                btnc3.innerHTML = "Karne";
                btnc4.innerHTML = "Lucarne";
                reponse = "c3";
                explication = "Le chef des Magistrats s'appelle Karne.";
                dejachoixmultiple.push(3);
                break;
            case 4: question.innerHTML = "Quelle est le nom de la chef de la Resistance <i>(les Paladins)</i> ?";
                btnc1.innerHTML = "Valera";
                btnc2.innerHTML = "Augustine";
                btnc3.innerHTML = "Valkyrie";
                btnc4.innerHTML = "Voldemort";
                reponse = "c1";
                explication = "La chef de la Résistance <i>(les Paladins)</i> s'apelle Valera.";
                dejachoixmultiple.push(4);
                break;
            case 5: question.innerHTML = "Quelles sont les noms des familiers de Moji ?";
                btnc1.innerHTML = "Tic et Tac";
                btnc2.innerHTML = "Po et Li";
                btnc3.innerHTML = "Julien et Justine";
                btnc4.innerHTML = "Pète et Repète";
                reponse = "c2";
                explication = "Le noms des familiers de Moji sont Po et Li <i>(Po-Li)</i>.";
                dejachoixmultiple.push(5);
                break;
            case 6: question.innerHTML = "De qu'elle maison font partis Khan, Lian, et Rei ?";
                btnc1.innerHTML = "Une épade";
                btnc2.innerHTML = "Gryffondor";
                btnc3.innerHTML = "Aico";
                btnc4.innerHTML = "Wekono";
                reponse = "c3";
                explication = "Khan, Lian, et Rei viennent de la maison des Aicos.";
                dejachoixmultiple.push(6);
                break;
            case 7: question.innerHTML = "Combien y a t-il d'objets dans le jeu ?";
                btnc1.innerHTML = "16";
                btnc2.innerHTML = "9";
                btnc3.innerHTML = "727";
                btnc4.innerHTML = "20";
                reponse = "c1";
                explication = "Il y a 4x4 objet dans Paladins <i>(soit 16)</i>.";
                dejachoixmultiple.push(7);
                break;
            case 8: question.innerHTML = "Combien de fois Tiberius peut-il utiliser ses capacités durant son ultime ?";
                btnc1.innerHTML = "4 fois";
                btnc2.innerHTML = "5 fois";
                btnc3.innerHTML = "Oui";
                btnc4.innerHTML = "Il ne peut pas";
                reponse = "c2";
                explication = "Tiberius peut 'dash' 5 fois durant son ultime pour une période de 15s.";
                dejachoixmultiple.push(8);
                break;
            case 9: question.innerHTML = "Comment s'appelle la capacité ultime de Androxus ?";
                btnc1.innerHTML = "Bras Vert";
                btnc2.innerHTML = "piou piou piou";
                btnc3.innerHTML = "Bras Maudit";
                btnc4.innerHTML = "Bras Enchanté";
                reponse = "c3";
                explication = "L'ultime d'Androxus se nomme 'Bras Maudit'.";
                dejachoixmultiple.push(9);
                break;
            case 10: question.innerHTML = "A qu'elle niveau peut-on débloqué le skin 'obsidienne' d'un champion ?";
                btnc1.innerHTML = "niveau 14";
                btnc2.innerHTML = "niveau 20";
                btnc3.innerHTML = "niveau Max";
                btnc4.innerHTML = "Ce skin n'existe pas";
                reponse = "c1";
                explication = "Le skin 'obsidienne' d'un champion est débloqué au niveau 14.";
                dejachoixmultiple.push(10);
                break;
            case 11: question.innerHTML = "A qu'elle niveau peut-on débloqué le skin 'cosmique' d'un champion ?";
                btnc1.innerHTML = "niveau 14";
                btnc2.innerHTML = "niveau 20";
                btnc3.innerHTML = "niveau Max";
                btnc4.innerHTML = "Ce skin n'existe pas";
                reponse = "c2";
                explication = "Le skin 'cosmique' d'un champion est débloqué au niveau 20.";
                dejachoixmultiple.push(11);
                break;
            case 12: question.innerHTML = "A qu'elle niveau peut-on débloqué le titre d'un champion ?";
                btnc1.innerHTML = "niveau 20";
                btnc2.innerHTML = "C'est payant";
                btnc3.innerHTML = "niveau 30";
                btnc4.innerHTML = "niveau Max";
                reponse = "c3";
                explication = "Le titre d'un champion est débloqué au niveau 30.";
                dejachoixmultiple.push(12);
                break;
            case 13: question.innerHTML = "Combien de skin maeve possède-t-elle <i>(tout skin compris)</i> ?";
                btnc1.innerHTML = "17";
                btnc2.innerHTML = "14";
                btnc3.innerHTML = "7";
                btnc4.innerHTML = "Elle n'en possède pas";
                reponse = "c1";
                explication = "Maeve possède 17 skins !";
                dejachoixmultiple.push(13);
                break;
            case 14: question.innerHTML = "Combien Yagorath possède-t-elle d'yeux ?";
                btnc1.innerHTML = "4";
                btnc2.innerHTML = "6";
                btnc3.innerHTML = "2";
                btnc4.innerHTML = "1";
                reponse = "c2";
                explication = "Yagorath possède 6 yeux, 3 de chaque côtés.";
                dejachoixmultiple.push(14);
                break;
            case 15: question.innerHTML = "Combien de dégâts fait l'ult Jenos ?";
                btnc1.innerHTML = "2200";
                btnc2.innerHTML = "2600";
                btnc3.innerHTML = "2400";
                btnc4.innerHTML = "Infinis";
                reponse = "c3";
                explication = "L'ult de Jenos fait 2400 dégâts, ce qui est suffisant pour tuer la majorité des champions";
                dejachoixmultiple.push(15);
                break;
            case 16: question.innerHTML = "Quelle arme Grohk utilise-t-il ?";
                btnc1.innerHTML = "Un Baton de Foudre";
                btnc2.innerHTML = "Un Pistolet Laser";
                btnc3.innerHTML = "Un Bout de Bois";
                btnc4.innerHTML = "Un Surimi";
                reponse = "c1";
                explication = "Grohk possède un baton de foudre et tir donc de la foudre.";
                dejachoixmultiple.push(16);
                break;
            case 17: question.innerHTML = "Combien coûte l'objet cauteriser I ?";
                btnc1.innerHTML = "150 crédits";
                btnc2.innerHTML = "250 crédits";
                btnc3.innerHTML = "300 crédits";
                btnc4.innerHTML = "1000 PV";
                reponse = "c2";
                explication = "Cautériser I coûte 250 crédits de façon à être achetable dès le début de partis.";
                dejachoixmultiple.push(17);
                break;
            case 18: question.innerHTML = "Quelle est l'arme de Mal'Damba ?";
                btnc1.innerHTML = "Un Serpent";
                btnc2.innerHTML = "Un Lézard";
                btnc3.innerHTML = "Un Cobra";
                btnc4.innerHTML = "Une AK-47";
                reponse = "c3";
                explication = "L'arme de Mal'damba est un cobra.";
                dejachoixmultiple.push(18);
                break;
            case 19: question.innerHTML = "Combien chaque champions possèdent-t-ils actuellement de légendaires ?";
                btnc1.innerHTML = "3";
                btnc2.innerHTML = "4";
                btnc3.innerHTML = "2";
                btnc4.innerHTML = "Aucuns";
                reponse = "c1";
                explication = "Chaque champion possède 3 talents <i>(bien que dans la version béta du jeu, les champions en possédaient 4)</i>.";
                dejachoixmultiple.push(19);
                break;
            case 20: question.innerHTML = "Avec qui Sha Lin est-il en couple ?";
                btnc1.innerHTML = "Ying";
                btnc2.innerHTML = "Il ne l'ai pas";
                btnc3.innerHTML = "Cassie";
                btnc4.innerHTML = "Yagorath";
                reponse = "c2";
                explication = "Malgrès les nombreux fanart, Sha Lin n'est pas officiellement en couple.";
                dejachoixmultiple.push(20);
                break;
            default:
                question.innerHTML = "Une erreur c'est produite ...";
        }
    }
}

function vrai() {
    if (secsolution.style.display == "block") {
        return;
    }
    secsolution.style.display = "block";
    if (reponse == "vrai") {
        solution.innerHTML = "En effet, c'est Vrai ! " + explication;
        point = point + 1;
        solution.style.color = "#19743c";
    } else {
        solution.innerHTML = "Et non, c'est Faux ! " + explication;
        solution.style.color = "#a72929";
    }
}

function faux() {
    if (secsolution.style.display == "block") {
        return;
    }
    secsolution.style.display = "block";
    if (reponse == "faux") {
        solution.innerHTML = "En effet, c'est Faux ! " + explication;
        point = point + 1;
        solution.style.color = "#19743c";
    } else {
        solution.innerHTML = "Et non, C'est Vrai ! " + explication;
        solution.style.color = "#a72929";
    }
}

function choix1() {
    if (secsolution.style.display == "block") {
        return;
    }
    secsolution.style.display = "block";
    if (reponse == "c1") {
        solution.innerHTML = "Correct ! " + explication;
        point = point + 1;
        solution.style.color = "#19743c";
    } else {
        solution.innerHTML = "Dommage ! " + explication;
        solution.style.color = "#a72929";
    }
}

function choix2() {
    if (secsolution.style.display == "block") {
        return;
    }
    secsolution.style.display = "block";
    if (reponse == "c2") {
        solution.innerHTML = "Correct ! " + explication;
        point = point + 1;
        solution.style.color = "#19743c";
    } else {
        solution.innerHTML = "Dommage ! " + explication;
        solution.style.color = "#a72929";
    }
}

function choix3() {
    if (secsolution.style.display == "block") {
        return;
    }
    secsolution.style.display = "block";
    if (reponse == "c3") {
        solution.innerHTML = "Correct ! " + explication;
        point = point + 1;
        solution.style.color = "#19743c";
    } else {
        solution.innerHTML = "Dommage ! " + explication;
        solution.style.color = "#a72929";
    }
}

function choix4() {
    if (secsolution.style.display == "block") {
        return;
    }
    secsolution.style.display = "block";
    if (reponse == "c4") {
        solution.innerHTML = "Correct ! " + explication;
        point = point + 1;
        solution.style.color = "#19743c";
    } else {
        solution.innerHTML = "Dommage ! " + explication;
        solution.style.color = "#a72929";
    }
}

function affichefin() {
    secquestion.style.display = "none";
    btnvrai.style.display = "none";
    btnfaux.style.display = "none";
    btnc1.style.display = "none";
    btnc2.style.display = "none";
    btnc3.style.display = "none";
    btnc4.style.display = "none";
    resultat.style.display = "block";
    let retour = "Error"
    if (point == 10) {
        retour = "Mais tu es un expert ! O_O";
        commentairefin.style.color = "#19743c";
    } else if (point >= 7) {
        retour = "Bravo ! Tu connais bien le jeu !";
        commentairefin.style.color = "#19743c";
    } else if (point >= 5) {
        retour = "À deux doigts d'un bon score !";
        commentairefin.style.color = "#a72929";
    } else { /* score sous-entendus : - de 5/10*/
        retour = "Je suis sûr que tu peux mieux faire !";
        commentairefin.style.color = "#a72929";
    }
    commentairefin.innerHTML = retour;
    restexte.innerHTML = "Ton score est de : " + point + "/10"
}