import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Table9 from './table-9';
import Table9Detail from './table-9-detail';
import Table9Update from './table-9-update';
import Table9DeleteDialog from './table-9-delete-dialog';

const Table9Routes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Table9 />} />
    <Route path="new" element={<Table9Update />} />
    <Route path=":id">
      <Route index element={<Table9Detail />} />
      <Route path="edit" element={<Table9Update />} />
      <Route path="delete" element={<Table9DeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default Table9Routes;
