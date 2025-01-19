// useDirectoryContents.js

import { useState, useEffect } from "react";

const useDirectoryContents = (folderName) => {
  const [directoryContents, setDirectoryContents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/directoryList?folderName=${folderName}`
        );
        const result = await response.json();
        setDirectoryContents(result);
      } catch (error) {
        console.error(
          `Error fetching directory contents for ${folderName}:`,
          error
        );
      }
    };

    fetchData();
  }, [folderName]);

  return directoryContents;
};

export default useDirectoryContents;
