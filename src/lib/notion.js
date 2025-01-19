import { Client } from "@notionhq/client";

function getRandomInt(minimum, maximum) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const notionToken = process.env.NEXT_PUBLIC_NOTION_TOKEN;
const notionDatabaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

const notion = new Client({
  auth: notionToken,
});

export const getDatabase = async () => {
  // const notionDatabaseId = getDatabaseId(content_type)
  // console.log("NOTION CRED", notionToken, notionDatabaseId);

  const response = await notion.databases.query({
    database_id: notionDatabaseId,
});
  return response.results;
};
getDatabase();

export const getPage = async (pageId) => {
  try {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
  } catch (err) {
    console.log("ERROR in retrieving page", err);
  }
};

export const getPageFromSlug = async (slug) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
      filter: {
        property: "Slug",
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });
    if (response?.results?.length) {
      return response?.results?.[0];
    }
    return {};
  } catch (err) {
    console.error("Error in getting page slug", err);
  }
};

export const getBlocks = async (blockID) => {
  try {
    const blockId = blockID?.replaceAll("-", "");

    const { results } = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 100,
    });

    const childBlocks = results.map(async (block) => {
      if (block.has_children) {
        const children = await getBlocks(block.id);
        return { ...block, children };
      }
      return block;
    });

    return Promise.all(childBlocks).then((blocks) =>
      blocks.reduce((acc, curr) => {
        if (curr.type === "bulleted_list_item") {
          if (acc[acc.length - 1]?.type === "bulleted_list") {
            acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
          } else {
            acc.push({
              id: getRandomInt(10 ** 99, 10 ** 100).toString(),
              type: "bulleted_list",
              bulleted_list: { children: [curr] },
            });
          }
        } else if (curr.type === "numbered_list_item") {
          if (acc[acc.length - 1]?.type === "numbered_list") {
            acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
          } else {
            acc.push({
              id: getRandomInt(10 ** 99, 10 ** 100).toString(),
              type: "numbered_list",
              numbered_list: { children: [curr] },
            });
          }
        } else {
          acc.push(curr);
        }
        return acc;
      }, [])
    );
  } catch (err) {
    console.error("Error in fetching blocks", err);
  }
};


