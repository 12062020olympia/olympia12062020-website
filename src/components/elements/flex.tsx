import {
  AlignItemsProperty,
  FlexDirectionProperty,
  JustifyContentProperty,
} from 'csstype';
import styled from 'styled-components';

export interface Props {
  alignItems?: AlignItemsProperty;
  flexShorthand?: string;
  flexDirection?: FlexDirectionProperty;
  justifyContent?: JustifyContentProperty;
}

const Flex = styled.div<Props>`
  align-items: ${props => props.alignItems || 'stretch'};
  display: flex;
  flex: ${props => props.flexShorthand || '0 1 auto'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
`;

export default Flex;
