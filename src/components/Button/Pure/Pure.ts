import styled from 'styled-components';
import { Button } from '../Button';

export const PureButton = styled(Button)`
   && {
      background: none;
      border: none;
      box-shadow: none;
      
      :after {
         display: none;
      }

      :hover {
         background: none;
      }
   }
 `;