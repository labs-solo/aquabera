import { ResetCSS } from 'common/assets/css/style';
import Seo from 'components/seo';
import ErrorSec from 'containers/Error';
import React from 'react';

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <ResetCSS />
    <ErrorSec></ErrorSec>
  </>
);

export default NotFoundPage;
