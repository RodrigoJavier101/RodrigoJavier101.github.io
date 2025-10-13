// translations/pages/admin.js
export const admin = () => `
  <div class="page container">
    <h2>🔒 Admin - Crear Post</h2>
    <div id="admin-login">
      <p>Ingresa la clave para acceder:</p>
      <input type="password" id="admin-key" placeholder="Clave secreta" />
      <button onclick="window.showAdminForm()">Acceder</button>
    </div>
    <div id="admin-form" style="display:none; margin-top:2rem;">
      <h3>Nuevo Post</h3>
      <input type="text" id="post-title" placeholder="Título" style="width:100%; padding:0.5rem; margin:0.5rem 0;" />
      <textarea id="post-excerpt" placeholder="Extracto" style="width:100%; padding:0.5rem; margin:0.5rem 0; height:60px;"></textarea>
      <textarea id="post-content" placeholder="Contenido (HTML)" style="width:100%; padding:0.5rem; margin:0.5rem 0; height:200px;"></textarea>
      <input type="text" id="post-youtube" placeholder="URL de YouTube (opcional)" style="width:100%; padding:0.5rem; margin:0.5rem 0;" />
      <button onclick="window.submitPost()">Guardar en Firebase</button>
      <p id="admin-status"></p>
    </div>
  </div>
`;
