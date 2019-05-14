import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  applicationId:
    "{c23b06f5553b06b704c0af317f7f9490e88712216180d9162de3e355ac3d602d}",
  secret: "{b5252deb184a488ccaff8789180ec47e07d77506cc1ce40f1d6a0f952cb02cbe}"
});

unsplash.photos
  .listPhotos(2, 15, "latest")
  .then(toJson)
  .then(json => {
    // Your code
  });
