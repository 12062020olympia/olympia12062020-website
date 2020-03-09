import React, { FC } from 'react';
import styled from 'styled-components';
import Input from '../elements/input';
import Textarea from '../elements/textarea';
import {
  contentMaxWidth,
  contentPadding,
  contentPaddingWeb,
  maxMobileWidth,
} from '../../style/dimensions';

interface Props {}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: ${contentMaxWidth};
  margin: 0 auto;

  > :not(:first-child) {
    margin-top: 24px;
  }

  > * {
    margin: 0 ${contentPadding};
  }

  @media (min-width: ${maxMobileWidth}) {
    > * {
      margin: 0 ${contentPaddingWeb};
    }
  }
`;

const ContactForm: FC<Props> = () => {
  return (
    <Form action="https://example.com//" method="POST">
      <div hidden aria-hidden="true">
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </div>
      <Input type="text" name="name" label="Name" />
      <Input type="email" name="email" label="E-Mail" />
      <input type="text" name="category" />
      <Input type="text" name="subject" label="Subject" />
      <Textarea label="Nachricht" name="message" />

      <button type="submit">Send</button>
    </Form>
  );
};

export default ContactForm;
