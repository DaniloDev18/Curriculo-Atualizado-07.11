document.addEventListener("DOMContentLoaded", function() {
    const projetosItem = document.createElement("li");
    projetosItem.innerHTML = '<a href="javascript:void(0)" id="projetosLink">Projetos</a>';

    const submenu = document.createElement("ul");
    submenu.id = "submenuProjetos";
    submenu.style.display = "none";

    const projetos = [
        { nome: "•  Pset's Harvard", link: "https://github.com/DaniloDev18/Pset-s" },
        { nome: "•  Jogo da Velha", link: "https://github.com/DaniloDev18/Jogo-da-Velha-com-Bot" },
        { nome: "•  Tela Login", link: "https://danilodev18.github.io/Tela-Login-/" }
    ];

    projetos.forEach(projeto => {
        const item = document.createElement("li");
        item.innerHTML = `<a href="${projeto.link}" target="_blank">${projeto.nome}</a>`;
        submenu.appendChild(item);
    });

    projetosItem.appendChild(submenu);
    document.querySelector("#barra_lateral nav ul").appendChild(projetosItem);

    const projetosLink = document.querySelector("#projetosLink");
    projetosLink.addEventListener("click", function() {
        const isHidden = submenu.style.display === "none";
        submenu.style.display = isHidden ? "block" : "none";
        projetosLink.classList.toggle("open", isHidden); 
    });
});
