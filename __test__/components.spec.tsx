/* eslint-disable @typescript-eslint/no-unsafe-return */
import { render, screen } from "@testing-library/react";
import { Navigation, Photo, Header, Pagination } from "@/app/components";
import { MOCKED_PHOTOS } from "../__mocks__";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";

const searchParams = { sol: "1000", camera: "NAVCAM" };
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useSearchParams: () => [searchParams],
  __esModule: true,
  useRouter: jest.fn(),
}));

describe("Navigation component", () => {
  it("should navigate acordingly", () => {
    render(<Navigation></Navigation>);
    const mytest = screen.getAllByTestId("link");
    expect(mytest[0]).toHaveAttribute(
      "href",
      "/Curiosity?sol=1000&camera=FHAZ&page=1",
    );

    expect(mytest[1]).toHaveAttribute(
      "href",
      "/Opportunity?sol=1000&camera=FHAZ&page=1",
    );

    expect(mytest[2]).toHaveAttribute(
      "href",
      "/Spirit?sol=1000&camera=FHAZ&page=1",
    );
  });

  it("should render favourites", () => {
    render(<Navigation></Navigation>);

    const container = screen.getByTestId("favourites");
    expect(container).toBeInTheDocument();
  });

  it("should redirect to the right link", () => {});
});

describe("Photo component", () => {
  it("should render a card with the right elements", () => {
    const photo = MOCKED_PHOTOS.photos[0];
    const { img_src, earth_date } = photo;
    const { name: camera } = photo.camera;
    const { name: rover } = photo.rover;
    render(
      <Photo image={img_src} rover={rover} camera={camera} date={earth_date} />,
    );

    const image = screen.getByAltText(img_src);
    expect(image).toBeInTheDocument();

    expect(screen.getByText(rover)).toBeInTheDocument();
    expect(screen.getByText(camera)).toBeInTheDocument();
    expect(screen.getByText(earth_date)).toBeInTheDocument();
  });
});

describe("Header component", () => {
  it("should render camera buttons correctly", () => {
    render(<Header sol={1000} rover="Curiosity" />);
    const cameraButton = screen.getByText("FHAZ");
    expect(cameraButton).toBeInTheDocument();
  });

  it("should redirect to another camera", async () => {
    const push = jest.fn();

    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }));

    const user = userEvent.setup();
    render(<Header sol={1000} rover="Curiosity" />);
    await user.click(screen.getAllByRole("button")[0]);
    expect(push).toHaveBeenCalledWith("/Curiosity?sol=1000&camera=FHAZ&page=1");
  });

  // it("should redirect to a different sol",  () => {
  //   const push = jest.fn();

  //   (useRouter as jest.Mock).mockImplementation(() => ({
  //     push,
  //   }));

  //   // const user = userEvent.setup();
  //   render(<Header sol={1200} rover="Curiosity" />);
  //   const solInput = screen.getByTestId("solRange")
  //   fireEvent.change(solInput)

  //   expect(push).toHaveBeenCalledWith("/Curiosity?sol=1200&camera=FHAZ&page=1");
  // });
});

describe("Pagination component", () => {
  it("should render camera buttons correctly", () => {
    render(<Pagination rover="Spirit" />);
    const cameraButton = screen.getByText("Prev");
    expect(cameraButton).toBeInTheDocument();
  });

  it("should redirect to another camera", async () => {
    const push = jest.fn();

    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }));

    const user = userEvent.setup();
    render(<Pagination rover="Curiosity" />);
    await user.click(screen.getByText("Next"));
    console.log(screen.getByText("Next"));
    expect(push).toHaveBeenCalledWith("/Curiosity?sol=1000&camera=FHAZ&page=2");
  });
});
