function removeRuResults() {
    document.querySelectorAll('div.g').forEach(result => {
        let link = result.querySelector('a')?.href;

        if (!link) return;

        let blockedPatterns = [
            /ru/,
            /\.ru\b/,
            /\.su\b/,
            /\/ru\//,
            /\/ru-ru\//,
            /\/ru-RU\//,
            /ru\./,
            /\/ru-[a-z]{2}\//,
            /[\?&]lang=ru\b/, /[\?&]lang=ru-[a-z]{2}\b/,
            /yandex\./, /tass\./, /rt\./, /sputniknews\./, /vk\./
        ];

        if (blockedPatterns.some(pattern => pattern.test(link))) {
            result.style.display = 'none'; 
        }
    });
}

removeRuResults();
setInterval(removeRuResults, 3000); 
