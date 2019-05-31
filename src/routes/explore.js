import React, { Component } from "react";
import { InfoBlock } from "../components/main";

//Temporarily added testing data
const dataExplore = {
  data: {
    search: {
      nodes: [
        {
          nameWithOwner: "imfunniee/gitfolio",
          url: "https://github.com/imfunniee/gitfolio",
          description:
            ":octocat: personal website + blog  for every github user",
          stargazers: {
            totalCount: 3124
          },
          repositoryTopics: {
            nodes: [
              {
                topic: {
                  name: "personal-website"
                }
              },
              {
                topic: {
                  name: "awesome"
                }
              },
              {
                topic: {
                  name: "node"
                }
              }
            ]
          },
          languages: {
            nodes: [
              {
                name: "HTML",
                color: "#e34c26"
              }
            ]
          }
        },
        {
          nameWithOwner: "nokia/memory-profiler",
          url: "https://github.com/nokia/memory-profiler",
          description: null,
          stargazers: {
            totalCount: 1624
          },
          repositoryTopics: {
            nodes: []
          },
          languages: {
            nodes: [
              {
                name: "Shell",
                color: "#89e051"
              }
            ]
          }
        }
      ]
    }
  }
};

const data = dataExplore.data.search.nodes;

export default class Explore extends Component {
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
