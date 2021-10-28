import fetch from 'node-fetch';

(async () => {
    const response = await fetch('https://api.outline.com/v3/parse_article?source_url=https%3A%2F%2Foglobo.globo.com%2Fpolitica%2Fapos-quase-dois-meses-foragido-no-exterior-ze-trovao-volta-ao-brasil-se-entrega-pf-1-25252131');
    const data = await response.json();

    const shortcode = data.data.short_code;

    const url = `https://outline.com/${shortcode}`;

    console.log(url);
})();
