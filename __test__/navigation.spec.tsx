/* eslint-disable @typescript-eslint/no-unsafe-return */
import { render, screen } from "@testing-library/react";
import { Navigation } from "@/app/components";
// import { useRouter } from "next/router"

const searchParams = { sol: "1000", camera: "NAVCAM" };
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useSearchParams: () => [searchParams],
}));

// jest.mock("next/dist/client/router", () => ({
//   useRouter: jest.fn(),
// }))

describe("Navigation component", () => {
  // const mockPush = jest.fn(() => Promise.resolve(true));

  // beforeAll(() => {
  //   (useRouter as jest.Mock).mockReturnValue({
  //     asPath: "/opportunity",
  //     query: {sol: '1000', camera: 'FHAZ' , page: '1' },
  //     push: mockPush,
  //     prefetch: jest.fn().mockResolvedValue(true)
  //   })
  // })
  it("should navigate acordingly", () => {
    render(<Navigation></Navigation>);
    const mytest = screen.getAllByTestId("link");
    expect(mytest[0]).toHaveAttribute(
      "href",
      "/Curiosity?sol=1000&camera=FHAZ&page=1"
    );

    expect(mytest[1]).toHaveAttribute(
      "href",
      "/Opportunity?sol=1000&camera=FHAZ&page=1"
    );

    expect(mytest[2]).toHaveAttribute(
      "href",
      "/Spirit?sol=1000&camera=FHAZ&page=1"
    );
    
  });

  it("should render favourites", () => {
    render(<Navigation></Navigation>);

    const container = screen.getByTestId("favourites");
    expect(container).toBeInTheDocument();
  });

  it("should redirect to the right link", () => {});
});
