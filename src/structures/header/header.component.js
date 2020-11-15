const header = document.querySelector("header");

const Header = () => {
    const headerTemplate = `
    <nav>
        <ul>
            <li class="logo"><a href="/index">🩺XSTROKE EE</a></li>
            <li>
                <a href="./user-profile.html"><i class="fa fa-user-alt"></i>User Profile</a>
            </li>
        </ul>
        <!-- Menu Bar -->
        <div class="menu--bar">
            <span class="top"></span>
            <span class="bottom"></span>
        </div>
    </nav>
`;

    header.innerHTML += headerTemplate;

    //armburger menu controller
    document.querySelector(".menu--bar").addEventListener("click", (e) => {
        e.stopPropagation();
        document.querySelector(".menu--items").classList.toggle("menu--items--displayer");
    });
};

Header();
