import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import DownloadIcon from "@material-ui/icons/SaveAlt";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

import ActionLink from "components/ActionLink";
import ActionButton from "components/ActionButton";
import { Tooltip } from "@material-ui/core";

const getItemsWrapper = (nextGroupKey, nextKey, e, setToDelete, feedKey) => {
  const nextItems = [];
  const itemLoad = 5;

  for (let key = nextKey; key < nextKey + itemLoad; key++) {
    const imageKey = Math.floor(Math.random() * 20) + 1;
    const imageUrl = `https://joshuajadaniel.com/temp/${imageKey}.jpg`;
    console.log(key);

    nextItems.push({
      url: imageUrl,
      groupKey: nextGroupKey,
      key: `profile-feed-${feedKey}-item-${key}`,
      title: "Temporary title for elements",
      buttons: [
        <ActionButton
          tooltip="Download"
          icon={<DownloadIcon />}
          key={`profile-feed-${feedKey}-download-${key}`}
          onClick={() => console.log(`Download ${imageUrl}`)}
        />,
        <ActionLink
          external
          tooltip="Open Full Size"
          icon={<OpenInNewIcon />}
          key={`profile-feed-${feedKey}-full-size-${key}`}
          link={imageUrl}
        />,
        <Tooltip
          title="Toggle Delete"
          key={`profile-feed-${feedKey}-delete-${key}`}
        >
          <Checkbox
            icon={<DeleteIcon />}
            checkedIcon={<DeleteIcon />}
            classes={{ root: "deleteRoot", checked: "deleteChecked" }}
            onChange={(e) => {
              if (e.target.checked) {
                setToDelete((oldItems) => [...oldItems, imageUrl]);
              } else {
                setToDelete((oldItems) =>
                  oldItems.filter((item) => item !== imageUrl)
                );
              }
            }}
          />
        </Tooltip>,
      ],
    });
  }

  return nextItems;
};

export { getItemsWrapper };
