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
