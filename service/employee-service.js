import * as employeRepository from '../persistency/employe-repository.js'
import config from '../environment-config.json';


export async function createEmployee(pStudent){
    return await employeRepository.create(pStudent);
}

export async function deleteEmployee(pId){
    return await employeRepository.remove(pId);
}

export async function getAllEmployee(){
    return await employeRepository.getAll();
}

export async function getEmployeById(pId){
    return await employeRepository.findById(pId);
}

export async function updateEmploye(pId, pUpdateEntity){
    return await employeRepository.update(pId, pUpdateEntity);
}