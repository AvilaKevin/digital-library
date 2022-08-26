export function useLocalStorage(library, book) {
    // if (!localStorageBooks){
    //     const localStorageBooks = localStorage.setItem(library, JSON.stringify(book));
    // }
    localStorage.setItem(library, JSON.stringify(book));
    const parsedBooks = JSON.parse(localStorage.getItem(book));
}