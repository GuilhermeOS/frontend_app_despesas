import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        primaryColor: string;
        secondaryColor: string;
        treeColor: string;
        textColor: string;
        mobile: string;
        hoverToggle: string;
    }
}