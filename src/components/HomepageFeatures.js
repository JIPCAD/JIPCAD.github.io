import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Complex Scene Generation',
    Svg: require('/img/face1.svg').default,
    description: (
      <>
        JIPCAD is accompanied by a friendly user interface which 
        allows you to realize all your imaginations in one place.
      </>
    ),
  },
  {
    title: 'Apply Math in Modeling',
    Svg: require('/img/face3.svg').default,
    description: (
      <>
        JIPCAD utilizes powerful math parsing capabilities to generate elegant, 
        artistic shapes and embrace the beauty of math in your creations.
      </>
    ),
  },
  {
    title: 'Easy Export',
    Svg: require('/img/face4.svg').default,
    description: (
      <>
        Models can be exported to 3D formats, including STL,
        and merged with other projects to bring your work into reality 
        through additive manufacturing.
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
