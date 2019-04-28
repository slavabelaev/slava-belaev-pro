import React, { Fragment} from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import ProjectList from '../../ProjectList';

const HomePage = () => (
    <Fragment>
        <Header />
        <main>
            <ProjectList />
        </main>
        <Footer />
    </Fragment>
);

export default HomePage;
