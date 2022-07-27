import CardVideo from "@components/CardVideo";
import ctxProvider from "@services/Ctx";
import { useContext } from "react";
import SHome from "./style";

export default function Home() {
  const { advenced } = useContext(ctxProvider);
  return (
    <SHome>
      {advenced.map((person) => {
        return (
          <CardVideo
            key={person.id}
            video={person.video}
            img={person.img}
            title={person.title}
            pseudo={person.pseudo}
          />
        );
      })}
    </SHome>
  );
}
