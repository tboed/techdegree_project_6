/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
`showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const showPage = (list, page) => {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (i = 0; i < list.length; i++ ) {
      if (i >= startIndex && i < endIndex) {
      let studentItem =  `
      <li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
         </div>
         <div>
            <span class="date">Joined ${list[i].registered.date}</span>
         </div>
      </li>
      `
      studentList.insertAdjacentHTML('beforeend', studentItem);
      }
   }
}

/*
`addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = (list) => {
   let numOfPages = Math.ceil(list.length/9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for (i = 1; i <= numOfPages; i++) {
      let button = `<li><button type="button">${i}</button></li>`
      linkList.insertAdjacentHTML('beforeend', button);
   }
   document.querySelector('.link-list li button').className = 'active';
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
      document.querySelector('.active').className = '';
      e.target.className = 'active';
      showPage(list, e.target.textContent);
      }
   })
}

/*
 `searchComponent` function
 This function will dynamically create a search bar to search for data
 */
const insertSearchBar = () => {
   let header = document.querySelector('.header');
   let searchBar = `
      <label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>
   `
   header.insertAdjacentHTML('beforeend', searchBar);

}

// Call functions
showPage(data, 1);
insertSearchBar();
addPagination(data);

function search(list) {
   const searchBar = document.querySelector('#search');
   const searchInput = searchBar.value.toLowerCase();
   let matches = [];
   for (let i = 0; i < list.length; i++) {
      const studentList = list[i];
      const studentName = (list[i].name.first + list[i].name.last).toLowerCase();
      const noMatch = document.querySelector('.student-list')
      if (studentName.includes(searchInput)) {
         matches.push(studentList);
      } 
      else {
         noMatch.className = 'no-results'
         noMatch.innerHTML = `No results found, please try another name!`;
         addPagination(0);
      }
   }
   showPage(matches, 1)
   addPagination(matches);
}

const searchBar = document.querySelector('#search');
searchBar.addEventListener('keyup', (e) => {
   searchInput = e.target.value.toLowerCase();
   search(data);
})
 
// function search(list)
//select search element
//set search input to a variable
//create matches array variable   
//set variable for names in the students array (name.first + name.last)
//loop over data array
//use includes() method to check for:
//if studentName includes(searchInput)
//then .push() that student onto the matches array
//call methods and pass matches array to them in order to showPage and addPagination properly

