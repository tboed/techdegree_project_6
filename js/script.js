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
            <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
            <h3>${data[i].name.first} ${data[i].name.last}</h3>
            <span class="email">${data[i].email}</span>
         </div>
         <div>
            <span class="date">Joined ${data[i].registered.date}</span>
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
   document.querySelector('button').className = 'active';
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