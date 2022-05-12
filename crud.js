const { MongoClient } = require("mongodb");

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/drivers/node/ for more details
   */
  const uri =
    "mongodb+srv://JustinMyerson:Gz54UqFDyC*A@cluster0.yipi5.mongodb.net/test";

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    async function createNewTodo(client, newToDo) {
      const result = await client
        .db("tasks")
        .collection("todo")
        .insertOne(newToDo);
      console.log(
        `New todo created with the following id: ${result.insertedId}`
      );
    }

    await createNewTodo(client, {
      name: "Go For a Run",
      isComplete: false,
      id: Math.floor(Math.random() * 9999999),
      color: "#white",
    });

    // Make the appropriate DB calls
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);
