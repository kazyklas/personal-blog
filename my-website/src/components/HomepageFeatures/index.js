import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'How to Alpha',
    Svg: require('@site/static/img/lion.svg').default,
    description: (
      <>
        There is a trend, that the masculinity is not good anymore.
        Lets face it with style and bring it back!
        Check the guide on how to navigate in the current world as an male.
      </>
    ),
  },
  {
    title: 'Relationships',
    Svg: require('@site/static/img/relationships.svg').default,
    description: (
      <>
        As an Alpha and positive masculine man, you have to know what to 
        search in your partner and what they should search in you .
        Learn how to be a better partner and how to change the relationships around you.
      </>
    ),
  },
  {
    title: 'The wisdom from books',
    Svg: require('@site/static/img/books.svg').default,
    description: (
      <>
        You can gather a lot from reading the books. You can find here,
        what I find useful and you can too. Recomendation for the books 
        and their main point.
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
