import Request from "./request.js";

export default function search(text = "jack+johnson") {
  Request.get( `https://itunes.apple.com/search?term=${text}`, data => console.log(data));
}
