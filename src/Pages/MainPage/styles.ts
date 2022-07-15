import styled from "styled-components";
import { v } from "../../variables";

export const Container = styled.div`
    width: 100%;
    max-height: calc(100vh - (${v.xxlSpacing} * 4));
    border: 1px solid #000;

    overflow: auto;
`;