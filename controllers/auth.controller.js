// import User from "../backend/models/user.model";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmpassword, gender } = req.body;

    if (pasword !== confirmpassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exit" });
    }

    // Hash password is here

    // https:// avatar-placeholder.iran.liara.run/
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    });
    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic
    });
  } catch (error) {
    console.log("Error in Signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = (req, res) => {
  console.log("Login User");
};

export const logout = (req, res) => {
  console.log("Logout User");
};
