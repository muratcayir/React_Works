import {render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';


import Todo from "./index"

describe("Todo Test",()=>{

let button,input;

beforeEach(()=>{
render( <Todo/>)

button=screen.getByText("Add")
input=screen.getByLabelText("Text")
})

test("Varsayılan olarak 3 item render  edilmeli",()=>{
const items= screen.getAllByText(/Adım/i)
expect(items.length).toEqual(3)
})

test("Başlangıçta input ve  button bulunmalı",()=>{
    expect(button).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    })

    test("listeye elaman ekleme işlemi gerçekleşmeli",()=>{
      
        const name="mehmet";
        userEvent.type(input,name)

        userEvent.click(button);

        expect(screen.getByText(name)).toBeInTheDocument()

    })
})