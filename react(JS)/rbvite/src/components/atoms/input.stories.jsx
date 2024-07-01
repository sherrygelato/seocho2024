import Input from "./Input";

const meta = {
    component: Input,
    title: "Atomic Input",
    tags: ["autodocs"]
}

export const DefaultInput = {
    args: {
        label: "DefaultInput"
    }
}

export const NameInput = {
    args: {
        placeholder: "상품명",
        ref: {}
    }
}

export const PriceInput = {
    args: {
        placeholder: "금액",
        type: "number",
        ref: {}
    }
}

export const UserIdInput = {
    args: {
        label: "Name",
        ref: {}
    }
}

export const UserPasswordInput = {
    args: {
        label: "Password",
        type: "password",
        ref: {}
    }
}

export const EmailInput = {
    args: {
        label: "Email",
        type: "email",
        ref: {}
    }
}

export const NumberInput = {
    args: {
        label: "Number",
        type: "number",
        ref: {}
    }
}

export const DateInput = {
    args: {
        label: "Date",
        type: "date",
        ref: {}
    }
}

export const TelInput = {
    args: {
        label: "전화번호",
        type: "tel",
        ref: {}
    }
}

export const Others = {
    render: () => (
        <>
            <Input type="text" label="ID" placeholder="User Id..." />
            <Input type="text" label="Password" placeholder="User Password..." />
        </>
    )
}

export default meta