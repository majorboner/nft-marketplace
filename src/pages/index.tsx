import { createRoutesView } from "atomic-router-react";
import { MainPage, mainRoute } from "./main";
import { AboutPage, aboutRoute } from "./about";
import { RegisterPage, registerRoute } from "./register";
import { ArtistPage, artistRoute } from "./artist";

export const Pages = createRoutesView({
  routes: [
    { route: mainRoute, view: MainPage },
    { route: aboutRoute, view: AboutPage },
    { route: registerRoute, view: RegisterPage },
    { route: artistRoute, view: ArtistPage },
  ],
  otherwise() {
    return <div>Page not found!</div>;
  },
});
