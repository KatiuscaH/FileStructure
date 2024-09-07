import React, { Fragment, useState } from 'react';
import Icon from './Icon';

const Folder = ({ files }) => {
  const [showChildren, setShowChildren] = useState(false);
  const [icon, setIcon] = useState('')

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  return (
    <div>
      <h4 onClick={handleClick}>
        {files.isFolder && (
          <Icon name={showChildren ? 'caretDown' : 'caretRight'} />
        )}
        {files.name}
      </h4>
      {showChildren &&
        (files.children ?? []).map((e) => (
          <div key={e.name}>
           <Icon style={{with: '20px', height: '20px'}} name={e.name.split('.').pop()}/> <Folder files={e} />
          </div>
        ))}
    </div>
  );
};

export default Folder;

/**
Another exercise
import { useState } from 'react';
  const data = [
    {
      id: 1,
      name: 'README.md',
    },
    {
      id: 2,
      name: 'Documents',
      children: [
        {
          id: 3,
          name: 'Word.doc',
        },
        {
          id: 4,
          name: 'Powerpoint.ppt',
        },
      ],
    },
    {
      id: 5,
      name: 'Downloads',
      children: [
        {
          id: 6,
          name: 'unnamed.txt',
        },
        {
          id: 7,
          name: 'Misc',
          children: [
            {
              id: 8,
              name: 'foo.txt',
            },
            {
              id: 9,
              name: 'bar.txt',
            },
          ],
        },
      ],
    },
  ];

export default function FileExplorer({ data }) {
  const [openDirectories, setOpenDirectories] = useState({});

  const toggleDirectory = (id) => {
    setOpenDirectories((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the state of the directory with the given id
    }));
  };

  return (
    <div>
      {data.map((e) => (
        <div key={e.id}>
          <h1 onClick={() => toggleDirectory(e.id)}>
            {e.name}
            {e.children ? (openDirectories[e.id] ? ' -' : ' +') : ''}
          </h1>
          {openDirectories[e.id] && e.children && (
            <div style={{ marginLeft: '20px' }}>
              <FileExplorer data={e.children} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


/
