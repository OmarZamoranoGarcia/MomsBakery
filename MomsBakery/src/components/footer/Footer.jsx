import "./Footer.scss";

export default function Footer() {
  return (
    <footer class="footer">
    <div class="footer__container">
        <div class="footer__links">
            <a href="https://www.instagram.com/moms.bakery__/" target="_blank" class="footer__link instagram">
                Instagram
            </a>
            <a href="https://wa.me/526632032472?text=Hola%20quiero%20información!%20%F0%9F%A7%81" target="_blank" class="footer__link whatsapp">
                WhatsApp
            </a>
        </div>
        <div class="footer__copyright">
            &copy; 2024 Mom´s Bakery. Todos los derechos reservados.
        </div>
    </div>
</footer>
  );
}