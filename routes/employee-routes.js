import express from 'express';
const router = express.Router();
import * as employeeService from '../service/employee-service.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await employeeService.getAllEmployee())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await employeeService.getEmployeById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await employeeService.createEmployee(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await employeeService.deleteEmployee(req.params.id))));

export default router;