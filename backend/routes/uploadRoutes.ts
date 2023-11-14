// import path from "path";
// import express from "express";
// import multer from "multer";
// const router = express.Router();

// const storage = multer.diskStorage({
//   destination(req, file, callback) {
//     callback(null, `uploads/`);
//   },
//   filename(req, file, callback) {
//     callback(
//       null,
//       `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });
// function fileFilter(req, file, cb) {
//     const filetypes = /jpe?g|png|webp/;
//     const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = mimetypes.test(file.mimetype);

//     if (extname && mimetype) {
//       cb(null, true);
//     } else {
//       cb(new Error('Images only!'), false);
//     }
//   }

//   const upload = multer({ storage, fileFilter });
//   const uploadSingleImage = upload.single('image');

//   router.post('/', (req, res) => {
//     uploadSingleImage(req, res, function (err) {
//       if (err) {
//         return res.status(400).send({ message: err.message });
//       }

//       res.status(200).send({
//         message: 'Image uploaded successfully',
//         image: `/${req.file.path}`,
//       });
//     });
//   });

// export default router;

import path from "path";
import express, { Request, Response, NextFunction } from "express";
import multer, { FileFilterCallback } from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination(
    req: Request,
    file: Express.Multer.File,
    callback: (error: Error | null, destination: string) => void
  ) {
    callback(null, `uploads/`);
  },
  filename(
    req: Request,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void
  ) {
    callback(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function fileFilter(
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) {
  const filetypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = mimetypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Images only!"));
  }
}

const upload = multer({ storage, fileFilter });
const uploadSingleImage = upload.single("image");

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  uploadSingleImage(req, res, function (err: any) {
    if (err) {
      return res.status(400).send({ message: err.message });
    }

    // Ensure req.file is not undefined before using it
    if (!req.file) {
      return res.status(400).send({ message: "No file uploaded" });
    }

    res.status(200).send({
      message: "Image uploaded successfully",
      image: `/${req.file.path}`,
    });
  });
});

export default router;
