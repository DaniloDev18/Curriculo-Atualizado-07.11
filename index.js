document.addEventListener("DOMContentLoaded", function() {
    const projetosItem = document.createElement("li");
    projetosItem.innerHTML = '<a href="javascript:void(0)" id="projetosLink">Projetos</a>';

    const submenu = document.createElement("ul");
    submenu.id = "submenuProjetos";
    submenu.style.display = "none";

    const projetos = [
        { nome: "•  Projeto 1", link: "https://seulinkdoproyecto1.com" },
        { nome: "•  Projeto 2", link: "https://seulinkdoproyecto2.com" },
        { nome: "•  Projeto 3", link: "https://seulinkdoproyecto3.com" }
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
