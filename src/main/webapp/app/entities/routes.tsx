import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Table10 from './table-10';
import Table9 from './table-9';
import Table8 from './table-8';
import Table7 from './table-7';
import Table6 from './table-6';
import Table5 from './table-5';
import Table4 from './table-4';
import Table3 from './table-3';
import Table2 from './table-2';
import Table1 from './table-1';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="table-10/*" element={<Table10 />} />
        <Route path="table-9/*" element={<Table9 />} />
        <Route path="table-8/*" element={<Table8 />} />
        <Route path="table-7/*" element={<Table7 />} />
        <Route path="table-6/*" element={<Table6 />} />
        <Route path="table-5/*" element={<Table5 />} />
        <Route path="table-4/*" element={<Table4 />} />
        <Route path="table-3/*" element={<Table3 />} />
        <Route path="table-2/*" element={<Table2 />} />
        <Route path="table-1/*" element={<Table1 />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
