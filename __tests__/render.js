import React from 'react';
// import { Provider } from 'react-redux';
// import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../src/app.jsx';
import Header from '../src/components/Header.jsx';
import { BrowserRouter } from 'react-router-dom';

describe('Testing React components', () => {
  describe('Component', () => {
    let text;

    beforeAll(() => {
      text = render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
    });

    test('Checks if the Docker Containers component is rendered', () => {
      expect(text.getByText('DockerVize')).toBeTruthy();
    });
  });
});
