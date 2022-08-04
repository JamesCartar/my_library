const express = require("express");
const router = express.Router();
const pdfBookModel = require("../models/pdfbook");

router.get("/111", async (req, res) => {
  const result = await getPdfBooks("Art");
  const Photography = await getPdfBooks("Photography");
  const Painting = await getPdfBooks("Painting & Drawing");
  const Craft = await getPdfBooks("Craft & Hobbies");
  const Architecture = await getPdfBooks("Architecture");
  res.send([...result, ...Photography, ...Painting, ...Craft, ...Architecture]);
});

router.get("/11", async (req, res) => {
  const result = await getPdfBooks("Fiction & Literature");
  const classic = await getPdfBooks("Classic Literature");
  const poetry = await getPdfBooks("Poetry");
  res.render("category.ejs", { result: [...result, ...classic, ...poetry] });
});

router.get("/23", async (req, res) => {
  const result = await getPdfBooks("Academic & Education");
  res.render("category.ejs", { result });
});

router.get("/15", async (req, res) => {
  const result = await getPdfBooks("Art");
  const Photography = await getPdfBooks("Photography");
  const Painting = await getPdfBooks("Painting & Drawing");
  const Craft = await getPdfBooks("Craft & Hobbies");
  const Architecture = await getPdfBooks("Architecture");
  res.render("category.ejs", {
    result: [...result, ...Photography, ...Painting, ...Craft, ...Architecture],
  });
});

router.get("/13", async (req, res) => {
  const result = await getPdfBooks("Health & Fitness");
  const Medical = await getPdfBooks("Medical");
  const Fitness = await getPdfBooks("Fitness & Diet");
  const Food = await getPdfBooks("Food & Nutrition");
  res.render("category.ejs", {
    result: [...result, ...Medical, ...Fitness, ...Food],
  });
});

router.get("/100", async (req, res) => {
  const result = await getPdfBooks("Lifestyle");
  const Fishion = await getPdfBooks("Fashion & Beauty");
  const Home = await getPdfBooks("Home & Garden");
  const Food = await getPdfBooks("Food & Nutrition");
  const Travel = await getPdfBooks("Travel");
  const Environment = await getPdfBooks("Environment");

  res.render("category.ejs", {
    result: [
      ...result,
      ...Fishion,
      ...Home,
      ...Food,
      ...Travel,
      ...Environment,
    ],
  });
});

router.get("/77", async (req, res) => {
  const result = await getPdfBooks("Environment");
  const Children = await getPdfBooks("Children & Youth");
  const Parenting = await getPdfBooks("Parenting");
  const Travel = await getPdfBooks("Travel");
  res.render("category.ejs", {
    result: [...result, ...Travel, ...Children, ...Parenting],
  });
});

router.get("/87", async (req, res) => {
  const result = await getPdfBooks("Business & Career");
  const Finance = await getPdfBooks("Finance");
  const Marketing = await getPdfBooks("Marketing");
  const Career = await getPdfBooks("Career");
  const Time = await getPdfBooks("Time Management");
  const Leadership = await getPdfBooks("Leadership");
  const Economic = await getPdfBooks("Economic");
  res.render("category.ejs", {
    result: [
      ...result,
      ...Finance,
      ...Marketing,
      ...Career,
      ...Time,
      ...Leadership,
      ...Economic,
    ],
  });
});

router.get("/73", async (req, res) => {
  const result = await getPdfBooks("Psychology");
  const Personal = await getPdfBooks("Personal Growth");
  const Spiritualty = await getPdfBooks("Spiritualty");
  const Relationships = await getPdfBooks("Relationships");
  const Religion = await getPdfBooks("Religion");
  const SelfImprovement = await getPdfBooks("Self-improvement");
  res.render("category.ejs", {
    result: [
      ...Personal,
      ...result,
      ...Spiritualty,
      ...Religion,
      ...Relationships,
      ...SelfImprovement,
    ],
  });
});

router.get("/99", async (req, res) => {
  const result = await getPdfBooks("Politics & Laws");
  const Politics = await getPdfBooks("Politics");
  const Law = await getPdfBooks("Law");
  res.render("category.ejs", { result: [...result, ...Politics, ...Law] });
});

router.get("/22", async (req, res) => {
  const result = await getPdfBooks("Religion");
  res.render("category.ejs", { result });
});

router.get("/40", async (req, res) => {
  const result = await getPdfBooks("Science & Research");
  const Physics = await getPdfBooks("Physics");
  const Math = await getPdfBooks("Math");
  const Chemistry = await getPdfBooks("Chemistry");
  const Biology = await getPdfBooks("Biology");
  const Environment = await getPdfBooks("Environment");
  const Astronomy = await getPdfBooks("Astronomy & Space");
  const Archaeology = await getPdfBooks("Archaeology");
  res.render("category.ejs", {
    result: [
      ...result,
      ...Physics,
      ...Math,
      ...Chemistry,
      ...Biology,
      ...Environment,
      ...Astronomy,
      ...Archaeology,
    ],
  });
});

router.get("/41", async (req, res) => {
  const result = await getPdfBooks("Technology");
  const Software = await getPdfBooks("Software");
  const Internet = await getPdfBooks("Internet");
  const Hardware = await getPdfBooks("Hardware");
  const Programming = await getPdfBooks("Programming");
  const WebDesign = await getPdfBooks("Web Design");
  const Tutorials = await getPdfBooks("Tutorials");
  const Automotive = await getPdfBooks("Automotive");
  res.render("category.ejs", {
    result: [
      ...result,
      ...Software,
      ...Internet,
      ...Hardware,
      ...Programming,
      ...WebDesign,
      ...Tutorials,
      ...Automotive,
    ],
  });
});

function getPdfBooks(category) {
  return pdfBookModel.find({
    category: category,
  });
}

module.exports = router;
