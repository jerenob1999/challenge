import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { getLatestPhoto } from "../utils/getLatestPhotos";
import { MOCKED_PHOTOS, MOCKED_PHOTO_MANIFEST } from "../__mocks__";
import { MockDate } from "../__mocks__/date";
import Rovers from "@/app/[rovers]/page";

const searchParams = { sol: "1000", camera: "NAVCAM" };
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useSearchParams: () => [searchParams],
  __esModule: true,
  useRouter: jest.fn(),
}));

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

describe("Home Page", () => {
  it("renders latest photos for the current day", async () => {
    const mockCurrentDate = new Date().getDate();
    const photos = getLatestPhoto(
      mockCurrentDate,
      MOCKED_PHOTO_MANIFEST.photo_manifest.photos,
    );
    expect(photos).toBe("2023-08-22");

    const jsx = await Home();
    render(jsx);

    const heading = screen.getByTestId("heading");
    expect(heading).toHaveTextContent(
      `Latest photos from current day : ${mockCurrentDate}`,
    );
  });

  it("should render photo container", async () => {
    const jsx = await Home();
    render(jsx);

    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });
});

describe("Rover Page", () => {
  it("should contain PhotoContainer", async () => {
    const params = {
      rovers: "Curiosity",
    };

    const searchParams = {
      sol: "2000",
      camera: "NAVCAM",
      page: "2",
    };
    const jsx = await Rovers({ params, searchParams });
    render(jsx);

    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });
  it("should contain a Header", async () => {
    const params = {
      rovers: "Curiosity",
    };

    const searchParams = {
      sol: "2000",
      camera: "NAVCAM",
      page: "2",
    };
    const jsx = await Rovers({ params, searchParams });
    render(jsx);

    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  it("should not contain notFound", async () => {
    const params = {
      rovers: "Curiosity",
    };

    const searchParams = {
      sol: "2000",
      camera: "NAVCAM",
      page: "2",
    };
    const jsx = await Rovers({ params, searchParams });
    render(jsx);

    expect(() => screen.getByText(/No photos found./i)).toThrow();
  });
});
