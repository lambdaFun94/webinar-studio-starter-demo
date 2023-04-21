import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import GridContainer from "../components/GridContainer";
import "../index.css";

import HStack from "../components/HStack";

import CenteredContainer from "../components/CenteredContainer";
import PageLayout from "../components/PageLayout";
import VStack from "../components/VStack";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "skis",
    filter: { entityTypes: ["ce_product"] },
    localization: { locales: ["en"], primary: false },
    fields: ["slug"],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export default function Product({ document }: TemplateProps) {
  return (
    <>
      <PageLayout backgroundColor="#FFFFFF">
        <CenteredContainer>
          <GridContainer>
            <VStack>
              <HStack />
            </VStack>
          </GridContainer>
        </CenteredContainer>
      </PageLayout>
    </>
  );
}
