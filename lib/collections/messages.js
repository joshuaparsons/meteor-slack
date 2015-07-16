
// Define a new collection in MongoDB
// We can place this line of code anywhere except
// in the special directories, since we want this
// file to be available on both the client and
// the server
Messages = new Mongo.Collection("messages");