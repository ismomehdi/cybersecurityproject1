/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2mvvndr8rouyln6")

  collection.listRule = "@request.auth.id != \"\"\n"
  collection.viewRule = "@request.auth.id != \"\"\n"
  collection.createRule = "@request.auth.id != \"\"\n"
  collection.updateRule = "@request.auth.id != \"\"\n"
  collection.deleteRule = "@request.auth.id != \"\"\n"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2mvvndr8rouyln6")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
