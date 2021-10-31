import express from 'express';
const router = express.Router();
import * as classService from '../service/class-service.js'

import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await classService.getAllClasses())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await classService.getClassById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await classService.createClass(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await classService.deleteClass(req.params.id))));

export default router;