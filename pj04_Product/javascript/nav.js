const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = 
    `
        <div class="nav">
        <img 
        class="brand-logo" 
        src="img/Berries.png" 
        alt="clothes"
        />
        <div class="nav-items">
        <div class="search">
            <input 
            type="text" 
            class="search-box"
            placeholder="search"
            />
            <button class="search-btn">
            search</button>
        </div>
        <a href="#">
            <img src="img/avatar.png" alt="clothes">
        </a><a href="#">
            <img src="img/cart.png" alt="clothes">
        </a>
        </div>
        </div>
        <ul class="links-container">
        <li class="link-items">
            <a href="" class="link">home</a>
        </li>
        <li class="link-items">
            <a href="" class="link">women</a>
        </li>
        <li class="link-items">
            <a href="" class="link">men</a>
        </li>
        <li class="link-items">
            <a href="" class="link">kids</a>
        </li>
        <li class="link-items">
            <a href="" class="link">accessories</a>
        </li>
        </ul>
    `;
}

createNav();