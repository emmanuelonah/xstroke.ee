const footer = document.querySelector("footer");
const Footer = () => {
    const footerTemplate = `                
    <div class="footer-logo-wrapper">
        <img src="./src/assets/images/xstroke-logo.png" alt="" />
    </div>

    <div class="row-wrapper">
        <!-- Internationalization row1 or col2 -->
        <select name="internationalization" id="internationalization" class="footer-row footer-row-one">
            <option value="English US-EN">English</option>
            <option value="Estonian Es-es">Estonian</option>
        </select>

        <!-- row 2 or col 2 -->
        <div class="footer-row footer-row-two">
            <h2 class="logo">XSTROKE EE</h2>
            <ul class="terms-privacy-wrapper">
                <li><a href="./terms">Terms of Services</a></li>
                <li><a href="./privacy-policy">Privacy Policy</a></li>
                <li><a href="./security">Security</a></li>
            </ul>

            <ul class="social-media footer-row footer-row-three">
                <li>
                    <a href="https://www.instagram.com/emmanuelonahafriclite/" target="_blank"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                    <a href="https://twitter.com/Jeremia82064196" target="_blank"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/chiboy.joseph.142" target="_blank"><i class="fab fa-facebook-f"></i></a>
                </li>
            </ul>
        </div>

        <!-- row 3 or col 3 -->
        <div class="copyright">
            &copy;<time class="system--date">${new Date().getFullYear()}</time>. made with <span role="img"> ❤️ </span> by
            <a href="https://www.youmustknowjs.com/" target="_blank"> AfricLite</a>
        </div>
   </div>`;

    footer.innerHTML += footerTemplate;
};

Footer();
