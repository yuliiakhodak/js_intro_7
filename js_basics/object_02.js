const student = {
    firstName : "Alex",
    lastName : "Smith",
    hobbies : ["Soccer", "Watching movies"],
    exam_scores : { midterm : 60, 
                  final : 90 }
};
console.log(student);

console.log(student.hobbies);
console.log(student.exam_scores);
console.log(student.hobbies[0]);
console.log((student.exam_scores.midterm + student.exam_scores.final) / 2);

/*

*/

const book = {
    name: "Amok",
    author: { fName : "Stefan",
              lName : "Zweig"
            },
    genre: "Novella"
};
console.log(book);

const books = [ 
    { name: "Amok",
    author: { fName : "Stefan",
              lName : "Zweig"
            },
    genre: "Novella"
    },
    { name: "Me Name is Red",
    author: { fName : "Orhan",
              lName : "Pamuk"
            },
    genre: "Historical Novel"
    }, 
    { name: "1984",
    author: { fName : "George",
              lName : "Orwell"
            },
    genre: "Dystopian Literature"
    }
]
let count = 0;
for (const book of books){
if (book.author.fName.includes("a")) count++;
}
console.log(count);