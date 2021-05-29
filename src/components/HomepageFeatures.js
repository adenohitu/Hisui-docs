import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "簡単",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        インストールするだけで
        <br />
        最高の競プロ環境の出来上がり
      </>
    ),
  },
  {
    title: "様々な競プロサイトに対応",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        AtCoder,Codeforcesなど
        <br />
        様々な競技プログラミングサイトに対応
      </>
    ),
  },
  {
    title: "Windows・Mac対応",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: <>Windows・Macどちらでも</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
