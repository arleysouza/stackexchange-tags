import { useState } from "react";
import { Header, Input, Line, Logo, Title } from "../components";

export default function TagPage() {
  const [page, setPage] = useState("1");
  const [fromdate, setFromdate] = useState("2023-01-01");
  const [todate, setTodate] = useState("2023-12-31");

  const handle = async () => {
    alert("enter");
  };

  return (
    <div>
      <Header>
        <Title>Prova</Title>
        <Logo />
      </Header>
      <Line>
        <Input
          id="fromdate"
          label="Início"
          placeholder="aaaa-mm-dd"
          value={fromdate}
          setValue={setFromdate}
          handle={handle}
        />
        <Input
          id="todate"
          label="Fim"
          value={todate}
          placeholder="aaaa-mm-dd"
          setValue={setTodate}
          handle={handle}
        />
        <Input
          id="page"
          label="Página"
          value={page}
          placeholder="número"
          setValue={setPage}
          handle={handle}
        />
      </Line>
    </div>
  );
}
