import Button from "./Button";

const meta = {
    component: Button,
    title: "Atomic Button",
    tags: ["autodocs"]
}

export const primary = {
    args: {
        type: "primary",
        size: "lg",
        text: "PrimaryBtn"
    }
}

export const Danger = {
    args: {
        type: "danger",
        size: "sm",
        text: "DangerBtn",
        style: {"padding": "1px", "margin": "1px"}
    },
}


export const Others = {
render: () => (
    <div className="border">
    <Button type="base" text="BASE"
            style={{ color: "yellow" }} />
    <Button type="primary" text="PriBtn"
            className="p-7 text-red-400" />
    <Button
        text="DangerBtn"
        onClick={() => alert("danger")}
        type="danger"
        className="p-7"
    />

    <Button text="Default" />

    <button className="btn-primary text-sm text-red-500">XX</button>
    </div>
),
};
  
  

export default meta;