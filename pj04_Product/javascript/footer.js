const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
            <img src="img/Berries-Light.png" class="logo" alt="logo"/>
            <div class="footer-ul-container">
<!-- need to change the names  -->
            <ul class="category">
                <li class="category-title">Nuts and Berries</li>
                <li>
                    <a href="#" class="footer-link">Nuts </a>
                </li>
                <li>
                    <a href="#" class="footer-link">Nuts </a>
                </li>
                <li>
                    <a href="#" class="footer-link">Nuts </a>
                </li>
                <li>
                    <a href="#" class="footer-link">Nuts </a>
                </li>
                <li>
                    <a href="#" class="footer-link">Nuts</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Berries</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Berries</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Berries</a>
                </li>
            </ul>

            <ul class="category">
                <li class="category-title">Nuts and Berries</li>
                <li>
                    <a href="#" class="footer-link">Nuts</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Nuts </a>
                </li>
                <li>
                    <a href="#" class="footer-link">Nuts </a>
                </li>
                <li>
                    <a href="#" class="footer-link">Nuts </a>
                </li>
                <li>
                    <a href="#" class="footer-link">Nuts </a>
                </li>
                <li>
                    <a href="#" class="footer-link">Berries</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Berries</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Nuts</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Berries</a>
                </li>
                
            </ul>
        </div>
        </div>
        <p class="footer-title">about company</p>
        <p class="info">Aute dolore minim deserunt eiusmod ad sit dolore dolor minim eu enim ullamco. Occaecat fugiat veniam ipsum elit aute velit irure do nulla cillum ullamco. Ad magna ad amet ad esse culpa adipisicing dolor et nulla culpa. Aute dolore officia tempor ullamco enim eu officia duis duis. Proident amet magna laborum ad nulla.Aute dolore minim deserunt eiusmod ad sit dolore dolor minim eu enim ullamco. Occaecat fugiat veniam ipsum elit aute velit irure do nulla cillum ullamco. Ad magna ad amet ad esse culpa adipisicing dolor et nulla culpa. Aute dolore officia tempor ullamco enim eu officia duis duis. Proident amet magna laborum ad nulla.</p>
        <p class="info">support emails - somebody@gmail.com</p>
        <p class="info">telephone -123 00 10 132, 234 00 33 004</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms and services</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">Healthy Nuts and Berries</p>

    `;
}

createFooter();