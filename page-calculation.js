//3. calculation
// pageRequirements {book1 has 100 pages, book2 has 200 pages, book3 has 300 pages}
// input book number dibe output page dekhaite hobe

function pageRequirements(book1, book2, book3) {
    const bookPage1 = 100;
    const bookPage2 = 200;
    const bookPage3 = 300;
    const totalBookPages = (book1 * bookPage1) + (book2 * bookPage2) + (book3 * bookPage3);
    return totalBookPages;
}
const totalPages = pageRequirements(0, 1, 1);
console.log("you need total :", totalPages, "pages")