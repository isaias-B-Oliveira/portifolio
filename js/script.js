function escrevendoLetras() {
	function ativarletra(elemento) {
		const arrtexto = elemento.innerHTML.split("");
		elemento.innerHTML = "";
		arrtexto.forEach((letra, i) => {
			setTimeout(() => {
				elemento.innerHTML += letra;
			}, 150 * i);
		});
	}
	const titulo = document.querySelector(".digitando");
	ativarletra(titulo);
}
escrevendoLetras();

function Menumoba() {
	const ativamenu = document.querySelector(".fa-bars");
	const navmenu = document.querySelector("header .navegacao-primaria");

	ativamenu.addEventListener("click", () => {
		ativamenu.classList.toggle("fa-x");
		navmenu.classList.toggle("ativado");
	});
}
Menumoba();


