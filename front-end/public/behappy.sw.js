function instalarServiceWorker() {
    console.log('ServiceWorker instalado com sucesso');
}

self.addEventListener("install", instalarServiceWorker);

var identificador = 'behappy.sw';
var versao = 1;
var idAtual = identificador + '-' + versao;
var idAnterior = identificador + '-' + (versao - 1);

var urls = [
    '/',
    'src/components/Image/img/avatars.png',
    'src/components/Image/img/botoes.png',
    'src/img/favicon.ico',
    'src/components/Header/header_img/logo.png',
]

function ativarServiceWorker() {
    caches.open(idAtual).then(cache => {
        console.log('Cache Storage ' + idAtual + ' foi ativado com sucesso');

        cache.addAll(urls).then(function(){
            caches.delete(idAnterior)
            console.log('Cache Storage ' + idAnterior + 'foi excluido');
        })
    })
}

self.addEventListener("activate", ativarServiceWorker);

function buscarArquivos(event) {
    event.respondWith(
        caches.match(event.request).then(function(arquivoCache) {
            return arquivoCache ? arquivoCache : fetch(event.request);
        })
    )
}

self.addEventListener("fetch", buscarArquivos);