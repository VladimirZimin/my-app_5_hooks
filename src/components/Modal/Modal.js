import { useState } from "react";

// v1
const ModalV1 = ({ url, onClose }) => {
  return (
    <div>
      <p>MODAL</p>
      <p>URL: {url}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const List = ({ items, onSelect }) => {
  return (
    <div>
      {items.map((item) => (
        <ListItem key={item.large} item={item} onSelect={onSelect} />
      ))}
    </div>
  );
};

const ListItem = ({ item, onSelect }) => {
  return (
    <div
      onClick={() => {
        onSelect(item.large);
      }}
    >
      {item.large}
    </div>
  );
};

export const ModalV1APP = () => {
  const [images, setImages] = useState([
    { preview: "preview-1", large: "large-1" },
    { preview: "preview-2", large: "large-2" },
    { preview: "preview-3", large: "large-3" },
    { preview: "preview-4", large: "large-4" },
    { preview: "preview-5", large: "large-5" },
  ]);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  return (
    <div>
      <List items={images} onSelect={setSelectedImageUrl} />
      {selectedImageUrl && (
        <ModalV1
          url={selectedImageUrl}
          onClose={() => setSelectedImageUrl(null)}
        />
      )}
    </div>
  );
};

// v2
const ModalV2 = ({ url, onClose }) => {
  return (
    <div>
      <p>MODAL</p>
      <p>URL: {url}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const List1 = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <ListItem1 key={item.large} item={item} />
      ))}
    </div>
  );
};

const ListItem1 = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        {item.large}
      </div>
      {isModalOpen && (
        <ModalV2 url={item.large} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export const ModalV2APP = () => {
  const [images, setImages] = useState([
    { preview: "preview-1", large: "large-1" },
    { preview: "preview-2", large: "large-2" },
    { preview: "preview-3", large: "large-3" },
    { preview: "preview-4", large: "large-4" },
    { preview: "preview-5", large: "large-5" },
  ]);

  return (
    <div>
      <List1 items={images} />
    </div>
  );
};
