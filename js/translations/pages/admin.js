// En pages.js o admin.js
export const admin = (lang) => `
  <div class="page container">
    <h2>🔒 Admin - Publicar Blog</h2>
    <input type="password" id="admin-pass" placeholder="Clave secreta" />
    <button onclick="checkAdminPass()">Acceder</button>
    <div id="admin-content" style="display:none; margin-top:2rem;">
      <p>¡Bienvenido! Aquí iría tu formulario para crear posts.</p>
      <!-- En la práctica, esto no sube nada sin backend -->
    </div>
  </div>
`;