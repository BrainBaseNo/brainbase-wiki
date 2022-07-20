import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Nettverk',
    Svg: require('@site/static/img/network.svg').default,
    description: (
      <>
        I BrainBase blir du del av et nettverk der vi hjelper hverandre med å finne oppdrag, regnskap, investeringer og mye mer.
      </>
    ),
  },
  {
    title: 'Events',
    Svg: require('@site/static/img/events.svg').default,
    description: (
      <>
        På våre arrangementer kan du treffe andre selvstendige konsulenter. Vi møtes hver siste fredag i måneden til BB Beer. Fremover vil vi også 
        arrangere andre type events, både faglige og sosiale. Her kan du finne en oversikt over ting som skjer.
      </>
    ),
  },
  {
    title: 'Vurderer du å bli selvstendig?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Da kan du sende <a href="mailto:kontakt@brainbase.no">en mail til oss</a> eller kontakte oss på telefon 971 72 278. Vi har lang erfaring med å hjelpe folk i gang
       og tar gjerne en prat med deg om dette.
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
