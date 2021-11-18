import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Complex Scene Generation',
    Svg: require('/img/face1.svg').default,
    description: (
      <>
        The JIPCAD software is accompanied by friendly user interface and 
        allows you to put all your imagination into one place.
      </>
    ),
  },
  {
    title: 'Apply Math in Modeling',
    Svg: require('/img/face3.svg').default,
    description: (
      <>
        JIPCAD has powerful math parsing capability embedded inside, generate elegant 
        and artistic shapes and embrace the beauty of math in your creations.
      </>
    ),
  },
  {
    title: 'Easy Export',
    Svg: require('/img/face4.svg').default,
    description: (
      <>
        Export the scene to the general 3D format like STL for 3D printing
        and merge with your other projects and bring the model into reality 
        with 3D printing.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
