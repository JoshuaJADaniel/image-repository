import axios from "axios";

import ActionLink from "components/ActionLink";
import Tooltip from "@material-ui/core/Tooltip";
import Checkbox from "@material-ui/core/Checkbox";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import DeleteIcon from "@material-ui/icons/DeleteForever";

const FEED_BACKEND = "https://joshuajadaniel.com/image-repository/api/feed";
const UPLOAD_ENDPOINT = `${FEED_BACKEND}/upload.php`;
const PUBLIC_ENDPOINT = `${FEED_BACKEND}/recent.php`;
const USER_UPLOADS_ENDPOINT = `${FEED_BACKEND}/user.php`;

const uploadImage = (callback, image, title, access) => {
  const form = new FormData();
  form.append("image", image, image.name);
  form.append("title", title || "");
  form.append("access", access || "");
  form.append("jwt", localStorage.getItem("jwt") || "");
  axios
    .post(UPLOAD_ENDPOINT, form, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => {
      callback(res.data);
    });
};

const getPublicItems = (callback, nextGroupKey, nextKey) => {
  axios.get(`${PUBLIC_ENDPOINT}?page=${nextGroupKey}`).then(({ data }) => {
    if (!data || !data.length) {
      callback([]);
      return;
    }

    const nextItems = [];
    for (let i = 0; i < data.length; i++) {
      const key = nextKey + i;
      const { url, title, bytes, dimensions } = data[i];
      const imageSize = bytesToSize(bytes);

      nextItems.push({
        key: `public-${key}`,
        size: imageSize,
        dimensions: dimensions,
        groupKey: nextGroupKey,
        title: title,
        url: url,
        buttons: [
          <ActionLink
            external
            size="small"
            tooltip="Open Full Size"
            icon={<OpenInNewIcon />}
            key={`home-feed-full-size-${key}`}
            link={url}
          />,
        ],
      });
    }

    callback(nextItems);
  });
};

const getUserUploads = (
  callback,
  nextGroupKey,
  nextKey,
  setToDelete,
  access
) => {
  axios
    .get(
      `${USER_UPLOADS_ENDPOINT}?page=${nextGroupKey}&jwt=${localStorage.getItem(
        "jwt"
      )}&access=${access}`
    )
    .then(({ data }) => {
      if (!data || !data.length) {
        callback([]);
        return;
      }

      const nextItems = [];
      for (let i = 0; i < data.length; i++) {
        const key = nextKey + i;
        const { url, title, bytes, dimensions } = data[i];
        const imageSize = bytesToSize(bytes);

        nextItems.push({
          key: `public-${key}`,
          size: imageSize,
          dimensions: dimensions,
          groupKey: nextGroupKey,
          title: title,
          url: url,
          buttons: [
            <ActionLink
              external
              link={url}
              tooltip="Open Full Size"
              icon={<OpenInNewIcon />}
              key={`profile-feed-${access}-full-size-${key}`}
            />,
            <Tooltip
              title="Toggle Delete"
              key={`profile-feed-${access}-delete-${key}`}
            >
              <Checkbox
                icon={<DeleteIcon />}
                checkedIcon={<DeleteIcon />}
                classes={{ root: "deleteRoot", checked: "deleteChecked" }}
                onChange={(e) => {
                  if (e.target.checked) {
                    setToDelete((oldItems) => [...oldItems, url]);
                  } else {
                    setToDelete((oldItems) =>
                      oldItems.filter((item) => item !== url)
                    );
                  }
                }}
              />
            </Tooltip>,
          ],
        });
      }

      callback(nextItems);
    });
};

const bytesToSize = (bytes) => {
  if (bytes < 1000) {
    return `${bytes}b`;
  } else if (bytes < 1000000) {
    return `${Math.round((bytes / 1000) * 100) / 100}kb`;
  }

  return `${Math.round((bytes / 1000000) * 100) / 100}mb`;
};

export { uploadImage, getPublicItems, getUserUploads };
