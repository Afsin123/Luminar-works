class BookLibrary {
    getBookDetails() {
        let books = {
            "alchemist": { book_name: "Alchemist", author: " Paulo ", price: 400, no_of_copies: 10, sold:5 },
            "CasNo56": { book_name: "CasNo56", author: "Chandrashekar ", price: 400, no_of_copies: 15, sold: 12 },
            "Arisingman": { book_name: "Amit", author: "Abir Mukherjee ", price: 400, no_of_copies: 12, sold: 8 },
            "ASeasonforDying": { book_name: "SeasonforDying", author: "Sharmista Shenoy ", price: 400, no_of_copies: 10, sold: 8 },
            "SinIsthenewlove": { book_name: "Alchemist", author: "Abir Mukherjee ", price: 400, no_of_copies: 20, sold: 15 },
            "TheStacker": { book_name: "heStacker", author: "SandeepSharma ", price: 400, no_of_copies: 10, sold: 5 },
        }
        return books
    }


    // find 
    findBook(book_name) {
        let details = this.getBookDetails();
        if (book_name in this.getBookDetails) {
            console.log(books);
        }

    }
}
var obj = new BookLibrary()
obj.findBook("CaseNo56");

