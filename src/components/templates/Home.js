import React from "react";
import styled from "styled-components";
import Filters from "../organisms/Filters";
import PublicationContainer from "../organisms/PublicationContainer";

const Home = () => {
  return (
    <ContentLayout>
      <section className="filters">
        <Filters />
      </section>
      <section className="publications">
        <PublicationContainer />
      </section>
    </ContentLayout>
  );
};

const ContentLayout = styled.div`
  max-width: ${({ theme }) => theme.layout.pageWidth};
  width: 100%;
  height: 100vh;
  display: flex;

  section {
    margin: ${({ theme }) => theme.layout.symmetricalMargin};
    box-sizing: border-box;
  }

  .filters {
    width: 25%;
  }
  .publications {
    width: 75%;
  }
`;

export default Home;
