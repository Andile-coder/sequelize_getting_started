const User = require("../models/User");
async function createUser() {
  const newUser = await User.create({
    username: "john_doe",
    email: "john.doe@example.com",
  });
  console.log("New user created:", newUser.toJSON());
}
createUser();
