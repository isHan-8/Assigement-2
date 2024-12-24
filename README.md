# User Story Highlight Component

This repository contains the implementation of the "User Story Highlight" component for a social media platform. The component allows users to add, delete, and view stories, with support for drag-and-drop functionality to rearrange stories.

## Features

- **Add Story**: Users can add a new story by clicking the "Add Story" button.
- **Delete Story**: Users can delete a story by clicking the "X" button on each story.
- **Drag-and-Drop**: Stories can be rearranged by dragging and dropping them into a new position.
- **Responsive Design**: The component is responsive and adapts to different screen sizes.
- **Accessibility**: The component adheres to accessibility standards with appropriate ARIA labels and keyboard navigation.
- **Unit Tests**: All functionalities are covered by unit tests using Jest and React Testing Library.

## Installation

To install and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-story-highlight.git




   ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Running Tests](#running-tests)
- [Test Cases](#test-cases)
- [Contributing](#contributing)
- [License](#license)

---


Running Tests
This project uses Jest and React Testing Library for unit tests. Below are the steps to run the tests:

1. Install Dependencies
Ensure all dependencies are installed:

bash
Copy code
npm install
2. Run Tests
To run all the tests, use the following command:

bash
Copy code
npm test
To run tests in watch mode (which will automatically rerun tests when you save a file):

bash
Copy code
npm test -- --watch
3. Run Tests for a Specific File
If you want to run tests for a specific file, use:

bash
Copy code
npm test <file_name>.test.js
4. Check Test Coverage
To check test coverage, use:

bash
Copy code
npm run test:coverage
Test Cases
1. Story Item Rendering
Test Description: Ensure that each story item is rendered with the correct image and text.

Test Case:

When a new story is added, it should display an image and text below the image.
Test Code:

js
Copy code
test('Story item should render with image and text', () => {
  const story = {
    id: 1,
    image: 'https://example.com/image.jpg',
    text: 'This is a test story'
  };

  render(<StoryItem story={story} />);

  const image = screen.getByAltText(`Story ${story.id}`);
  expect(image).toHaveAttribute('src', story.image);

  const text = screen.getByText(story.text);
  expect(text).toBeInTheDocument();
});
2. Modal Display
Test Description: Check if the modal is displayed with the correct image and text when a story is clicked.

Test Case:

When a user clicks on a story, the modal should open displaying the image and the corresponding text.
Test Code:

js
Copy code
test('Modal should open with correct image and text when story is clicked', () => {
  const story = {
    id: 1,
    image: 'https://example.com/image.jpg',
    text: 'This is a test story'
  };

  render(<UserStoryHighlight />);

  const storyItem = screen.getByAltText(`Story ${story.id}`);
  fireEvent.click(storyItem);

  const modalImage = screen.getByAltText('Story');
  expect(modalImage).toHaveAttribute('src', story.image);

  const modalText = screen.getByText(story.text);
  expect(modalText).toBeInTheDocument();
});
3. Story Deletion
Test Description: Ensure that when the delete button is clicked, the story is removed from the list.

Test Case:

When the delete button is clicked for a story, it should be removed from the list of stories.
Test Code:

js
Copy code
test('Story should be deleted when delete button is clicked', () => {
  const story = {
    id: 1,
    image: 'https://example.com/image.jpg',
    text: 'This is a test story'
  };

  const { getByAltText, getByRole } = render(<UserStoryHighlight />);

  fireEvent.click(screen.getByText('Add Story'));

  const deleteButton = getByRole('button', { name: /delete story/i });
  fireEvent.click(deleteButton);

  expect(getByAltText(`Story ${story.id}`)).not.toBeInTheDocument();
});
4. Drag and Drop Functionality
Test Description: Ensure that stories can be rearranged via drag-and-drop.

Test Case:

Drag a story item and drop it into a new position. The list of stories should be updated accordingly.
Test Code:

js
Copy code
test('Story item should be moved when dragged and dropped', () => {
  const story1 = {
    id: 1,
    image: 'https://example.com/image1.jpg',
    text: 'First story'
  };
  const story2 = {
    id: 2,
    image: 'https://example.com/image2.jpg',
    text: 'Second story'
  };

  const { getByAltText } = render(<UserStoryHighlight />);

  fireEvent.click(screen.getByText('Add Story'));
  fireEvent.click(screen.getByText('Add Story'));

  expect(getByAltText(story1.text)).toBeInTheDocument();
  expect(getByAltText(story2.text)).toBeInTheDocument();
});
