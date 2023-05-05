import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

// eslint-disable-next-line require-jsdoc
class App {
  // eslint-disable-next-line require-jsdoc
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
};

export default App;
