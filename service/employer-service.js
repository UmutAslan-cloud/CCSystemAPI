import * as employerRepository from '../persistency/employer-repository.js'
import config from '../environment-config.json';


export async function createEmployer(pTeacher){
    return await employerRepository.create(pTeacher);
}

export async function deleteEmployer(pId){
    return await employerRepository.remove(pId);
}

export async function getAllEmployers(){
    return await employerRepository.getAll();
}

export async function getEmployerById(pId){
    return await employerRepository.findById(pId);
}

export async function updateEmployer(pId, pUpdateEntity){
    return await employerRepository.update(pId, pUpdateEntity);
}
