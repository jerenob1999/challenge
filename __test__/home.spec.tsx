import {  render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { getLatestPhoto } from "../utils/getLatestPhotos";
import { MOCKED_PHOTOS, MOCKED_PHOTO_MANIFEST } from "../__mocks__";
import { MockDate } from "../__mocks__/date";


jest.mock("../services/default", () => ({
  fetchManifest: jest.fn(() => Promise.resolve(MOCKED_PHOTO_MANIFEST)),
  fetchPhotos: jest.fn(() => Promise.resolve(MOCKED_PHOTOS.photos)),
}));

beforeAll(() => {
  global.Date = MockDate as DateConstructor;
});

afterAll(() => {
  global.Date = Date;
});

describe("Home component", () => {
  it("renders latest photos for the current day", async () => {
    const mockCurrentDate = new Date().getDate();
    const photos = getLatestPhoto(
      mockCurrentDate,
      MOCKED_PHOTO_MANIFEST.photo_manifest.photos
    );
    expect(photos).toBe("2023-08-22");

    const jsx = await Home();
    render(jsx);

    const heading = screen.getByTestId("heading");
    expect(heading).toHaveTextContent(
      `Latest photos from current day : ${mockCurrentDate}`
    );

  });

  it("should render photo container", async () => {

    const jsx = await Home();
    render(jsx);

    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });
});
