conn = new Mongo();
db = conn.getDB("Trabajo_08");

db.equipos.insert(
  [
   {nombre: 'Virtupro', integrantes: '5', email: 'jfarfan@abc.com', estado:'A', created_at: new Date('01/23/2020')}
 ]);
