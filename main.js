let friendAppInit = () => {

    /* UI Elements selectors */

    const UIElements = {
        userContentWrap: '.main-content__wrap',
        inputSearch: '.user-search',
        filterBlock: '.main-filter',
        loadMoreButton: '.main-content__loadmore',
        allGenderRadio: '.all-filter',
        resetFilterButton: '.main-filter__reset',
        header: '.header',
        sidebarMain: '.main-sidebar',
        closeFilterButton: '.main-filter__close',
        openFilterIcon: '.filter-open-icon'
    };
    const radioFilter = document.querySelectorAll('.radio-filter');

    const svgIcons = {
        location: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'> <path d='M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z'/></svg>",
        phone: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='348.077px' height='348.077px' viewBox='0 0 348.077 348.077' style='enable-background:new 0 0 348.077 348.077;' xml:space='preserve'><path d='M340.273,275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518,0.744l-27.082,27.076 c-1.711-0.943-3.482-1.928-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113c-24.704-24.701-37.704-48.144-47.209-65.257 c-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149l8.936-8.947c11.097-11.1,11.403-28.826,0.721-39.521L73.39,8.194 C62.708-2.486,44.969-2.162,33.872,8.938l-15.15,15.237l0.414,0.411c-5.08,6.482-9.325,13.958-12.484,22.02 C3.74,54.28,1.927,61.603,1.098,68.941C-6,127.785,20.89,181.564,93.866,254.541c100.875,100.868,182.167,93.248,185.674,92.876 c7.638-0.913,14.958-2.738,22.397-5.627c7.992-3.122,15.463-7.361,21.941-12.43l0.331,0.294l15.348-15.029 C350.631,303.527,350.95,285.795,340.273,275.083z'/></svg>",
        email: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='511.626px' height='511.626px' viewBox='0 0 511.626 511.626' style='enable-background:new 0 0 511.626 511.626;' xml:space='preserve'><path d='M49.106,178.729c6.472,4.567,25.981,18.131,58.528,40.685c32.548,22.554,57.482,39.92,74.803,52.099 c1.903,1.335,5.946,4.237,12.131,8.71c6.186,4.476,11.326,8.093,15.416,10.852c4.093,2.758,9.041,5.852,14.849,9.277 c5.806,3.422,11.279,5.996,16.418,7.7c5.14,1.718,9.898,2.569,14.275,2.569h0.287h0.288c4.377,0,9.137-0.852,14.277-2.569 c5.137-1.704,10.615-4.281,16.416-7.7c5.804-3.429,10.752-6.52,14.845-9.277c4.093-2.759,9.229-6.376,15.417-10.852 c6.184-4.477,10.232-7.375,12.135-8.71c17.508-12.179,62.051-43.11,133.615-92.79c13.894-9.703,25.502-21.411,34.827-35.116 c9.332-13.699,13.993-28.07,13.993-43.105c0-12.564-4.523-23.319-13.565-32.264c-9.041-8.947-19.749-13.418-32.117-13.418H45.679 c-14.655,0-25.933,4.948-33.832,14.844C3.949,79.562,0,91.934,0,106.779c0,11.991,5.236,24.985,15.703,38.974 C26.169,159.743,37.307,170.736,49.106,178.729z'/><path d='M483.072,209.275c-62.424,42.251-109.824,75.087-142.177,98.501c-10.849,7.991-19.65,14.229-26.409,18.699 c-6.759,4.473-15.748,9.041-26.98,13.702c-11.228,4.668-21.692,6.995-31.401,6.995h-0.291h-0.287 c-9.707,0-20.177-2.327-31.405-6.995c-11.228-4.661-20.223-9.229-26.98-13.702c-6.755-4.47-15.559-10.708-26.407-18.699 c-25.697-18.842-72.995-51.68-141.896-98.501C17.987,202.047,8.375,193.762,0,184.437v226.685c0,12.57,4.471,23.319,13.418,32.265 c8.945,8.949,19.701,13.422,32.264,13.422h420.266c12.56,0,23.315-4.473,32.261-13.422c8.949-8.949,13.418-19.694,13.418-32.265 V184.437C503.441,193.569,493.927,201.854,483.072,209.275z'/></svg>"
    };

    /* Getting UI elements */

    for (let key in UIElements) {
        UIElements[key] = document.querySelector(UIElements[key]);
    }

    /* other variables */

    let pageCounter = 1;
    let usersArray = [];

    /* creating object for storing filter state each time when filtering parameters is changed */

    let filterState = {
        search: null,
        gender: null,
        sortName: null,
        sortAge: null
    };

    /* init debounce */

    let debounce = (func, wait, immediate) => {
        let timeout;
        return function () {
            let context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                timeout = null;
                if (!immediate) func.apply(context, args);
            }, wait);
            if (immediate && !timeout) func.apply(context, args);
        };
    };

    /* creating array of users from received data */

    let createUsersList = (data) => {
        let usersList = data.results;
        usersList.forEach(userItem => {
            usersArray.push(userItem);
        });
        return usersArray;
    };

    /* rendering array of users and appending it to wrap block */

    let renderUsersList = (data) => {
        let usersContent = "";
        UIElements.userContentWrap.innerHTML = "";

        if (data.length > 0) {

            for (let i = 0, len = data.length; i < len; i++) {
                let userItem = data[i];
                usersContent += "<div class='main-content__item'>";
                usersContent += "<figure class='content-item-thumb " + (userItem.gender === "male" ? "content-item-thumb-male" : "content-item-thumb-female") + "'><img src='"+ (userItem.picture.large ? userItem.picture.large : "") + "' alt='user-thumb'></figure>";
                usersContent += "<h3 class='content-item-name'>" + (userItem.name.first ? userItem.name.first : "") + " " + (userItem.name.last ? userItem.name.last : "") + "</h3>";
                usersContent += "<div class='content-item'>Age: " + (userItem.dob.age ? userItem.dob.age : "") + "</div>";
                usersContent += "<div class='content-item'><span class='user-icon'>" + svgIcons.phone + "</span>" + (userItem.phone ? "<a href='tel:" + userItem.phone + "'>" + userItem.phone + "</a>" : "") + "</div>";
                usersContent += "<div class='content-item'><span class='user-icon'>" + svgIcons.email + "</span>" + (userItem.email ? "<a href='mailto:" + userItem.email + "'>" + userItem.email + "</a>" : "") + "</div>";
                usersContent += "<div class='content-item'><span class='user-icon'>" + svgIcons.location + "</span>" + (userItem.location.city ? userItem.location.city : "") + "</div>";
                usersContent += "</div>";
            }

            UIElements.userContentWrap.insertAdjacentHTML('afterbegin', usersContent);
        }

    };

    /* getting data as a promise object and then rendering it */

    let getUsers = (page = 1) => {
        fetch("https://randomuser.me/api/?nat=de&page=" + page + "&results=10")
            .then((response) => response.json())
            .then((data) => createUsersList(data))
            .then((data) => renderUsersList(data));
    };

    /* init getting data function */

    getUsers();

    /* filtering data */

    let getFilteredUsersList = (usersArray, filterState) => {

        let copyUsersArray = usersArray.slice();

        if (filterState.gender) {
            copyUsersArray = copyUsersArray.filter((userItem) => userItem.gender === filterState.gender);
        }

        if (filterState.search) {
            copyUsersArray = searchFilter(copyUsersArray, filterState.search);
        }

        if (filterState.sortName) {
            copyUsersArray = copyUsersArray.sort((a, b) => (filterState.sortName === "desc" ?  sortedArrayDESC(a.name.first, b.name.first) : sortedArrayASC(a.name.first, b.name.first)));
        }

        if (filterState.sortAge) {
            copyUsersArray = copyUsersArray.sort((a, b) => (filterState.sortAge === "desc" ?  sortedArrayDESC(a.dob.age, b.dob.age) : sortedArrayASC(a.dob.age, b.dob.age)));
        }

        return copyUsersArray;

    };

    /* checking value from search input for symbols count */

    let searchHandler = (event) => {

        let targetValue = event.target.value;
        filterState.search = targetValue;
        renderUsersList(getFilteredUsersList(usersArray, filterState));

    };

    /* filtering users array by search phrase and rendering users passed filter */

    let searchFilter = (necessaryArray, searchPhrase) => {

        let processedSearchPhrase = searchPhrase.toLowerCase();
        necessaryArray = necessaryArray.filter((userItem) => {

            return userItem.name.first.indexOf(processedSearchPhrase) !== -1 || userItem.name.last.indexOf(processedSearchPhrase) !== -1 || userItem.email.indexOf(processedSearchPhrase) !== -1

        });

        return necessaryArray;

    };

    /* init search handler with debounce function */

    UIElements.inputSearch.addEventListener('keyup', debounce(searchHandler, 2000));

    /* sorting methods */

    let sortedArrayASC = (a, b) => {
        if (a < b) return -1;
        else if (a > b) return 1;
        return 0;
    };

    let sortedArrayDESC = (a, b) => {
        if (a > b) return -1;
        else if (a < b) return 1;
        return 0;
    };


    /* change handler for filter sidebar using event delegation */

    let radioHandler = (event) => {

        if (event.target.classList.contains('age-asc-filter')) {
            filterState.sortAge = "asc";
            filterState.sortName = null;
        }
        else if (event.target.classList.contains('age-desc-filter')) {
            filterState.sortAge = "desc";
            filterState.sortName = null;
        }
        else if (event.target.classList.contains('name-asc-filter')) {
            filterState.sortName = "asc";
            filterState.sortAge = null;
        }
        else if (event.target.classList.contains('name-desc-filter')) {
            filterState.sortName = "desc";
            filterState.sortAge = null;
        }
        else if (event.target.classList.contains('all-filter')) {
            filterState.gender = "";
        }
        else if (event.target.classList.contains('men-filter')) {
            filterState.gender = "male";
        }
        else if (event.target.classList.contains('women-filter')) {
            filterState.gender = "female";
        }

        renderUsersList(getFilteredUsersList(usersArray, filterState));

    };

    /* resetting filter */

    let resetFilter = (update = false) => {

        UIElements.inputSearch.value = "";

        radioFilter.forEach(radioFilterItem => {
            radioFilterItem.checked = false;
        });

        UIElements.allGenderRadio.checked = true;

        filterState = {
            search: null,
            gender: null,
            sortName: null,
            sortAge: null
        };

        if (!update) {
            renderUsersList(getFilteredUsersList(usersArray, filterState));
        }

    };

    /* load the next page of users */

    let loadMoreUsers = () => {
        pageCounter++;
        resetFilter(true);
        getUsers(pageCounter);
    };

    UIElements.filterBlock.addEventListener('change', radioHandler);
    UIElements.loadMoreButton.addEventListener('click', loadMoreUsers);
    UIElements.resetFilterButton.addEventListener('click', resetFilter(false));

    /* making filter fixed after user scroll */

    let scrollHandler = () => {

        let headerOffsetTop = UIElements.header.offsetHeight;
        let windowScrolltop = window.scrollY;

        windowScrolltop > headerOffsetTop ? UIElements.sidebarMain.classList.add('main-sidebar-sticky') : UIElements.sidebarMain.classList.remove('main-sidebar-sticky')

    };

    window.addEventListener('scroll', debounce(scrollHandler, 50));

    /* adding click event listener to filter switching view */

    UIElements.closeFilterButton.addEventListener('click', () => {

        UIElements.sidebarMain.classList.add('main-sidebar-closed');
        UIElements.openFilterIcon.classList.add('filter-open-icon-visible');

    });

    UIElements.openFilterIcon.addEventListener('click', () => {
        UIElements.sidebarMain.classList.remove('main-sidebar-closed');
        UIElements.openFilterIcon.classList.remove('filter-open-icon-visible');
    });


};

document.addEventListener('DOMContentLoaded', mainHandler = () => {

    /* init app */

    friendAppInit();

    /* removing unnecessary event listener */

    document.removeEventListener('DOMContentLoaded', mainHandler);

});

