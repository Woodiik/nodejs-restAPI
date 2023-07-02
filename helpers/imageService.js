const Jimp = require("jimp");
const path = require("path");
async function resizeAvatar(avatarPath, userId, originalName) {
  try {
    const image = await Jimp.read(avatarPath);

    await image.resize(250, 250);

    const uniqueName = `${userId}${originalName}`;

    const saveDir = path.join(__dirname, "../", "public", "avatars");

    const savedImagePath = path.join(saveDir, uniqueName);

    await image.writeAsync(savedImagePath);

    return savedImagePath;
  } catch (error) {
    console.error("Image edit error:", error);
    throw error;
  }
}

module.exports = resizeAvatar;
