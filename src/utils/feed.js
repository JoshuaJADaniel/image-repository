import axios from "axios";

const FEED_BACKEND = "https://joshuajadaniel.com/image-repository/api/feed";
const UPLOAD_ENDPOINT = `${FEED_BACKEND}/upload.php`;

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

export { uploadImage };
