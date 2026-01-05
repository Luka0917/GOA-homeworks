const data = [
    {
        id: 1,
        userName: "luka123",
        followers: 0,
        posts: [
            { 
                title: "Penguins", 
                post: "I Love Penguins!", 
                likes: 2, 
                comments: [
                    { userName: "gela777", comment: "I love Penguins too!", likes: 10 }
                ]
            }
        ],
    }
]
const usersCount = 0;

module.exports = { data, usersCount };