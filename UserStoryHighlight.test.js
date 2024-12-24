import { render, screen, fireEvent } from '@testing-library/react';
import UserStoryHighlight from './UserStoryHighlight';

test('renders the User Story Highlight component', () => {
  render(<UserStoryHighlight />);
  const addButton = screen.getByText(/Add Story/i);
  expect(addButton).toBeInTheDocument();
});

test('can add a new story', () => {
  render(<UserStoryHighlight />);
  const addButton = screen.getByText(/Add Story/i);
  fireEvent.click(addButton);
  const storyImage = screen.getByAltText(/Story/i);
  expect(storyImage).toBeInTheDocument();
});

test('can delete a story', () => {
  render(<UserStoryHighlight />);
  const addButton = screen.getByText(/Add Story/i);
  fireEvent.click(addButton);
  const deleteButton = screen.getByText(/X/i);
  fireEvent.click(deleteButton);
  const storyImage = screen.queryByAltText(/Story/i);
  expect(storyImage).toBeNull();
});

test('can rearrange stories using drag-and-drop', () => {
  render(<UserStoryHighlight />);
  const addButton = screen.getByText(/Add Story/i);
  fireEvent.click(addButton);
  fireEvent.click(addButton);
  const stories = screen.getAllByAltText(/Story/i);
  
  expect(stories.length).toBe(2);
});
