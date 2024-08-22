import { render, screen } from '@testing-library/react';
import StoryTable from '../StoryTable';

test('renders table with stories', () => {
    const stories = [
        { _id: '1', title: 'Story 1', author: 'Author 1', category: 'Category 1', tags: ['tag1'], status: 'Draft' },
        { _id: '2', title: 'Story 2', author: 'Author 2', category: 'Category 2', tags: ['tag2'], status: 'Publish' },
    ];
    render(<StoryTable stories={stories} />);
    expect(screen.getByText(/Story 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Author 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Category 1/i)).toBeInTheDocument();
});
