function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
 const borrowedBooks = books.filter(book => book.borrows.find(borrow => borrow.returned === false))
 console.log(borrowedBooks)
  return borrowedBooks.length
}

function getMostCommonGenres(books) {
 // loop through books to find a genre 
  const genres = books
  .map(book => book.genre)
  .reduce((list, genre) => {
    if(!list[genre])
      {
        list[genre] = 0
      
      }
    list[genre]++
      
    
    return list
      
                           },{})
  console.log(genres)
  const genreCount = Object.entries(genres).sort((a,b) => b[1] - a[1]).map(gc => ({
    name: gc[0],
      count: gc[1]
  })).slice(0,5)
  console.log(genreCount)
  return genreCount
  //for each genre add a count to it 
  // return the new array as object with genres as the value for an object name key and a count key with how many times that genre is found in the books array
}

function getMostPopularBooks(books) {
return (books.map(book => ({
    name: book.title,
    count: book.borrows.length
})).sort((a, b) => b.count - a.count).slice(0,5));
//   const pops = books.map(book => book.title)
//   .reduce((title, count) => {
//     if(typeof title[count] === 'undefined') {
//       title[count] = 0;
      
//     }
//     title[count] += 1;
// //     console.log(title)
//     return title;
//   },{});
//   console.log(pops);
// //   const borrowCount = books.map(book => book.borrows.length)
// //   console.log(borrowCount)
//   const popCount = Object.entries(pops).sort((a,b) => b[1]- a[1]).map(pc => ({
    
//     name: pc[0],
//     count: pc[1]
//   }), {}).slice(0,5)
  
//   console.log(popCount)
  
//   return popCount
}

function getMostPopularAuthors(books, authors) {
//   for each author find all there books by using the books authorId keys
  //let borrows = books.map()
  let aut = authors.map(author => ({
    name: `${author.name.first} ${author.name.last}`,
    count: books.filter(book => book.authorId === author.id).map(book => book.borrows.length).reduce((acc, count) => acc += count, 0)
    
                                   })).sort((a,b) => b.count-a.count).slice(0,5)
  console.log(aut)
  return aut
//   to get a count, for every book the author has take the length of borrows for each book that is theres and and add them all together to get a count 
  
//   your return value should be an array of objects with the author as value for the name key and the count key has value equal to how we figured out how to get count previously
  
//   sort and slice the array for only 5 objects
  
  
  
  
//   const popAuth =
//        console.log(books.map(book => {
// //          const author 
// //          if(book.authorId === authors.find(author => author.id))
// //          {
// //           name: author.name,
// // //           count: 
// //          }
         
//        }))
                                   
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
