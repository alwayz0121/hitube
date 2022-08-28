export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => {
  return res.send(`See Video #${req.params.id}`);
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("Edit Video");
};
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const remove = (req, res) => {
  console.log(req.params);
  return res.send("Remove Video");
};
