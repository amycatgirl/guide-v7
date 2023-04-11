import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
      {
    title: 'Easy to Understand',
    Svg: require('@site/static/img/js-logo.svg').default,
    description: (
      <>
        This guide includes everything you need for starting with Revolt bot development.
      </>
    ),
  },
  {
    title: 'Made for Everyone',
    Svg: require('@site/static/img/settings-logo.svg').default,
    description: (
      <>
        This guide was made so everyone can create their own Revolt bot even without coding knowledge.
      </>
    ),
  },
  {
    title: 'By the Community',
    Svg: require('@site/static/img/code-logo.svg').default,
    description: (
      <>
        This guide was made by the Revolt community for the Revolt community.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
