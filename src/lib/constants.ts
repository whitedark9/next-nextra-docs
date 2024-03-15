const name = "project name"; // TODO: rename
const author = "https://github.com/user"; //TODO: rename
const repository = author + "/" + name;
const nameShort = "S.H.O.R.T.";
const domain = "https://project_name.vercel.app";
const description = "lorem ipsum";

const APP = {
  name,
  nameShort,
  github: { author, repository },
  domain,
  description,
};

export default APP;
