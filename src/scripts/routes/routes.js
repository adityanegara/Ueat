import AboutPage from '../views/pages/about_page';
import ExplorePage from '../views/pages/explore_page';
import DetailPage from '../views/pages/detail_page';

const routes = {
  '/': AboutPage,
  '/about': AboutPage,
  '/explore': ExplorePage,
  '/detail/:id': DetailPage,
};

export default routes;
