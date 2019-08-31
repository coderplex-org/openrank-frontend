import React from 'react';

import Header from './header';
// import Footer from './footer';

export default ({ children, title }) => (
    <div>
        <Header title={title} />
        {children}
        {/*<Footer />*/}
    </div>
);