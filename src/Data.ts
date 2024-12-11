export interface QANDA {
    Question: string,
    Answer: string,
    Category: Category,
    NumberOfQuestionInCategory: number,
    YTVideoLink?: string,
    PlayOnlyAudio?: boolean
};

export enum Category {
    MOVIES,
    GAMES,
    HISTORY,
    GEOGRAPHY,
    SPORT
};

export const Data: QANDA[] = [
    {
        Question: "Who directed the movie 'Inception'?",
        Answer: "Christopher Nolan",
        Category: Category.MOVIES,
        NumberOfQuestionInCategory: 1,
        YTVideoLink: "https://www.youtube.com/watch?v=q7DfQMPmJRI",
        PlayOnlyAudio: true,
    },
    {
        Question: "What is the highest-selling video game of all time?",
        Answer: "Minecraft",
        Category: Category.GAMES,
        NumberOfQuestionInCategory: 1
    },
    {
        Question: "In which year did World War II end?",
        Answer: "1945",
        Category: Category.HISTORY,
        NumberOfQuestionInCategory: 1
    },
    {
        Question: "What is the capital city of Australia?",
        Answer: "Canberra",
        Category: Category.GEOGRAPHY,
        NumberOfQuestionInCategory: 1
    },
    {
        Question: "Which country won the FIFA World Cup in 2018?",
        Answer: "France",
        Category: Category.SPORT,
        NumberOfQuestionInCategory: 1
    },
    {
        Question: "Which actor played the Joker in 'The Dark Knight'?",
        Answer: "Heath Ledger",
        Category: Category.MOVIES,
        NumberOfQuestionInCategory: 2,
        YTVideoLink: "https://www.youtube.com/watch?v=FssULNGSZIA",
        PlayOnlyAudio: false,
    },
    {
        Question: "What is the name of the protagonist in 'The Legend of Zelda' series?",
        Answer: "Link",
        Category: Category.GAMES,
        NumberOfQuestionInCategory: 2
    },
    {
        Question: "Who was the first president of the United States?",
        Answer: "George Washington",
        Category: Category.HISTORY,
        NumberOfQuestionInCategory: 2
    },
    {
        Question: "Which river is the longest in the world?",
        Answer: "Nile",
        Category: Category.GEOGRAPHY,
        NumberOfQuestionInCategory: 2
    },
    {
        Question: "In tennis, what is a score of zero called?",
        Answer: "Love",
        Category: Category.SPORT,
        NumberOfQuestionInCategory: 2
    },
    {
        Question: "What movie won the Oscar for Best Picture in 2020?",
        Answer: "Parasite",
        Category: Category.MOVIES,
        NumberOfQuestionInCategory: 3
    },
    {
        Question: "What is the main objective in the game 'Minecraft'?",
        Answer: "To survive and build",
        Category: Category.GAMES,
        NumberOfQuestionInCategory: 3
    },
    {
        Question: "Who was the first man to step on the moon?",
        Answer: "Neil Armstrong",
        Category: Category.HISTORY,
        NumberOfQuestionInCategory: 3
    },
    {
        Question: "Which country is known as the Land of the Rising Sun?",
        Answer: "Japan",
        Category: Category.GEOGRAPHY,
        NumberOfQuestionInCategory: 3
    },
    {
        Question: "Which basketball player is known as 'King James'?",
        Answer: "LeBron James",
        Category: Category.SPORT,
        NumberOfQuestionInCategory: 3
    }
];
