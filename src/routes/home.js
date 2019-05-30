import React, { Component } from "react";
import { DataSquare } from "../components/main";

export default class Home extends Component {
  render() {
    return (
      <DataSquare
        title="We're home now!"
        content="
      Lorem ipsum dolor sit amet tellus ac lectus. Mauris vitae quam.
      Praesent vitae odio. Cras magna dictum vel, wisi. Donec suscipit
      rutrum. Pellentesque dolor. Aenean nonummy diam iaculis leo, ac turpis
      rutrum laoreet. Sed tristique id, libero. Praesent scelerisque
      condimentum lorem velit wisi, tempor varius, leo. In pede. Duis
      dictum. Curabitur tincidunt scelerisque. Nam lectus sit amet magna.
      Nullam volutpat, erat sit amet, tellus. Donec ornare a, condimentum
      nec, ligula. Lorem ipsum eleifend sollicitudin arcu. Morbi id
      sollicitudin turpis id lorem nec lectus nec nulla. Integer aliquam
      quis, tincidunt risus suscipit dolor. Vestibulum ante felis, dignissim
      id, libero. Cras vitae tellus sollicitudin eget, eros. Mauris interdum
      arcu sed laoreet ante congue augue id odio urna, egestas vulputate,
      enim luctus pellentesque. Proin cursus odio. Morbi pede. In mauris sed
      nulla. Curabitur ut nulla. Ut wisi vel pede. Duis a auctor nibh,
      dignissim eu, auctor tortor et purus sem ut odio et ultrices mi. Fusce
      tempor enim luctus non, tristique dapibus, libero quis molestie
      tincidunt. Pellentesque habitant morbi tristique ut, rutrum viverra,
      enim ac lacus. Nulla facilisis libero. Nulla facilisi. Nam
      pellentesque."
      />
    );
  }
}
