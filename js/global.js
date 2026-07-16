// ==========================================================================
// GLOBAL.JS — Componentes reutilizables: header, nav y footer
// Se inyectan via innerHTML sobre elementos vacíos con ID en cada página.
//
// Uso en HTML:
//   <header id="header-principal"></header>
//   <footer id="footer-sitio"></footer>
//   <script src="global.js" defer></script>
// ==========================================================================

// --------------------------------------------------------------------------
// HEADER + NAV
// --------------------------------------------------------------------------
const headerHTML = `
  <div class="header-superior">
    <div class="header-izq">
      <button class="btn-menu">
        <span class="linea-hamburguesa"></span>
        <span class="linea-hamburguesa"></span>
        <span class="linea-hamburguesa"></span>
      </button>
      <div class="info-clima-fecha">
        <span class="ciudad-clima">La Plata <span style="display:flex;align-items:center;gap:2px;"><img src="/assets/iconos/clima.png" alt="Clima" style="width:18px;height:18px;"> <span class="temperatura">14°</span></span></span>
        <span class="fecha-actual">Jueves, 25 de junio de 2026</span>
      </div>
    </div>
    <div class="header-centro">
      <a href="/home.html" style="text-decoration: none;"><img src="/assets/marcas/0221-blanco.svg" alt="Logo 0221" class="logo-sitio"></a>
    </div>
    <div class="header-der">
      <div class="dropdown-ingresar">
        <a href="#" class="btn-ingresar" id="btn-ingresar">
          <span class="texto-ingresar">Ingresar</span>
          <img src="/assets/iconos/icon.png" alt="Usuario" class="icono-usuario-mobile">
        </a>
        <div class="dropdown-menu-ingresar" id="dropdown-ingresar">
          <a href="/usuario/iniciar-sesion.html">Iniciar sesión</a>
          <a href="/usuario/registro.html">Registrarme</a>
        </div>
      </div>
      <a href="#" class="btn-reportar-top">
        <span class="texto-reportar">Reportar hecho</span>
        <img src="/assets/iconos/reportar.png" alt="Reportar" class="icono-reportar-btn">
        <img src="/assets/iconos/reportar.png" alt="Reportar" class="icono-reportar-mobile">
      </a>
    </div>
  </div>
`;

const navHTML = `
  <ul>
    <li><a href="/secciones/gran-la-plata.html">Gran La Plata</a></li>
    <li><a href="/secciones/policiales.html">Policiales</a></li>
    <li><a href="/secciones/nacional.html">Nacional</a></li>
    <li><a href="/secciones/universidad.html">Universidad</a></li>
    <li><a href="/secciones/deportes.html">Deportes</a></li>
    <li><a href="/secciones/internacional.html">Internacional</a></li>
    <li><a href="/secciones/entretenimiento.html">Entretenimiento</a></li>
    <li><a href="/secciones/reportes.html">Reportes</a></li>
  </ul>
`;

// --------------------------------------------------------------------------
// FOOTER
// --------------------------------------------------------------------------
const footerHTML = `
  <div class="footer-bloque-superior">

    <div class="footer-marca-redes">
      <img src="/assets/marcas/0221-blanco.svg" alt="Logo 0221 Footer" class="logo-footer">
      <div class="iconos-redes">
        <a href="#"><img src="/assets/iconos/instagram.png" alt="Instagram"></a>
        <a href="#"><img src="/assets/iconos/facebook.png" alt="Facebook"></a>
        <a href="#"><img src="/assets/iconos/twitter.png" alt="Twitter"></a>
        <a href="#"><img src="/assets/iconos/youtube.png" alt="Youtube"></a>
        <a href="#"><img src="/assets/iconos/linkedin.png" alt="LinkedIn"></a>
      </div>
    </div>

    <div class="footer-enlaces-grid">
      <div class="columna-enlaces">
        <h4>Secciones</h4>
        <div class="sub-columnas-secciones">
          <ul>
            <li><a href="#">Gran La Plata</a></li>
            <li><a href="#">Policiales</a></li>
            <li><a href="#">Nacional</a></li>
            <li><a href="#">Universidad</a></li>
          </ul>
          <ul>
            <li><a href="#">Deportes</a></li>
            <li><a href="#">Internacional</a></li>
            <li><a href="#">Entretenimiento</a></li>
            <li><a href="#">Reportes</a></li>
          </ul>
        </div>
      </div>

      <div class="columna-enlaces">
        <h4>Contactos</h4>
        <ul>
          <li><a href="mailto:redaccion@0221.com.ar">redaccion@0221.com.ar</a></li>
          <li><a href="mailto:comercial@0221.com.ar">comercial@0221.com.ar</a></li>
          <li><a href="#">RSS</a></li>
        </ul>
      </div>

      <div class="columna-enlaces">
        <h4>Institucional</h4>
        <ul>
          <li><a href="#">Términos y condiciones</a></li>
          <li><a href="#">Política de privacidad</a></li>
          <li><a href="#">Directrices IA</a></li>
        </ul>
      </div>
    </div>

  </div>

  <div class="footer-logos-institucionales">
    <img src="/assets/marcas/adepa.png" alt="ADEPA" class="img-institucional">
    <img src="/assets/marcas/aglp.png" alt="AGLP" class="img-institucional">
    <img src="/assets/marcas/dosalcubo.png" alt="Dos al Cubo" class="img-institucional">
  </div>

  <div class="footer-creditos">
    <p><strong>Editor responsable:</strong> Carlos E. Marino  •  <strong>Edición Nº:</strong> 2982, 18 de junio de 2026  •  Calle 49 Nº 609, La Plata</p>
    <p class="copyright">@ Copyright 0221.com.ar 2026. Todos los derechos reservados.</p>
  </div>
`;

// --------------------------------------------------------------------------
// INYECCIÓN
// --------------------------------------------------------------------------
const header = document.getElementById('header-principal');
if (header) {
  header.className = 'header-principal';
  header.innerHTML = headerHTML;
}

const nav = document.getElementById('nav-principal');
if (nav) {
  nav.className = 'nav-secciones';
  nav.innerHTML = navHTML;
}

const footer = document.getElementById('footer-sitio');
if (footer) {
  footer.className = 'footer-sitio';
  footer.innerHTML = footerHTML;
}

// DROPDOWN INGRESAR
document.addEventListener('click', (e) => {
    const btn = document.getElementById('btn-ingresar');
    const menu = document.getElementById('dropdown-ingresar');
    if (!btn || !menu) return;

    if (btn.contains(e.target)) {
        e.preventDefault();
        menu.classList.toggle('abierto');
    } else {
        menu.classList.remove('abierto');
    }
});