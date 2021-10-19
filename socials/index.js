const icon = document.querySelector('.icon')

icon.addEventListener('click', share)

function share() {
    if (navigator.share !== undefined) {
        navigator.share({
			title: 'Testando Compartilhamento',
			text: 'Aqui estamos testando um novo tipo de compartilhamento via API de compartilhamento nativa dos navegadores',
			url: 'https://vexpenses.com.br/blog/wp-content/uploads/2021/06/controle-de-vendas-externas.png',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
    }
}