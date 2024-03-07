import "./style.css";
const Footer = () => {
  return (
    <footer class="footer_section">
    <div class="container">
        <div class="footer_link">
            <h4>Quick Links</h4>
            <ul>
                <li>Career</li>
                <li>About Us</li>
                <li>Terms & Condition</li>
                <li>Industrial Partners</li>
                <li>Blogs</li>
                                
            </ul>
        </div>
        <div class="footer_link">
            <h4>Features</h4>
            <ul>
                <li>Live Classes</li>
                <li>Recorded Videos</li>
                <li>Jobs & Opportunities</li>
                <li>Task & Review</li>
                <li>Reviews</li>
                                
            </ul>
        </div>
    
        <div class="footer_link">
            <h4>Contact Us</h4>
             <div class="contact_info">
                <ul>
                    <li><i class="fa-solid fa-phone"></i> +977-9864536432</li>
                    <li><i class="fa-solid fa-envelope"></i> easylearning@gmail.com</li>
                </ul>
            </div>
            <div class="social_icons">
                <ul>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-discord"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                </ul>
            </div>
        
        </div>
    </div>
    <p>&copy;2024.Easy Education. All Rights Reserved.</p>

    </footer>
  );
};

export default Footer;
