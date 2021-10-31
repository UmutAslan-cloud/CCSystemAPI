import db from "../models/_sequelize_setup_.js"

export async function getAll(){
  return await db.employe.findAll(); 
}

export async function findById(pId){
  return await db.employe.findByPk(pId);
}

export async function create(pStudent){
  return await db.employe.create(pStudent);
}

export async function remove(pId){
  return await db.employe.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedStudent){
  return await db.employe.update(pUpdatedStudent, {
    where: { id: pId }
  });
}