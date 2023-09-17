import { HashRouter } from "react-router-dom";

import { Pages } from '../../pages';

import '../../index.scss';

const App = () => {
  return (
    <div className="main-wrapper">
      <HashRouter>
        <Pages />
      </HashRouter>
    </div>
  )
}

export { App };