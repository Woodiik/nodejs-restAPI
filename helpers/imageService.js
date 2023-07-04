const Jimp = require("jimp");
const path = require("path");
const resizeAvatar = async (avatarPath, userId, originalName) => {
  try {
    const image = await Jimp.read(avatarPath);

    await image.resize(250, 250);

    const uniqueName = `${userId}${originalName}`;

    const saveDir = path.join(__dirname, "../", "public", "avatars");

    const savedImagePath = path.join(saveDir, uniqueName);

    await image.writeAsync(savedImagePath);

    const avatarURL = `/avatars/${uniqueName}`;

    return avatarURL;
  } catch (error) {
    console.error("Image edit error:", error);
    throw error;
  }
};
module.exports = resizeAvatar;
