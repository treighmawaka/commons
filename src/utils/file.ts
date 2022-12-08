const path = require("path");
const fsPromises = require("fs/promises");

/**
 * Reads a the given file from the local directory.
 *
 * @param fileName 
 * @returns 
 */
async function readFile(fileName: string) {
  try {
    const location = path.resolve(__dirname, fileName);
    return await fsPromises.readFile(location);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
  }
}