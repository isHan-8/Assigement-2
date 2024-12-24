import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import Modal from "./Modal";
import { MdDeleteOutline } from "react-icons/md";


const StoryItem = ({ story, onDelete, onMove, onView }) => {
  const [, drag] = useDrag(() => ({
    type: "STORY",
    item: { id: story.id },
  }));

  const [, drop] = useDrop(() => ({
    accept: "STORY",
    hover: (item) => {
      if (item.id !== story.id) {
        onMove(item.id, story.id);
      }
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className="story-item"
      aria-labelledby={`story-${story.id}`}
      onClick={() => onView(story)}
    >
      <img
        src={story.image}
        alt={`Story ${story.id}`}
        className="story-image"
        aria-hidden="true"
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(story.id);
        }}
        className="delete-button"
        aria-label={`Delete story ${story.id}`}
      >
        <MdDeleteOutline size={24} />
      </button>

      <div className="story-text">{story.text}</div>
    </div>
  );
};

const UserStoryHighlight = () => {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);

  const addStory = (image) => {
    setStories([
      ...stories,
      { id: Date.now(), image, text: "This is a story" },
    ]);
  };

  const deleteStory = (id) => {
    setStories(stories.filter((story) => story.id !== id));
  };

  const moveStory = (fromId, toId) => {
    const fromIndex = stories.findIndex((story) => story.id === fromId);
    const toIndex = stories.findIndex((story) => story.id === toId);

    if (fromIndex !== -1 && toIndex !== -1 && fromIndex !== toIndex) {
      const newStories = [...stories];
      const [removed] = newStories.splice(fromIndex, 1);
      newStories.splice(toIndex, 0, removed);
      setStories(newStories);
    }
  };

  const openModal = (story) => {
    setSelectedStory(story);
  };

  const closeModal = () => {
    setSelectedStory(null);
  };

  return (
    <div className="story-container">
      <button
        onClick={() =>
          addStory(
            "https://images.unsplash.com/photo-1638031312944-bf97af0f0d74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8anBnfGVufDB8fDB8fHww"
          )
        }
        className="add-story-button"
        aria-label="Add a new story"
      >
        Add Story
      </button>
      <div className="story-list">
        {stories.map((story) => (
          <StoryItem
            key={story.id}
            story={story}
            onDelete={deleteStory}
            onMove={moveStory}
            onView={openModal}
          />
        ))}
      </div>

      {selectedStory && (
        <Modal
          image={selectedStory.image}
          text={selectedStory.text}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default UserStoryHighlight;
