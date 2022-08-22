import React from 'react';
import { render } from '@testing-library/react';
import AllBlogPosts from '../blog';
import { createBlogData } from '../../__fixtures__/page';

const mockData = createBlogData();

describe('Blog page', () => {
  it('renders correctly', () => {
    const { container } = render(<AllBlogPosts data={mockData} />);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly for empty blogs list', () => {
    const { container } = render(
      <AllBlogPosts
        data={{
          posts: {
            edges: [],
          },
          categories: {
            edges: [],
          },
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});