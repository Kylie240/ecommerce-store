import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
        <div className="footer-top">
            <div className="top-left">
                <ul className="gift-list">
                    <li>gift cards</li>
                    <li>promotions</li>
                    <li>become a member</li>
                    <li>sneaker journal</li>
                    <li>send us feedback</li>
                </ul>
                <ul>
                    <h6>Get Help</h6>
                    <li>order status</li>
                    <li>shipping and delivery</li>
                    <li>returns</li>
                    <li>order cancellation</li>
                    <li>payment options</li>
                    <li>gift card balance</li>
                    <li>contact us</li>
                </ul>
                <ul>
                    <h6>about sneak geek</h6>
                    <li>news</li>
                    <li>careers</li>
                    <li>investors</li>
                    <li>purpose</li>
                    <li>sustainability</li>
                </ul>
            </div>
            <div className="top-right">
                <i class="fa-brands fa-twitter fa-2x"></i>
                <i class="fa-brands fa-facebook fa-2x"></i>
                <i class="fa-brands fa-youtube fa-2x"></i>
                <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="bottom-left">
                <strong>United States</strong> © 2023 Sneak Geek, Inc. All Rights Reserved
            </div>
            <div className="bottom-right">
                <p>Guides</p>
                <p>Terms of Sale</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Your Privacy Choices</p>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer