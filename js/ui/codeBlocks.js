/**
 * Aplica estilos consistentes a todos los bloques de código (<pre><code>)
 * usando una clase CSS para respetar el sistema de variables de tema (Gruvbox).
 */
export function styleCodeBlocks() {
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    const parent = codeBlock.parentElement;
    if (parent && !parent.classList.contains("code-block-styled")) {
      parent.classList.add("code-block-styled");
    }
  });
}