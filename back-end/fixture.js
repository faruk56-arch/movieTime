const mongoose = require('mongoose')
const movieModel = require("./models/movie")
const genreModel = require("./models/genres")
const authorModel = require("./models/authors")
const adressModel = require("./models/adress")
const actorModel = require("./models/actors")
const originalLanguageModel = require("./models/originalLanguages")

mongoose.connect("mongodb+srv://soul:movietime@cluster0.425d9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addMovies = async () => {

    try {

        const genres = await genreModel.insertMany([
            {
                name: "Action"
            },
            {
                name: "Horreur"
            },
            {
                name: "Animation"
            },
            {
                name: "Aventure"
            },
            {
                name: "Policier"
            },
            {
                name: "Drame"
            },
            {
                name: "Fantastique"
            },
            {
                name: "Famille"
            },
            {
                name: "Thriller"
            },
            {
                name: "Comédie Dramatique"
            },
            {
                name: "Comédie"
            },
            {
                name: "Epouvante-horreur"
            },
            {
                name: "Science fiction"
            },
            {
                name: "Western"
            },
            {
                name: "Comédie musicale"
            },
            {
                name: "Romance"
            },
        ])

        console.log("genres", genres)

        const authors =
            await authorModel.insertMany([
                {
                    name: "Justin Lin"
                },
                {
                    name: "David Leslie"
                },
                {
                    name: "Johnson-McGoldrick"
                },
                {
                    name: "James Wan"
                },
                {
                    name: "Akira Toriyama"
                },
                {
                    name: "Francis Ford Coppola"
                },
                {
                    name: "Eiichiro Oda"
                },
                {
                    name: "Koyoharu Gotouge"
                },
                {
                    name: "Adam Shankman"
                },
                {
                    name: "Tom McGrath"
                },
                {
                    name: "Ruben Fleischer"
                },
                {
                    name: "Gore Verbinski"
                },
                {
                    name: "James Won"
                },
                {
                    name: "Alex Proyas"
                },
                {
                    name: "Barry Sonnenfeld"
                },
                {
                    name: "Michael Bay"
                },
                {
                    name: "Christopher Nolan"
                },
                {
                    name: "Martin Scorsese"
                },
                {
                    name: "Todd Phillips"
                },
                {
                    name: "John Musker"
                },
                {
                    name: "Ron Clements"
                },
                {
                    name: "Sam Taylor-Johnson"
                },
                {
                    name: "Jeff Fowler"
                }



            ])

        const actors =
            await actorModel.insertMany([
                {
                    name: "Vin diesel"
                },
                {
                    name: "Michelle Rodriguez"
                },
                {
                    name: "Jordana Brewster"
                },
                {
                    name: "Patrick Wilson"
                },
                {
                    name: "Vera Farmiga"
                },
                {
                    name: "Ruairi O'Connor"
                },
                {
                    name: "Masako Nosawa"
                },
                {
                    name: "Ryo Horikawa"
                },
                {
                    name: "Bin Shimada"
                },
                {
                    name: "Marlon Brando"
                },
                {
                    name: "Al Pacino"
                },
                {
                    name: "James Caan"
                },
                {
                    name: "Mayumi Tanaka"
                },
                {
                    name: "Akemi Okamura"
                },
                {
                    name: "Kazuya Nakai"
                },
                {
                    name: "Enzo Ratsito"
                },
                {
                    name: "Christophe Lemoine"
                },
                {
                    name: "Maxime Baudoin"
                },
                {
                    name: "Cade Courtley"
                },
                {
                    name: "Jordan Allison"
                },
                {
                    name: "Thimothé Vom Dorp"
                },
                {
                    name: "Stefan Godin"
                },
                {
                    name: "Vincent Ropion"
                },
                {
                    name: "Tom Hardy"
                },
                {
                    name: "Michelle Williams"
                },
                {
                    name: "Riz Ahmed"
                },
                {
                    name: "Naomi Watts"
                },
                {
                    name: "Brian Cox"
                },
                {
                    name: "Martin Henderson"
                },
                {
                    name: "Patrock Wilson"
                },
                {
                    name: "Rose Bryne"
                },
                {
                    name: "Ty Simpkins"
                },
                {
                    name: "Will Smith"
                },
                {
                    name: "Alan Tudyk"
                },
                {
                    name: "Bridget Moynahan"
                },
                {
                    name: "Kevin Kline"
                },
                {
                    name: "Kenneth Branagh"
                },
                {
                    name: "Martin Lawrance"
                },
                {
                    name: "Tcheky Karyo"
                },
                {
                    name: "Leonardo DiCaprio"
                },
                {
                    name: "Marion Cotillard"
                },
                {
                    name: "Elliot Page"
                },
                {
                    name: "Mark Ruffalo"
                },
                {
                    name: "Ben Kingsley"
                },
                {
                    name: "Joaquin Phoenix"
                },
                {
                    name: "Robert De Niro"
                },
                {
                    name: "Zazie Beetz"
                },
                {
                    name: "Paolo Domingo"
                },
                {
                    name: "Richard Darbois"
                },
                {
                    name: "Magali Barney"
                },
                {
                    name: "James Dornan"
                },
                {
                    name: "Dakota Johnson"
                },
                {
                    name: "Jennifer Ehle"
                },
                {
                    name: "Jim Carrey"
                },
                {
                    name: "James Marsden"
                },
                {
                    name: "Tika Sumpter"
                },
            ])

        const originalLanguages = await originalLanguageModel.insertMany([
            {
                name: "English"
            },
            {
                name: "Japanese"
            }
        ])


        console.log("originalLanguages", originalLanguages)

        const adresses = await adressModel.insertMany([
            {
                type: "Cinema",
                typeName: "FastCine",
                adress: "120 Rue Fast Cine"
            },
            {
                type: "Cinema",
                typeName: "HorreurCine",
                adress: "134 Rue Horreur Cine"
            },
            {
                type: "Cinema",
                typeName: "CineForAll",
                adress: "187 Rue Infiny"
            },
            {
                type: "DVD",
                typeName: "Horreur dvd",
                adress: "148 Rue Horror movies"
            },
            {
                type: "DVD",
                typeName: "The old base",
                adress: "245 Rue Old And Good"
            },
            {
                type: "DVD",
                typeName: "The new base",
                adress: "17 Rue New And Bad"
            },
            {
                type: "TV",
                typeName: "TF1",
                adress: "TF1"
            },
            {
                type: "TV",
                typeName: "TF2",
                adress: "TF2"
            },
            {
                type: "TV",
                typeName: "TF3",
                adress: "TF3"
            },
            {
                type: "Video a la demande",
                typeName: "Netflix",
                adress: "Netflix.com"
            },
            {
                type: "Video a la demande",
                typeName: "OCS",
                adress: "OCS.com"
            },
            {
                type: "Video a la demande",
                typeName: "Amazon",
                adress: "Amazon.com"
            },
            {
                type: "Streaming",
                typeName: "Mavanim",
                adress: "Mavanim.com"
            },
            {
                type: "Streaming",
                typeName: "OK",
                adress: "OK.ru"
            },
            {
                type: "Streaming",
                typeName: "Beru",
                adress: "Beru.com"
            },
            {
                type: "Internet",
                typeName: "Youtube",
                adress: "Youtube.com"
            },
            {
                type: "Internet",
                typeName: "Dailymotion",
                adress: "Dailymotion.com"
            },
            {
                type: "Internet",
                typeName: "Vimeo",
                adress: "Vimeo.com"
            }
        ])


        console.log("adresses", adresses)


        await movieModel.insertMany([
            {
                title: "Fast and furious 9",
                originalLanguage: [originalLanguages[0]],
                description: "Si Dom Toretto mène une vie tranquille, loin du bitume, auprès de Letty et de leur fils, le petit Brian, ils savent bien tous les deux que derrière les horizons les plus radieux se cachent toujours les dangers les plus sournois",
                image: 'https://fr.web.img3.acsta.net/c_310_420/pictures/21/05/18/10/40/2487837.jpg',
                actor: [actors[0], actors[1], actors[2]],
                author: [authors[0]],
                releaseDate: "14 juillet 2021",
                note: 3.9,
                voteCount: 12544,
                adress: [adresses[0]],
                genre: [genres[0]],
                adult: false
            },
            {
                title: "The Conjuring: The Devil Made Me Do It",
                originalLanguage: [originalLanguages[0]],
                description: "Conjuring 3 : sous l'emprise du diable retrace une affaire terrifiante de meurtre et de présence maléfique mystérieuse qui a même ébranlé les enquêteurs paranormaux ",
                image: 'https://fr.web.img3.acsta.net/c_310_420/pictures/21/04/22/15/18/0089345.jpg',
                actor: [actors[3], actors[4], actors[5]],
                author: [authors[1], authors[2], authors[3]],
                releaseDate: "9 juin 2021",
                note: 3.3,
                voteCount: 1697,
                adress: [adresses[1]],
                genre: [genres[1]],
                adult: true
            },
            {
                title: "Dragon Ball Super:Broly",
                originalLanguage: [originalLanguages[1]],
                description: "Goku et Vegeta font face à un nouvel ennemi,le Super Saïyen Légendaire Broly, dans un combat explosif pour sauver notre planète.",
                image: 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/02/22/16/14/0019120.jpg',
                actor: [actors[6], actors[7], actors[8]],
                author: [authors[4]],
                releaseDate: "13 mars 2019",
                note: 3.7,
                voteCount: 2401,
                adress: [adresses[5], adresses[12]],
                genre: [genres[0], genres[2], genres[3]],
                adult: false
            },
            {
                title: "The Godfather",
                originalLanguage: [originalLanguages[0]],
                description: "En 1945, à New York, les Corleone sont une des cinq familles de la mafia.",
                image: 'https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/35/57/73/18660716.jpg',
                actor: [actors[9], actors[10], actors[11]],
                author: [authors[5]],
                releaseDate: "18 octobre 1972 ",
                note: 4.5,
                voteCount: 51558,
                adress: [adresses[4], adresses[6]],
                genre: [genres[4], genres[5]],
                adult: false
            },
            {
                title: "One Piece Stampede",
                originalLanguage: [originalLanguages[1]],
                description: "Luffy et son équipage s’apprêtent à participer au plus grand rassemblement des pirates du monde entier : Le PIRATE FEST",
                image: 'https://fr.web.img2.acsta.net/c_310_420/pictures/19/09/13/14/45/4570058.jpg',
                actor: [actors[12], actors[13], actors[14]],
                author: [authors[6]],
                releaseDate: "09 octobre 2019 ",
                note: 3.9,
                voteCount: 11501,
                adress: [adresses[5], adresses[9], adresses[12]],
                genre: [genres[2], genres[3]],
                adult: false
            },
            {
                title: "Demon slayer : le train de l'infini",
                originalLanguage: [originalLanguages[1]],
                description: " Le groupe de Tanjirô a terminé son entraînement de récupération au domaine des papillons et embarque à présent en vue de sa prochaine mission à bord du train de l'infini",
                image: 'https://fr.web.img6.acsta.net/c_310_420/pictures/21/05/05/14/08/3703911.jpg?coixp=50&coiyp=65',
                actor: [actors[15], actors[16], actors[17]],
                author: [authors[7]],
                releaseDate: "19 mai 2021 ",
                note: 4.3,
                voteCount: 1234,
                adress: [adresses[2]],
                genre: [genres[0], genres[2], genres[6]],
                adult: false
            },
            {
                title: "Baby Sittor",
                originalLanguage: [originalLanguages[0]],
                description: " Shane Wolfe, un soldat d'élite, se voit confier la protection des enfants d'un scientifique assassiné",
                image: 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/53/22/18414544.jpg',
                actor: [actors[18], actors[19], actors[0]],
                author: [authors[8]],
                releaseDate: "8 juin 2005 ",
                note: 2.5,
                voteCount: 4208,
                adress: [adresses[4], adresses[7], adresses[13]],
                genre: [genres[0], genres[7], genres[8], genres[9]],
                adult: false
            },

            {
                title: "The Boss Baby",
                originalLanguage: [originalLanguages[0]],
                description: "C'est toujours un choc de voir ses parents rentrer à la maison avec un bébé dans les bras – surtout quand il porte une cravate, qu’il se balade avec un attaché-case et qu’il a la voix d’un quinquagénaire !",
                image: 'https://fr.web.img2.acsta.net/c_310_420/pictures/17/01/19/10/11/597368.jpg',
                actor: [actors[20], actors[21], actors[22]],
                author: [authors[9]],
                releaseDate: "29 mars 2017 ",
                note: 3.3,
                voteCount: 4961,
                adress: [adresses[5], adresses[10]],
                genre: [genres[2], genres[7], genres[10]],
                adult: false
            },
            {
                title: "Venom",
                originalLanguage: [originalLanguages[0]],
                description: "Possédé par un symbiote qui agit de manière autonome,le journaliste Eddie Brock devient le protecteur létal Venom.",
                image: 'https://fr.web.img6.acsta.net/c_310_420/pictures/18/09/20/10/41/4338768.jpg',
                actor: [actors[23], actors[24], actors[25]],
                author: [authors[10]],
                releaseDate: "10 octobre 2018 ",
                note: 3.2,
                voteCount: 9836,
                adress: [adresses[5], adresses[11], adresses[14]],
                genre: [genres[0], genres[12]],
                adult: false
            },
            {
                title: "The Ring",
                originalLanguage: [originalLanguages[0]],
                description: "Lorsque sa nièce trouve la mort foudroyée par la peur une semaine après avoir visionné une mystérieuse cassette vidéo, Rachel Keller, une journaliste de Seattle, décide d'enquêter sur ce fameux enregistrement. Aidée de son ex-mari Noah, elle découvre que cette cassette est porteuse d'une étrange malédiction : quiconque la visionne est condamné à périr dans de terribles circonstances.Rachel prend tout de même le risque de regarder l'enregistrement",
                image: 'https://fr.web.img4.acsta.net/c_310_420/pictures/17/01/10/17/11/474096.jpg',
                actor: [actors[26], actors[27], actors[28]],
                author: [authors[11]],
                releaseDate: "5 février 2003",
                note: 3.2,
                voteCount: 14919,
                adress: [adresses[3], adresses[8], adresses[13]],
                genre: [genres[11]],
                adult: true
            },
            {
                title: "Insidious",
                originalLanguage: [originalLanguages[0]],
                description: "Josh, son épouse et leurs trois enfants vivent depuis peu dans leur nouvelle maison lorsque l’aîné tombe dans un coma inexpliqué.",
                image: 'https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/82/91/46/19720507.jpg',
                actor: [actors[29], actors[30], actors[31]],
                author: [authors[12]],
                releaseDate: "15 juin 2011",
                note: 3.4,
                voteCount: 8577,
                adress: [adresses[3], adresses[8], adresses[14], adresses[15]],
                genre: [genres[11]],
                adult: true
            },
            {
                title: "I robot",
                originalLanguage: [originalLanguages[0]],
                description: "En 2035, les robots sont devenus de parfaits assistants pour les êtres humains.Le détective Del Spooner enquête sur le meurtre du docteur Alfred Lanning, un chercheur en robotique. Le principal suspect semble être un androïde nommé Sonny.Or, si l'on s'en réfère aux lois de la robotique, les robots ne sont pas dotés de la faculté de tuer",
                image: 'https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/35/23/49/18381860.jpg',
                actor: [actors[32], actors[33], actors[34]],
                author: [authors[13]],
                releaseDate: "28 juillet 2004",
                note: 3.7,
                voteCount: 46101,
                adress: [adresses[4], adresses[6], adresses[10], adresses[13]],
                genre: [genres[0], genres[12]],
                adult: false
            },
            {
                title: "Wild wild west",
                originalLanguage: [originalLanguages[0]],
                description: "1869. Pour neutraliser son plus puissant ennemi, le démoniaque et richissime Dr Arliss Loveless, le président des États-Unis désigne deux agents spéciaux,James West et Artemus Gordon",
                image: 'https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/68/34/57/19021919.jpg',
                actor: [actors[32], actors[35], actors[36]],
                author: [authors[14]],
                releaseDate: "4 août 1999",
                note: 3.4,
                voteCount: 17075,
                adress: [adresses[4], adresses[6], adresses[10], adresses[13]],
                genre: [genres[0], genres[3], genres[13]],
                adult: false
            },
            {
                title: "Bad boys",
                originalLanguage: [originalLanguages[0]],
                description: "Si Mike Lowrey est un séducteur invéteré, héritier d'une fortune et policier par passion, son collègue et ami Marcus Burnett est un homme rangé, marié et père de famille.Leur amitié ne les empêche pas d'avoir des méthodes parfaitement différentes.Mais la disparition de cent kilos d'héroine, dérobés dans les locaux mêmes de la brigade des stups, va leur faire oublier leur concept sur la façon d'exercer leur métier, pour se lancer a la poursuite des voleurs.",
                image: 'https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/65/93/84/20404475.jpg',
                actor: [actors[32], actors[37], actors[38]],
                author: [authors[15]],
                releaseDate: "5 juillet 1995",
                note: 3.2,
                voteCount: 176097,
                adress: [adresses[4], adresses[7], adresses[9],],
                genre: [genres[0], genres[4], genres[10]],
                adult: false
            },
            {
                title: "Inception",
                originalLanguage: [originalLanguages[0]],
                description: "Dom Cobb est un voleur expérimenté – le meilleur qui soit dans l’art périlleux de l’extraction : sa spécialité consiste à s’approprier les secrets les plus précieux d’un individu, enfouis au plus profond de son subconscient, pendant qu’il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l’univers trouble de l’espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier qui a perdu tout ce qui lui est cher. Mais une ultime mission pourrait lui permettre de retrouver sa vie d’avant – à condition qu’il puisse accomplir l’impossible : l’inception. Au lieu de subtiliser un rêve, Cobb et son équipe doivent faire l’inverse : implanter une idée dans l’esprit d’un individu. S’ils y parviennent, il pourrait s’agir du crime parfait. Et pourtant, aussi méthodiques et doués soient-ils, rien n’aurait pu préparer Cobb et ses partenaires à un ennemi redoutable qui semble avoir systématiquement un coup d’avance sur eux. Un ennemi dont seul Cobb aurait pu soupçonner l’existence.",
                image: 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/72/34/14/19476654.jpg',
                actor: [actors[39], actors[40], actors[41]],
                author: [authors[16]],
                releaseDate: "21 juillet 2010",
                note: 4.5,
                voteCount: 99317,
                adress: [adresses[4], adresses[6], adresses[10],],
                genre: [genres[0], genres[4], genres[10]],
                adult: false
            },
            {
                title: "Shutter Island",
                originalLanguage: [originalLanguages[0]],
                description: "En 1954, le marshal Teddy Daniels et son coéquipier Chuck Aule sont envoyés enquêter sur l'île de Shutter Island",
                image: 'https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/69/96/84/19151192.jpg',
                actor: [actors[39], actors[42], actors[43]],
                author: [authors[17]],
                releaseDate: "24 février 2010 ",
                note: 4.4,
                voteCount: 70769,
                adress: [adresses[4], adresses[8], adresses[11],],
                genre: [genres[8]],
                adult: false
            },
            {
                title: "Joker",
                originalLanguage: [originalLanguages[0]],
                description: "Le film, qui relate une histoire originale inédite sur grand écran,se focalise sur la figure emblématique de l’ennemi juré de Batman.",
                image: 'https://fr.web.img4.acsta.net/c_310_420/pictures/19/09/03/12/02/4765874.jpg',
                actor: [actors[44], actors[45], actors[46]],
                author: [authors[18]],
                releaseDate: "9 octobre 2019 ",
                note: 4.4,
                voteCount: 37498,
                adress: [adresses[5], adresses[8], adresses[12],],
                genre: [genres[5]],
                adult: false
            },
            {
                title: "Aladdin",
                originalLanguage: [originalLanguages[0]],
                description: "Comment Aladdin, grâce à la felonie du grand vizir, va se procurer la lampe magique qui héberge le fameux génie et nous entraïner dans la plus étonnante des aventures.",
                image: 'https://fr.web.img3.acsta.net/c_310_420/pictures/16/06/06/09/31/004115.jpg',
                actor: [actors[47], actors[48], actors[49]],
                author: [authors[19], authors[20]],
                releaseDate: "10 novembre 1993 ",
                note: 4.3,
                voteCount: 36940,
                adress: [adresses[4], adresses[8], adresses[12], adresses[14]],
                genre: [genres[2], genres[14], genres[15]],
                adult: false
            },
            {
                title: "Fifty shades of grey",
                originalLanguage: [originalLanguages[0]],
                description: "L'histoire d'une romance passionnelle,et sexuelle, entre un jeune homme riche amateur de femmes, et une étudiante vierge de 22 ans.",
                image: 'https://fr.web.img5.acsta.net/c_310_420/pictures/14/11/14/11/08/371396.jpg',
                actor: [actors[50], actors[51], actors[52]],
                author: [authors[21]],
                releaseDate: "11 février 2015 ",
                note: 2.1,
                voteCount: 18623,
                adress: [adresses[5], adresses[7], adresses[12],],
                genre: [genres[5], genres[8], genres[15]],
                adult: true
            },
            {
                title: "Sonic the hedgehog",
                originalLanguage: [originalLanguages[0]],
                description: "L'histoire du hérisson bleu le plus rapide du monde qui arrive sur Terre,",
                image: 'https://fr.web.img6.acsta.net/c_310_420/pictures/20/02/10/17/16/0746079.jpg',
                actor: [actors[53], actors[54], actors[55]],
                author: [authors[22]],
                releaseDate: "12 février 2020 ",
                note: 2.8,
                voteCount: 5801,
                adress: [adresses[5], adresses[14],],
                genre: [genres[3], genres[7]],
                adult: false
            },
        ])
        console.log("The collection movie was created with the base data");

    } catch (err) {
        console.error(err)
    }
}

addMovies()

