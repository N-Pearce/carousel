import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

const photo = TEST_IMAGES[0]

it("renders correclty", () => {
    render(<Card
            caption={photo.caption}
            src={photo.src}
            currNum={1}
            totalNum={4}/>)
})

it("matches snapchot", () => {
    const {asFragment} = render(<Card
                                caption={photo.caption}
                                src={photo.src}
                                currNum={1}
                                totalNum={5}/>)
    expect(asFragment()).toMatchSnapshot();
})