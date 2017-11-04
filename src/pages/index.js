import React from "react";
import { object } from "prop-types";
import { flatMap } from "lodash";

import Chart from "../partials/Chart";

const HomePage = ({ data }) => {
  // console.log(data);
  const dataset = flatMap(data.allData2016CoCsv.edges, item => {
    // console.log(item);
    const key = {
      date: item.node.date,
      time: item.node.time,
      DsWrocWybCon: Number(item.node.DsWrocWybCon),
      LdLodzGdansk: Number(item.node.LdLodzGdansk),
      MpKrakAlKras: Number(item.node.MpKrakAlKras),
      MpZakopaSien: Number(item.node.MpZakopaSien),
      MzWarMarszal: Number(item.node.MzWarMarszal),
      PdBialWaszyn: Number(item.node.PdBialWaszyn),
      PkRzeszRejta: Number(item.node.PkRzeszRejta),
      PmGdaWyzwo03: Number(item.node.PmGdaWyzwo03),
      SlKatoPlebA4: Number(item.node.SlKatoPlebA4),
      WmOlsPuszkin: Number(item.node.WmOlsPuszkin),
      WpPoznPolank: Number(item.node.WpPoznPolank),
      ZpSzczPils02: Number(item.node.ZpSzczPils02)
    };
    return key;
  });
  return (
    <div>
      <h1>Mogli. Pokazali.</h1>
      <Chart dataset={dataset} />
    </div>
  );
};

HomePage.propTypes = {
  data: object.isRequired
};

export default HomePage;

export const HomePageQuery = graphql`
  query HomePageQuery {
    allData2016CoCsv {
      edges {
        node {
          time
          date
          DsWrocWybCon
          LdLodzGdansk
          MpKrakAlKras
          MpZakopaSien
          MzWarMarszal
          PdBialWaszyn
          PkRzeszRejta
          PmGdaWyzwo03
          SlKatoPlebA4
          WmOlsPuszkin
          WpPoznPolank
          ZpSzczPils02
        }
      }
    }
    allData2016Pm10Csv {
      edges {
        node {
          time
          date
          DsWrocWybCon
          LdLodzGdansk
          MpKrakAlKras
          MpZakopaSien
          MzWarMarszal
          PdBialWarsza
          PkRzeszRejta
          PmGdaWyzwo03
          SlKatoKossut
          WmOlsPuszkin
          WpPoznPolank
          ZpSzczLacz04
        }
      }
    }
  }
`;
