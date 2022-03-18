import { fileUpload } from "../../helpers/fileUpload";

describe("test in fileUpload", () => {
  test("should upload an image and return URL", async () => {
    const resp = await fetch(
      "https://www.collinsdictionary.com/images/full/mountain_221506423.jpg"
    );
    const blob = await resp.blob();

    const file = new File([blob], "photo.png");
    const url = await fileUpload(file);

    expect(typeof url).toBe("string");

    //  Borrar imagen
    // const segments = url.split("/");
    // const imgId = segments[segments.length - 1].replace(".png", "");
  });

  test("should return an error", async () => {
    const file = new File([], "photo.png");
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
