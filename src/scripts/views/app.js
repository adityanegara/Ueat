import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App{
    constructor(contentElement){
        this._contentElement = contentElement;
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        console.log(url);
        const page = routes[url];
        this._contentElement.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;