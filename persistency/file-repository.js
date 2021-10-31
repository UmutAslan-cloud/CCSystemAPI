import db from "../models/_sequelize_setup_.js"
import logger from '../service/logging-service.js'

export async function getAll(){
  return await db.file.findAll(
    {
      include: [
        { model: db.employe},
        { model: db.class, 
          include: [
            { model: db.task},
            { model: db.teacher},
          ]
        }
      ]
    }
  ); 
}

export async function getAllByEmployeId(pStudentId){
  return await db.file.findAll({
    where: {
      studentId: pStudentId
    },
    include: [
      { model: db.employe},
      { model: db.class, 
        include: [
          { model: db.task},
          { model: db.teacher},
        ]
      }
    ]
  }); 
}

export async function getAllByTeacherId(pTeacherId){
  return await db.enrollment.findAll({
    include: [
      { model: db.employe},
      { model: db.class, 
        include: [
          { model: db.task},
          { 
            model: db.teacher,
            where: {
              id: pTeacherId
            }
          },
        ]
      }
    ]
  }); 
}

export async function getAllByTaskId(pLectureId){
  return await db.file.findAll({
    include: [
      { model: db.employe},
      { model: db.class, 
        include: [
          { 
            model: db.task,
            where: {
              id: pLectureId
            }},
          { 
            model: db.teacher
          },
        ]
      }
    ]
  }); 
}

export async function findById(pId){
  return await db.file.findOne({
    where: {id: pId},
    include: [
      { model: db.employe},
      { model: db.class, 
        include: [
          { model: db.task},
          { model: db.teacher},
        ]
      }
    ]
  });
}

export async function create(pEntity){
  return await db.file.create(pEntity);
}

export async function remove(pId){
  return await db.file.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedEntity){
  return await db.file.update(pUpdatedEntity, {
    where: { id: pId }
  });
}