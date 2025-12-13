

function Footer() {
    return(
        <footer class="footer">
            <div class="footer-container">
                
                <div class="footer-brand">
                <h3>MedQuiz Pro</h3>
                <p>
                    Smart, high-yield medical quizzes designed to improve clinical
                    reasoning and exam performance.
                </p>
                </div>

                <div class="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/quizzes">Quizzes</a></li>
                    <li><a href="/mocks">Mock Exams</a></li>
                    <li><a href="/progress">Progress</a></li>
                    <li><a href="/resources">Resources</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                </div>

                <div class="footer-support">
                <h4>Support</h4>
                <ul>
                    <li><a href="/faq">Help / FAQ</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/disclaimer">Disclaimer</a></li>
                </ul>
                </div>

            </div>

            <div class="footer-bottom">
                <p>
                © 2025 MedQuiz Pro. All rights reserved.
                </p>
                <p class="disclaimer">
                This platform is for educational purposes only and does not provide
                medical advice.
                </p>
            </div>
        </footer>

    );
}

export default Footer