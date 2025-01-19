import React from 'react';
import SubmoduleComponent from './SubmoduleComponent';

const ModuleComponent = ({ module }) => {
  return (
    <div className="border p-4 mb-4 rounded-lg bg-gray-50">
      <h2 className="text-2xl font-semibold mb-2 capitalize">{module.slug.replace('-', ' ')}</h2>
      {module.subModules.map((subModule) => (
        <SubmoduleComponent key={subModule.slug} subModule={subModule} />
      ))}
    </div>
  );
};

export default ModuleComponent;
