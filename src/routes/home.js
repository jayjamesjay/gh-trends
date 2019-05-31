import React, { Component } from "react";
import { InfoBlock } from "../components/main";

//Temporarily added testing data
const homeData = {
  data: {
    search: {
      nodes: [
        {
          nameWithOwner: "sdras/cssgridgenerator",
          url: "https://github.com/sdras/cssgridgenerator",
          stargazers: {
            totalCount: 1432
          },
          repositoryTopics: {
            nodes: [
              {
                topic: {
                  name: "css-grid"
                }
              },
              {
                topic: {
                  name: "grid"
                }
              },
              {
                topic: {
                  name: "grid-layout"
                }
              }
            ]
          },
          description:
            "🧮Generate basic CSS Grid code to make dynamic layouts!",
          languages: {
            nodes: [
              {
                color: "#f1e05a",
                name: "JavaScript"
              }
            ]
          }
        },
        {
          nameWithOwner: "pirate/wireguard-docs",
          url: "https://github.com/pirate/wireguard-docs",
          stargazers: {
            totalCount: 1154
          },
          repositoryTopics: {
            nodes: []
          },
          description:
            "The Missing WireGuard Documentation: Setup, Usage, Configuration, and a full example for server-to-server VPN with roaming clients & public peers.",
          languages: {
            nodes: [
              {
                color: "#89e051",
                name: "Shell"
              }
            ]
          }
        }
      ]
    }
  }
};

const data = homeData.data.search.nodes;

export default class Home extends Component {
  render() {
    return (
      <>
        {data.map((node, i) => (
          <InfoBlock key={node.nameWithOwner} info={node} />
        ))}
      </>
    );
  }
}
