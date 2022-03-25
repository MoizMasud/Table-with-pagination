const tableItems = [
    "Touseef 1",
    "Fancy 2",
    "Moiz 3 ",
    "Masud 4",
    "Waseem 5",
    "Khan 6",
    "Zeeshan 7",
    "Adnan 8",
    "Arvin 9",
    "Sanjai 10",
    "Wahaaj 11",
    "Osama 12",
    "Mark 13",
    "Lane 14 ",
    "Test 15",
    "Test 16",
    "Test 17",
    "Test 18",
    "Test 19",
    "Test 20",
    "Test 21"
];

const listElement = document.getElementById('list');
const paginationElement = document.getElementById('pagination');

let currentPage = 1;
let totalItemsPerPage = 5 ;

displayList(tableItems, listElement, totalItemsPerPage, currentPage);
setupPagination(tableItems, paginationElement, totalItemsPerPage);
function displayList(items, listElement, rowsPerPage, page) {
    listElement.innerHTML = ""; // clear the list everytime we go on a new page, this is so we dont append previous pages results to new page
    page = page -1; //since page starts at 1 and tableItems list starts at 0;

    let start = rowsPerPage*page; // so if its the 2nd page, and we have 5 items per page, its going to start at 5*1(since we did page -1) = 5
    let paginatedItems = tableItems.slice(start, start + rowsPerPage);
    for(let i=0; i<paginatedItems.length;i++) {
        let item = paginatedItems[i];
        let itemElement = document.createElement('div'); // create a div element
        itemElement.classList.add('item');
        itemElement.innerText = item;

        listElement.appendChild(itemElement); // adds the item to the list element
    }

}

function setupPagination(items, listElement, rowsPerPage) {
    listElement.innerHTML = "";
    let pageCount = Math.ceil(items.length/ rowsPerPage); // round up because lets say u have 22 items, u dont want to loose the last two items
    for(let i=1; i<pageCount + 1;i++) { // 1 because page starts at 1
        let btn = paginationButon(i, items);
        listElement.appendChild(btn);
    }
}

function paginationButon(pageNumber, items) {
    let button = document.createElement('button');
    button.innerText = pageNumber;

    button.addEventListener('click', () => {
        currentPage = pageNumber;
        displayList(items,listElement, totalItemsPerPage, currentPage);

        // update the button class
        let currentBtn = document.querySelector('.pageNumbers button.active'); // gets the previous selected button
        currentBtn.classList.remove('active');
        button.classList.add('active');
    })
    if(currentPage === pageNumber) {
        button.classList.add('active')
    }

    return button;
}

