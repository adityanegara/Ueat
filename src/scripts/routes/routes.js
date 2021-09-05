import AboutPage from '../views/pages/about_page';
import ExplorePage from '../views/pages/explore_page';
import DetailPage from '../views/pages/detail_page';
import FavoritePage from '../views/pages/favorite_page';

const routes = {
  '/': AboutPage,
  '/about': AboutPage,
  '/explore': ExplorePage,
  '/detail/:id': DetailPage,
  '/favorite': FavoritePage,
};

export default routes;
