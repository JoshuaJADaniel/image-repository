import axios from "axios";

import ActionLink from "components/ActionLink";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const FEED_BACKEND = "https://joshuajadaniel.com/image-repository/api/feed";
const UPLOAD_ENDPOINT = `${FEED_BACKEND}/upload.php`;
const PUBLIC_ENDPOINT = `${FEED_BACKEND}/recent.php`;

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
      let imageSize = "";
      if (bytes < 1000) {
        imageSize = `${bytes}b`;
      } else if (bytes < 1000000) {
        imageSize = `${Math.round((bytes / 1000) * 100) / 100}kb`;
      } else {
        imageSize = `${Math.round((bytes / 1000000) * 100) / 100}mb`;
      }

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

export { uploadImage, getPublicItems };
