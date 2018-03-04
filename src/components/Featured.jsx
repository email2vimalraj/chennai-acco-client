import React from 'react';
import FeaturedQuery from './FeaturedQuery';

const Featured = () => (
  <main className="pri-pad pb-0">
    <section className="featured-block pri-pad-b">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="main-title text-center">
              <h2>Featured best property deals</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry&#8217;s standard dummy
                 text ever since the 1500s, when an unknown.
              </p>
            </div>
          </div>
        </div>

        <FeaturedQuery />
      </div>
    </section>
  </main>
);

export default Featured;
