function findAccountById(accounts, id) {
  const result = accounts.find(account => id === account.id)
  return result
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1 )
  console.log(result)
  return result
}

function getTotalNumberOfBorrows(account, books) { 
  let total = 0
  //console.log(account.id)
  let result =  books.filter(book => 
   book.borrows.find(borrow => 
   borrow.id === account.id
                    )
   )
                          
       console.log(result.length)

  
  total = result.length
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
//from the account find all books under their name
  /*
  [
    {
      id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
      },
      borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        },
        ...
      ],
    },
  ]
*/
  
// use the account id to go through books.borrows id and if it does match check to see if its returned is false
  let foundBooks = books.filter(book => book.borrows.find(borrow => borrow.id === account.id && borrow.returned === false))
foundBooks = foundBooks.map(book => {
  book.author = authors.find(author => book.authorId === author.id);
  return book;
})
  //find author name by using the book that was found's authorId on the authors array 
//   let authorsName= authors.filter(author => author.id === foundBooks.authorId)
//   console.log(authorsName)
  // if the returned is false it should get an array of objects with title as the key and author.name as the key
  return foundBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
