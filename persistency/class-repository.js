import db from "../models/_sequelize_setup_.js"
import logger from '../service/logging-service.js'

export async function getAll(){
  return await db.class.findAll(    
    {
      include: [
        { model: db.lecture},
        { model: db.teacher},
      ]
    }); 
}

export async function findById(pId){
  return await db.class.findOne({
    where: {id: pId},
    include: [
      { model: db.lecture},
      { model: db.teacher},
    ]
  });
}

export async function create(pEntity){
  return await db.class.create(pEntity);
}

export async function remove(pId){
  return await db.class.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedEntity){
  return await db.class.update(pUpdatedEntity, {
    where: { id: pId }
  });
}