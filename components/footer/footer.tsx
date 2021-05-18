import footerStyles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <p>© {new Date().getFullYear()} Shantanu Dutta. All Rights Reserved.</p>
    </footer>
  );
}
