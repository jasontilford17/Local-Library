function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
  
}

function partitionBooksByBorrowedStatus(books) {
  return [
    books.filter(book => !book.borrows[0].returned),
    books.filter(book => book.borrows[0].returned)
  ]
}

function getBorrowersForBook(book, accounts) {
  //loop through the accounts array of objects 
  
// loop through the books borrow array to match with an account id 
 
  //if it does match add that account to the borrowers away
  
  //take the 'returned' key from the books borrows array and add it inside the account object
  
 
  //loop through the accounts arraw inside 

// let bid =book.borrows.filter(borrow => borrow.id)
// borrowers = accounts.filter(account => {
//   account.id === bid.id;
  
//   console.log(accounts)
  console.log(book)
  
  
  const borrowedIds = book.borrows.map(borrow => borrow.id)
//   const borrowedReturns = book.borrows.map (borrow => borrow.returned)
  let borrowers = accounts.filter(account => borrowedIds.includes(account.id))
 let first10Borrowers = borrowers.slice(0, 10)
 first10Borrowers.map( borrower => {
  const  borrowInfo = book.borrows.find(borrow => borrow.id === borrower.id)
   borrower.returned = borrowInfo.returned
 })
//   const final = borrowers.map(borrower => borrower.returned = borrowedReturns )
 // add returned key to the accounts from the book.borrows array 
 
//    borrowers = accounts.filter(account => {
//   let borrowed = book.borrows.filter(borrow => 
//                              account.id === borrow.id;
//     account.returned = book.borrows.returned;)
//     return borrowed
//   })
  
  
  console.log(first10Borrowers)
  
  return first10Borrowers
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
