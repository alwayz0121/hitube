// cwd (current working directory, 현재 작업 디렉토리)
// 어디에서 node.js를 부르고 서버를 기동하는가?
// => package.json이 node.js를 시작함
import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  //form 을 통해 받는 모든 결과는 req.body에 담긴다. express.urlencoded 미들웨어를 설정해야 사용 가능
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  // here we will add a video to the videos array.
  const { title } = req.body;
  return res.redirect("/");
};
