import { useState } from "react";
import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { optionsOutline } from "ionicons/icons";

import SearchBar from "../components/SearchBar";
import { FlexContainer } from "../components/style/FlexContainer";
import AddButton from "../components/AddButton";


export default function Home() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <FlexContainer direction={"column"}>
      <SearchContainer justify={"space-between"}>
        <SearchBar />
        <StyledIcon size={"large"} icon={optionsOutline} />
      </SearchContainer>
      <AddButton setIsHidden={setIsHidden} />
    </FlexContainer>
  );
}

const StyledIcon = styled(IonIcon)`
  cursor: pointer;
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

