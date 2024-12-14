export interface QANDA {
    Question: string,
    Answer: string,
    Category: Category,
    NumberOfQuestionInCategory: number,
    YTVideoLink?: string,
    PlayOnlyAudio?: boolean
};

export enum Category {
    MOVIESANDSERIES,
    SIENCEANDTECHNOLOGY,
    GAMES,
    HISTORY,
    GEOGRAPHY,
    SPORT
};

export const Data: QANDA[] = [
    // MOVIESANDSERIES
    {
        Question: "Film 'Objegla Mlada' je snimljen 1999. a glavnu ulogu igra?",
        Answer: "Julia Roberts",
        Category: Category.MOVIESANDSERIES,
        NumberOfQuestionInCategory: 1,
    },
    {
        Question: "Koji je glumac poznat po ulozi Iron Mana u Marvelovim filmovima?",
        Answer: "Robert Downey Jr.",
        Category: Category.MOVIESANDSERIES,
        NumberOfQuestionInCategory: 2,
    },
    {
        Question: "Koja serija prati život porodice Stark u fantastičnom svijetu Westerosa?",
        Answer: "Igra prijestolja (Game of Thrones)",
        Category: Category.MOVIESANDSERIES,
        NumberOfQuestionInCategory: 3,
    },
    {
        Question: "Koji je redatelj poznat po filmovima 'Inception' i 'Interstellar'?",
        Answer: "Christopher Nolan",
        Category: Category.MOVIESANDSERIES,
        NumberOfQuestionInCategory: 4,
    },
    {
        Question: "Koji je najskuplji film ikada snimljen?",
        Answer: "Avatar: The Way of Water",
        Category: Category.MOVIESANDSERIES,
        NumberOfQuestionInCategory: 5,
    },

    // SIENCEANDTECHNOLOGY
    {
        Question: "Koje planete su prve komšije zemlje?",
        Answer: "Venera i Mars",
        Category: Category.SIENCEANDTECHNOLOGY,
        NumberOfQuestionInCategory: 1,
    },
    {
        Question: "Koji uređaj koristimo za mjerenje vremena?",
        Answer: "Sat",
        Category: Category.SIENCEANDTECHNOLOGY,
        NumberOfQuestionInCategory: 2,
    },
    {
        Question: "Koji je prvi čovjek na Mjesecu?",
        Answer: "Neil Armstrong",
        Category: Category.SIENCEANDTECHNOLOGY,
        NumberOfQuestionInCategory: 3,
    },
    {
        Question: "Koja teorija se koristi za objašnjenje širenja svemira?",
        Answer: "Teorija Velikog praska",
        Category: Category.SIENCEANDTECHNOLOGY,
        NumberOfQuestionInCategory: 4,
    },
    {
        Question: "Koja godine smo imali prvi računar i kako se zvao?",
        Answer: "Eniac (1945)",
        Category: Category.SIENCEANDTECHNOLOGY,
        NumberOfQuestionInCategory: 5,
    },

    // GAMES
    {
        Question: "Koji je lik glavni heroj u igrici 'Super Mario Bros'?",
        Answer: "Mario",
        Category: Category.GAMES,
        NumberOfQuestionInCategory: 1,
    },
    {
        Question: "Koji je studio kreirao igricu 'Minecraft'?",
        Answer: "Mojang",
        Category: Category.GAMES,
        NumberOfQuestionInCategory: 2,
    },
    {
        Question: "Koja je igrica poznata po popularnom liku Lara Croft?",
        Answer: "Tomb Raider",
        Category: Category.GAMES,
        NumberOfQuestionInCategory: 3,
    },
    {
        Question: "Koji je naziv oružja koje nosi Master Chief u igrici 'Halo'?",
        Answer: "Energetski mač (Energy Sword)",
        Category: Category.GAMES,
        NumberOfQuestionInCategory: 4,
    },
    {
        Question: "Koji je najprodavaniji serijal videoigara svih vremena?",
        Answer: "Grand Theft Auto (GTA)",
        Category: Category.GAMES,
        NumberOfQuestionInCategory: 5,
    },

    // HISTORY
    {
        Question: "Koja godina se smatra početkom Prvog svjetskog rata?",
        Answer: "1914.",
        Category: Category.HISTORY,
        NumberOfQuestionInCategory: 1,
    },
    {
        Question: "Ko je bio prvi predsjednik Sjedinjenih Američkih Država?",
        Answer: "George Washington",
        Category: Category.HISTORY,
        NumberOfQuestionInCategory: 2,
    },
    {
        Question: "Kako se zvala slavna egipatska kraljica poznata po vezi s Julijem Cezarom?",
        Answer: "Kleopatra",
        Category: Category.HISTORY,
        NumberOfQuestionInCategory: 3,
    },
    {
        Question: "Koji je poznati general prešao Alpe sa svojim vojnicima i slonovima?",
        Answer: "Hanibal",
        Category: Category.HISTORY,
        NumberOfQuestionInCategory: 4,
    },
    {
        Question: "Koji je najduži rat u historiji?",
        Answer: "Stogodišnji rat",
        Category: Category.HISTORY,
        NumberOfQuestionInCategory: 5,
    },

    // GEOGRAPHY
    {
        Question: "Koji grad leži na dva kontinenta i koja su dva kontinenta u pitanju?",
        Answer: "Istanbul, Azija i Europa",
        Category: Category.GEOGRAPHY,
        NumberOfQuestionInCategory: 1,
    },
    {
        Question: "Koja rijeka teče kroz Egipat?",
        Answer: "Nil",
        Category: Category.GEOGRAPHY,
        NumberOfQuestionInCategory: 2,
    },
    {
        Question: "Naziv Kanada potiče iz indijanskog jezika a znaci?",
        Answer: "Veliko selo",
        Category: Category.GEOGRAPHY,
        NumberOfQuestionInCategory: 3,
    },
    {
        Question: "Koji je najviši planinski vrh na svijetu?",
        Answer: "Mont Everest",
        Category: Category.GEOGRAPHY,
        NumberOfQuestionInCategory: 4,
    },
    {
        Question: "Koji je najmanji kontinent na svijetu?",
        Answer: "Australija",
        Category: Category.GEOGRAPHY,
        NumberOfQuestionInCategory: 5,
    },

    // SPORT
    {
        Question: "Koji dva kluba dolaze iz istog grada a sa dva raličita kontinenta?",
        Answer: "Galatasaray i Fenerbahce",
        Category: Category.SPORT,
        NumberOfQuestionInCategory: 1,
    },
    {
        Question: "Ko je osvajao najviše Grand Slam titula u tenisu?",
        Answer: "Novak Đoković",
        Category: Category.SPORT,
        NumberOfQuestionInCategory: 2,
    },
    {
        Question: "Koji tim je osvojio FIFA Svjetsko prvenstvo 2006. godine?",
        Answer: "Italija",
        Category: Category.SPORT,
        NumberOfQuestionInCategory: 3,
    },
    {
        Question: "Koja zemlja je domaćin Olimpijskih igara 2024. godine?",
        Answer: "Francuska (Pariz)",
        Category: Category.SPORT,
        NumberOfQuestionInCategory: 4,
    },
    {
        Question: "Koja je najteža atletska disciplina na Olimpijadi?",
        Answer: "Desetoboj",
        Category: Category.SPORT,
        NumberOfQuestionInCategory: 5,
    },
];

