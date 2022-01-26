import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../containers/HomePage/HomePage";

import { Heart } from "../containers/Heart/Heart";
import { Skeleton } from "../containers/Skeleton/Skeleton";
import { Digestion } from "../containers/Digestion/Digestion";
import { Nerves } from "../containers/Nerves/Nerves";
import { Muscles } from "../containers/Muscles/Muscles";
import { Breathing } from "../containers/Breathing/Breathing";
import { AppView } from "../AppView/AppView";
// import { About } from "../containers/About/About";
// import { NoMatch } from "../containers/NoMatch/NoMatch";
// надо научиться ресолвить все сразу в массив независимо от имен @@## $$##



export class RoutesComponent extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<AppView />}>
          <Route path="skeleton" element={<Skeleton />} />
          <Route path="heart" element={<Heart />} />
          <Route path="digestion" element={<Digestion />} />
          <Route path="nerves" element={<Nerves />} />
          <Route path="muscles" element={<Muscles />} />
          <Route path="breathing" element={<Breathing />} />
        </Route>
      </Routes>
    );
  }
}
