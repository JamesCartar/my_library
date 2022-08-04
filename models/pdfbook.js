const mongoose = require("mongoose");

const pdfBookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  dataId: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  downloadLink: {
    type: String,
    default: "ssssssss",
  },
  pageCount: {
    type: String,
  },
  publishAdt: {
    type: Date,
  },
  fileSize: {
    type: String,
  },
  bookInfo: {
    type: String,
  },
  quote: {
    type: String,
  },
  previewLink: {
    type: String,
  },
  downloadCount: {
    type: String,
  },
  coverImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ModifiedPdfBooks", pdfBookSchema);

// detail page
// const EndUrl = $(this).find(".file-left").children().attr("href");
// const page = "https://www.pdfdrive.com" + EndUrl;
// axios(page).then((response) => {
//   let detailHtml = response.data;
//   const $$ = cheerio.load(detailHtml);
//   $$(".ebook-buttons", detailHtml).each(function () {
//     downloadLinkH = $(this)
//       .find("#previewButtonMain")
//       .attr("data-preview")
//       .split("=")[2];
//     downloadLinkId = $(this)
//       .find("#previewButtonMain")
//       .attr("data-preview")
//       .split("=")[1]
//       .split("&")[0];
//     downloadLink = `https://www.pdfdrive.com/download.pdf?id=${downloadLinkId}&h=${downloadLinkH}&u=cache&ext=pdf`;
//   });
// });
