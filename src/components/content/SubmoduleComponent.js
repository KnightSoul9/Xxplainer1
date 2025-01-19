import React from 'react';
import SubmoduleTitle from './SubmoduleTitle';
import SubmoduleContent from './SubmoduleContent';

const SubmoduleComponent = ({ subModule }) => {
  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow-sm">
      <SubmoduleTitle title={subModule.title} />
      <SubmoduleContent content={subModule.content} />
    </div>
  );
};

export default SubmoduleComponent;
