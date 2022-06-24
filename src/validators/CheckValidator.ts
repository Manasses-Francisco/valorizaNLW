import { check } from "express-validator";

export const userCreateValidator = [
  check("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 5 })
    .withMessage("Name must be at least 5 chars long"),
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Required Email the type aaa@aa.aa"),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 chars long"),
];

export const loginValidator = [
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Required Email the type aaa@aa.aa"),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 chars long"),
];

export const createComplimentValidator = [
  check("message").notEmpty().withMessage("Email is required")
];

export const createTagValidator = [
  check("name").notEmpty().withMessage("Email is required")
];

export const updateUserValidator = [
  check("name")
  .notEmpty().withMessage("Name is required, not null")
  .isLength({ min: 5 })
  .withMessage("Name must be at least 5 chars long"),
  check("password")
  .notEmpty()
  .withMessage("Password is required")
  .isLength({ min: 5 })
  .withMessage("Password must be at least 5 chars long")
]
