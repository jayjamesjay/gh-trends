import React, { Component } from "react";
import { InfoBlock } from "../components/main";

//Temporarily added testing data
const allTimeData = {
  data: {
    search: {
      nodes: [
        {
          nameWithOwner: "freeCodeCamp/freeCodeCamp",
          url: "https://github.com/freeCodeCamp/freeCodeCamp",
          description:
            "The https://www.freeCodeCamp.org open source codebase and curriculum. Learn to code for free together with millions of people.",
          stargazers: {
            totalCount: 303148
          },
          repositoryTopics: {
            nodes: [
              {
                topic: {
                  name: "learn-to-code"
                }
              },
              {
                topic: {
                  name: "nonprofits"
                }
              },
              {
                topic: {
                  name: "programming"
                }
              }
            ]
          },
          languages: {
            nodes: [
              {
                name: "JavaScript",
                color: "#f1e05a"
              }
            ]
          }
        },
        {
          nameWithOwner: "996icu/996.ICU",
          url: "https://github.com/996icu/996.ICU",
          description:
            "Repo for counting stars and contributing. Press F to pay respect to glorious developers.",
          stargazers: {
            totalCount: 245338
          },
          repositoryTopics: {
            nodes: []
          },
          languages: {
            nodes: [
              {
                name: "Makefile",
                color: "#427819"
              }
            ]
          }
        }
      ]
    }
  }
};

const data = allTimeData.data.search.nodes;

export default class AllTime extends Component {
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
