import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('renders the heading', () => {
    render(<Dashboard />);
    const heading = screen.getByText('DASHBOARD');

    expect(heading).toBeInTheDocument();
  });

  it('renders the loading animation', () => {
    render(<Dashboard loading={true} />);
    const loadingAnimation = screen.getByAltText('Loading...');

    expect(loadingAnimation).toBeInTheDocument();
  });

  it('renders the dashboard', () => {
    const issues = [
      { id: 111, title: 'Teststring1', state: 'open' },
      { id: 112, title: 'Teststring2', state: 'close' },
      { id: 113, title: 'Teststring3', state: 'open' },
    ];
    render(<Dashboard issues={issues} />);

    const cards = screen.getAllByText(/Teststring/);
    expect(cards).toHaveLength(3);
  });

  it('renders the dashboard error message', () => {
    render(<Dashboard error={true} />);
    const errorState = screen.getByText(/Oops, something went wrong./i);

    expect(errorState).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<Dashboard />);
    const footer = screen.getByText(/Daniel Eicher/);

    expect(footer).toBeInTheDocument();
  });
});
