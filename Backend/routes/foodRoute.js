import express from "express";
import { addFood, listFood , removeFood} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Middleware for JSON fields
foodRouter.use(express.json());
foodRouter.use(express.urlencoded({ extended: true }));

// Multer Storage
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

foodRouter.post("/add", upload.single("image") ,addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);




export default foodRouter;