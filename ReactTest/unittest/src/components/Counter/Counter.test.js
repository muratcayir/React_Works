import {render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';

import Counter from "./index"

describe("counter test",()=>{
    let increaseBtn,decreaseBtn,counter;
    beforeEach(()=>{
        console.log("Tüm testlerden önce bir defa çalışacaktır")
        render(<Counter/>)
        increaseBtn=screen.getByText("Increase")
        decreaseBtn=screen.getByText("Decrease")
        counter=screen.getByText("0")
    })

    beforeAll(()=>{
        console.log("Sadece bir defa çalıştırılacaktır")
    })

    test("increaseBtn",()=>{
    userEvent.click(increaseBtn)
    expect(counter).toHaveTextContent("1")
    })
    test("decreaseBtn",()=>{
    userEvent.click(decreaseBtn)
    expect(counter).toHaveTextContent("-1")
    })
})
