/* =========================================================
   01. REFERÊNCIAS DOS ELEMENTOS
   ---------------------------------------------------------
   Obtém os elementos responsáveis pelo controle de tema
   e pelo ícone exibido no botão.
   ========================================================= */

const toggle =
  document.getElementById("theme-toggle");

const icon =
  document.getElementById("theme-icon");


/* =========================================================
   02. APLICAÇÃO DO TEMA
   ---------------------------------------------------------
   Define o tema ativo no elemento <html>, atualiza o ícone
   do botão e salva a preferência no navegador.
   ========================================================= */

function applyTheme(theme) {

  document.documentElement.setAttribute(
    "data-theme",
    theme
  );


  /* -------------------------------------------------------
     02.1. ÍCONE DO SELETOR
     -------------------------------------------------------
     No Dark Mode, exibe o sol para indicar a possibilidade
     de retorno ao Light Mode.

     No Light Mode, exibe a lua para indicar a possibilidade
     de ativação do Dark Mode.
     ------------------------------------------------------- */

  if (theme === "dark") {

    icon.textContent = "☀️";

  } else {

    icon.textContent = "🌙";

  }


  /* -------------------------------------------------------
     02.2. PERSISTÊNCIA DA PREFERÊNCIA
     -------------------------------------------------------
     Salva a escolha do usuário no localStorage para que o
     tema seja mantido em acessos futuros.
     ------------------------------------------------------- */

  localStorage.setItem(
    "theme",
    theme
  );

}


/* =========================================================
   03. IDENTIFICAÇÃO DO TEMA INICIAL
   ---------------------------------------------------------
   Verifica primeiro se já existe uma preferência salva.

   Caso não exista, utiliza a configuração de tema do
   sistema operacional ou navegador como referência.
   ========================================================= */

const savedTheme =
  localStorage.getItem("theme");

if (savedTheme) {

  applyTheme(savedTheme);

} else {

  const prefersDark =
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

  applyTheme(
    prefersDark
      ? "dark"
      : "light"
  );

}


/* =========================================================
   04. ALTERAÇÃO MANUAL DO TEMA
   ---------------------------------------------------------
   Alterna entre Light Mode e Dark Mode quando o usuário
   clica no botão de seleção de tema.
   ========================================================= */

toggle.addEventListener(
  "click",
  () => {

    const currentTheme =
      document.documentElement.getAttribute(
        "data-theme"
      );

    applyTheme(
      currentTheme === "dark"
        ? "light"
        : "dark"
    );

  }
);
