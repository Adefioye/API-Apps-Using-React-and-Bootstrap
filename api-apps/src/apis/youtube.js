// AIzaSyD6Nr7iIFIkJyTs6fIOlvNS9Z6Rp69Crmw
// params maxResults=5
import axios from "axios";

const KEY = "AIzaSyD6Nr7iIFIkJyTs6fIOlvNS9Z6Rp69Crmw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    key: KEY,
  },
});
